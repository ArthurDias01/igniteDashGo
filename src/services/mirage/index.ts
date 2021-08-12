import { createServer, Factory, Model, Response, ActiveModelSerializer } from "miragejs";
import faker from 'faker';

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      user: Model.extend<Partial<User>>({})
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        }
      })
    },

    seeds(server) {
      server.createList('user', 200)
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750; // teste de carregamentos/loadings - tempo de 750ms
      this.get('/users', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams
        const total = schema.all('user').length;
        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all('user')).users.slice(pageStart, pageEnd)

        return new Response(
          200,
          { 'x-total-count': String(total) },
          { users }
        )
      });
      this.get(`/users/:id`)
      this.post('/users');

      this.namespace = ''; // opção para permitir as rotas api do proprio next, após fazer as chamadas api/x no mirage o caminho /api é resetado para /.
      this.passthrough() // método utilizado para no Next (chamadas api que não tiverem rotas configuradas no mirage passarão a chamar a rota api da pasta respectiva do next.)
    }
  })
  return server;
}

import { createServer, Factory, Model } from "miragejs";
import faker from 'faker';

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
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
      server.createList('user', 10)
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750; // teste de carregamentos/loadings - tempo de 750ms
      this.get('/users');
      this.post('/users');

      this.namespace = ''; // opção para permitir as rotas api do proprio next, após fazer as chamadas api/x no mirage o caminho /api é resetado para /.
      this.passthrough() // método utilizado para no Next (chamadas api que não tiverem rotas configuradas no mirage passarão a chamar a rota api da pasta respectiva do next.)
    }
  })
  return server;
}

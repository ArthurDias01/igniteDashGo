import {
  Box, Flex, Divider, VStack, SimpleGrid, HStack, Button
} from '@chakra-ui/react';
import { Header } from '../../components/Header';
import { HeadingComponent } from '../../components/Heading'
import { Sidebar } from '../../components/Sidebar';
import { Input } from '../../components/Form/Input';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { api } from '../../services/api';
import { queryClient } from '../../services/queryClient';
import { useRouter } from 'next/router';


type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('O nome é Obrigatório').max(40, 'máximo de 40 caractéres'),
  email: yup.string().required('O email é obrigatório!').email('E-mail inválido'),
  password: yup.string().required('Tem certeza que digitou a senha?').min(8, 'mínimo de 8 caractéres'),
  password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais!'),
})

export default function CreateUser() {
  const router = useRouter();

  const createUser = useMutation(async (user: CreateUserFormData) => {
    const response = await api.post('users', {
      user: {
        ...user,
        created_at: (new Date()).toLocaleString('pt-BR', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        }),
      }
    })
    return response.data.user;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })


  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await createUser.mutateAsync(values)
    console.log(values)
    router.push('/users')
  }
  return (
    <Box>
      <Header />
      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />
        <Box
          as='form'
          flex='1'
          borderRadius={8}
          bg='gray.800'
          p={['6', '8']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <HeadingComponent title='Criar Usuários' />
          <Divider my='6' borderColor='gray.700' />
          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>

              <Input
                name='name'
                type='text'
                label='Nome Completo'
                {...register('name')}
                error={formState.errors.name} />

              <Input
                name='email'
                type='email'
                label='E-mail'
                {...register('email')}
                error={formState.errors.email} />

            </SimpleGrid>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>

              <Input
                name='password'
                type='password'
                label='Senha'
                {...register('password')}
                error={formState.errors.password} />

              <Input
                name='password_confirmation'
                type='password'
                label='Confirmação da senha'
                {...register('password_confirmation')}
                error={formState.errors.password_confirmation} />

            </SimpleGrid>
          </VStack>
          <Flex mt='8' justify='flex-end'>
            <HStack spacin='4'>
              <Link href='/users/' passHref>
                <Button as='a' colorScheme='whiteAlpha'>Cancelar</Button>
              </Link>
              <Button
                type='submit'
                colorScheme='pink'
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box >
  )
}

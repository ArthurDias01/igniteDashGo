import {
  Box, Flex,
  Button, HStack,
  Icon, Table,
  Thead, Tr,
  Th, Checkbox,
  Tbody, Spinner,
  useBreakpointValue, Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { RiAddLine, RiLoader3Line } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { HeadingComponent } from '../../components/Heading';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';
import { UserInfo } from '../../components/UserInfo';
import { useQuery } from 'react-query';


export default function UserList() {

  const { data, isLoading, error, isFetching, refetch, } = useQuery('usersCache', async () => {
    const response = await fetch('http://localhost:3000/api/users');
    const data = await response.json();

    const users = data.users.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })
      }
    });
    return users;
  }, {
    staleTime: 1000 * 5, //5 segundos para considerar obsoleto
  })

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true
  });



  return (
    <Box>
      <Header />
      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />
        <Box flex='1' borderRadius={8} bg='gray.800' p={['4', '8']}>
          <Flex mb='8' mx='auto' justify='space-between' align='center'>
            <HeadingComponent title='Usuários' isFetching={isFetching} isLoading={isLoading} />
            <HStack align='center' justify='flex-end' spacing='4'>
              {!isLoading && (
                <Button as='a' size='sm' fontSize='sm' colorScheme='pink' onClick={refetch}
                  leftIcon={<Icon as={RiLoader3Line} fontSize='20' />}
                >
                  Atualizar
                </Button>
              )}
              <Link href='/users/create' passHref>
                <Button as='a' size='sm' fontSize='sm' colorScheme='pink'
                  leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                >
                  Criar Novo
                </Button>
              </Link>
            </HStack>
          </Flex>
          {isLoading ? (
            <Flex justify='center'>
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify='center'>
              <Text>Falha ao obter dados dos usuários</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme='whiteAlpha'>
                <Thead>
                  <Tr>
                    <Th px={['4', '4', '6']} color='gray.300' w='8'>
                      <Checkbox colorScheme='pink' />
                    </Th>
                    <Th>Usuário</Th>
                    {isWideVersion && <Th>Data de Cadastro</Th>}
                    <Th w='8'></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((user) => {
                    return (
                      <UserInfo
                        name={user.name}
                        email={user.email}
                        createdAt={user.createdAt} />
                    )
                  })}

                </Tbody>
              </Table>
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box >
  )
}

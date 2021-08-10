import {
  Box, Flex,
  Button,
  Icon, Table,
  Thead, Tr,
  Th, Checkbox,
  Tbody,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { RiAddLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { HeadingComponent } from '../../components/Heading';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';
import { UserInfo } from '../../components/UserInfo';


export default function UserList() {
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
            <HeadingComponent title='Usuários' />
            <Link href='/users/create' passHref>
              <Button as='a' size='sm' fontSize='sm' colorScheme='pink'
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
              >
                Criar Novo
              </Button>
            </Link>
          </Flex>
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
              <UserInfo
                name='Arthur Dias'
                email='arthursantos01@gmail.com'
                createdAt='04 Ago 2021' />
              <UserInfo
                name='Arthur Dias'
                email='arthursantos01@gmail.com'
                createdAt='04 Ago 2021' />
              <UserInfo
                name='Arthur Dias'
                email='arthursantos01@gmail.com'
                createdAt='04 Ago 2021' />
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box >
  )
}

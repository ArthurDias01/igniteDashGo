import {
  Box, Flex,
  Heading, Button,
  Icon, Table,
  Thead, Tr,
  Th, Checkbox,
  Tbody, Td,
  Text,
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';


export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />
        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>Usuários</Heading>
            <Button as='a' size='sm' fontSize='sm' colorScheme='pink'
              leftIcon={<Icon as={RiAddLine} fontSize='20' />}
            >
              Criar Novo
            </Button>
          </Flex>
          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px='6' color='gray.300' w='8'>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de Cadastro</Th>
                <Th w='8'></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td px='6'>
                  <Box>
                    <Text fontWeight='bold'>Arthur Dias</Text>
                    <Text fontSize='sm' color='gray.300'>arthursantos01@gmail.com</Text>
                  </Box>
                </Td>
                <Td>04 Ago 21</Td>
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme='facebook'
                    leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box >
  )
}
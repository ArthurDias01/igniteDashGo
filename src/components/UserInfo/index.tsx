import { Box, Checkbox, Td, Text, Tr } from '@chakra-ui/react';
import { EditButton } from '../EditButton'

interface UserInfoProps {
  name: string;
  email: string;
  createdAt: string;
}

export function UserInfo({ name, email, createdAt }: UserInfoProps) {
  return (
    <Tr>
      <Td px='6'>
        <Checkbox colorScheme='pink' />
      </Td>
      <Td px='6'>
        <Box>
          <Text fontWeight='bold'>{name}</Text>
          <Text fontSize='sm' color='gray.300'>{email}</Text>
        </Box>
      </Td>
      <Td>{createdAt}</Td>
      <Td>
        <EditButton />
      </Td>
    </Tr>
  );
}

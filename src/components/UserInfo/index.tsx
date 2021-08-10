import { Box, Checkbox, Td, Text, Tr, useBreakpointValue } from '@chakra-ui/react';
import { EditButton } from '../EditButton'

interface UserInfoProps {
  name: string;
  email: string;
  createdAt: string;
}

export function UserInfo({ name, email, createdAt }: UserInfoProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  })
  return (
    <Tr>
      <Td px={['4', '4', '6']}>
        <Checkbox colorScheme='pink' />
      </Td>
      <Td px={['4', '4', '6']}>
        <Box>
          <Text fontWeight='bold'>{name}</Text>
          <Text fontSize='sm' color='gray.300'>{email}</Text>
        </Box>
      </Td>
      {isWideVersion && <Td>{createdAt}</Td>}
      <Td>
        {isWideVersion && <EditButton />}
      </Td>
    </Tr>
  );
}

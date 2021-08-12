import { Box, Checkbox, Td, Text, Tr, useBreakpointValue, TabProps, Link } from '@chakra-ui/react';
import { EditButton } from '../EditButton'

interface UserInfoProps extends TabProps {
  name: string;
  email: string;
  createdAt: string;
  userId: string;
  handlePrefetchUser: (userId: string) => void;
}

export function UserInfo({ name, email, createdAt, userId, handlePrefetchUser }: UserInfoProps) {
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
          <Link color='purple.400' onMouseEnter={() => handlePrefetchUser(userId)}>
            <Text fontWeight='bold'>{name}</Text>
          </Link>
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

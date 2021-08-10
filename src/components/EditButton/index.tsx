import { Button, Icon, useBreakpointValue, Flex } from '@chakra-ui/react';
import { RiPencilLine } from 'react-icons/ri';

export function EditButton() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Flex justify="center" align="center">
      <Button
        as='a'
        size='sm'
        fontSize='sm'
        pr={['1', '1', '1', '4']}
        colorScheme='facebook'
        leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
      >
        {isWideVersion ? 'Editar' : ''}
      </Button>
    </Flex>
  );
}

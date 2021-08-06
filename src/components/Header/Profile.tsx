import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex
      align='center'

    >
      <Box mr='4' textAlign='right'>
        <Text>Arthur Dias</Text>
        <Text
          color='gray.300'
          fontSize='small'>arthursantos01@gmail.com</Text>

      </Box>
      <Avatar size='md' name='Arthur Dias' src='https://github.com/arthurdias01.png' />
    </Flex>
  )
}
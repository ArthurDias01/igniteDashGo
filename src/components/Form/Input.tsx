import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}
// {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>} <- caso label exista aparece formlabel}
export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl >
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        type='email'
        id={name}
        focusBorderColor='pink.500'
        bg='gray.900'
        variant='filled'
        _hover={{ bgColor: 'gray.900' }}
        size='lg'
        {...rest}
      />
    </FormControl>
  )
}

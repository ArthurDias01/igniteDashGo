import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, type, ...rest }: InputProps, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {/* {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>} <- caso label exista aparece formlabel} */}
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        type={type}
        id={name}
        focusBorderColor='pink.500'
        bg='gray.900'
        variant='filled'
        _hover={{ bgColor: 'gray.900' }}
        size='lg'
        ref={ref}
        {...rest}
        autoComplete='true'
      />
      {!!error && (<FormErrorMessage>{error.message}</FormErrorMessage>)}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)

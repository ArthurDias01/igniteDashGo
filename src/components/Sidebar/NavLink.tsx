import { Link, Icon, Text, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { ElementType } from 'react';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link
      display='flex'
      align='center' {...rest}
      transition={'0.25s ease-in-out'}
      py='1'
      px='2'
      borderRadius='8'
      _hover={{
        bg: 'gray.700',
        textDecoration: 'underline'
      }}

    >
      <Icon as={icon} fontSize='20' />
      <Text ml='4' fontWeight='medium'>{children}</Text>
    </Link >
  );
}

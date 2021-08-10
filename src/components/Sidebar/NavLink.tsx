import { Link as ChakraLink, Icon, Text, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { ElementType } from 'react';
import { ActiveLink } from '../ActiveLink';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink
        display='flex'
        align='center' {...rest}
        transition={'0.25s ease-in-out'}
        py='2'
        pr='4'
        pl='1'
        borderRadius='8'
        _hover={{
          bg: 'gray.700',
          textDecoration: 'underline'
        }}

      >
        <Icon as={icon} fontSize='20' />
        <Text ml='4' fontWeight='medium'>{children}</Text>
      </ChakraLink >
    </ActiveLink>
  );
}

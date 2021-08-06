import { Heading, HeadingProps } from '@chakra-ui/react';

interface HeadingComponentProps extends HeadingProps {
  title: string;
}

export function HeadingComponent({ title }: HeadingComponentProps) {
  return (
    <Heading size='lg' fontWeight='normal'>{title}</Heading>
  );
};

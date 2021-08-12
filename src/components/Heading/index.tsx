import { Heading, HeadingProps, Spinner } from '@chakra-ui/react';

interface HeadingComponentProps extends HeadingProps {
  title: string;
  isFetching?: boolean;
  isLoading?: boolean;
}

export function HeadingComponent({ title, isFetching, isLoading }: HeadingComponentProps) {
  return (
    <Heading size='lg' fontWeight='normal'>
      {title}
      {!isLoading && isFetching &&

        <Spinner size='sm' color='gray.500' ml='4' />
      }
    </Heading>
  );
};

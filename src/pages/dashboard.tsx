import { Header } from '../components/Header';
import { Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { Sidebar } from '../components/Sidebar';
import { ChartComponent } from '../components/ChartComponent';

const series = [
  { name: 'series1', data: [31, 120, 10, 28, 51, 18, 109] }
];

export default function Dashboard() {
  return (
    <Flex direction='column' h='100vh'>
      <Header />
      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />

        <SimpleGrid flex='1' gap='4' minChildWidth='320px' align='flex-start'>
          <ChartComponent title='Novos Inscritos' series={series} />
          <Text fontSize='lg' mb='4'>Taxa de Abertura</Text>
          <ChartComponent title='Visualizações' series={series} />
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

import dynamic from 'next/dynamic';
import { Box, Text, theme } from '@chakra-ui/react'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})


interface ChartComponentProps {
  series: Object[];
  title: string;
}
export function ChartComponent({ series, title }: ChartComponentProps) {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: theme.colors.gray[600],
      },
      categories: [
        '2021-08-05T00:00:00.000Z',
        '2021-08-06T00:00:00.000Z',
        '2021-08-07T00:00:00.000Z',
        '2021-08-08T00:00:00.000Z',
        '2021-08-09T00:00:00.000Z',
        '2021-08-10T00:00:00.000Z',
        '2021-08-11T00:00:00.000Z',
      ]
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3,
      }
    },
    colors: [theme.colors.pink[500]],
  };
  return (
    <Box
      p={['6', '8']}
      bg='gray.800'
      borderRadius={8}
      pb='4'
    >
      <Text fontSize='lg' mb='4'>{title}</Text>
      <Chart type='area' height={160} options={options} series={series} />
    </Box>
  );
}

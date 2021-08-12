import { Stack, Box, Text } from '@chakra-ui/react';
import { PaginationItem } from './PaginationItem';

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 2;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)].map(
    (_, index) => {
      return from + index + 1
    }).filter((page) => page > 0) //filtro pra retirar páginas calculadas com índices negativos
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {

  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []
  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return (
    <Stack direction={['column', 'row']} mt='8' mx='auto' justify='space-between' align='center' spacing='6'>
      <Box>
        <strong>{currentPage === 1 ? 1 : (currentPage - 1) * registersPerPage + 1}</strong> - <strong>{currentPage * registersPerPage > totalCountOfRegisters ? totalCountOfRegisters : currentPage * registersPerPage}</strong> de <strong>{totalCountOfRegisters}</strong>
      </Box>
      <Stack direction='row'>

        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem key={1} number={1} onPageChange={onPageChange} />
            {currentPage > (2 + siblingsCount) &&
              <Text color='gray.300' textAlign='center' width='8'>...</Text>}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem key={page} number={page} onPageChange={onPageChange} />
        })}

        <PaginationItem number={currentPage} isCurrent onPageChange={onPageChange} />

        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem key={page} number={page} onPageChange={onPageChange} />
        })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage &&
              <Text color='gray.300' textAlign='center' width='8'>...</Text>}
            <PaginationItem key={lastPage} number={lastPage} onPageChange={onPageChange} />
          </>
        )}

      </Stack>
    </Stack>
  );
}

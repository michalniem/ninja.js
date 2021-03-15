import usePagination from '../../hooks/usePagination';
import PaginationControl from './PaginationControl';
import Table from './Table'

function PaginatedTable({data, renderRow, rowsPerPage}) {
  const {data: paginatedData, numberOfPages, currentPage, setCurrentPage} = usePagination(data, rowsPerPage);
  return (
    <>
      {paginatedData.length ? (
        <Table>
          {paginatedData.map(renderRow)}
        </Table>
      ) : null}
      {numberOfPages > 1 ? (
        <PaginationControl
          numberOfPages={numberOfPages}
          currentPageIndex={currentPage}
          onChange={setCurrentPage}
        />
      ) : null}
    </>
  )
}

export default PaginatedTable;
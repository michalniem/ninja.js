import {useState, useCallback} from 'react';

function usePagination(data, rowsPerPage) {
  const [currentPage, setCurrentPage] = useState(0);

  const getRangeToShow = useCallback(() => {
    const startIndex = currentPage * rowsPerPage
    return [startIndex, startIndex + rowsPerPage]
  }, [currentPage, rowsPerPage])

  const slicedData = data.slice(...getRangeToShow());

  const numberOfPages = rowsPerPage ? Math.ceil(data.length / rowsPerPage) : 0;

  return {
    data: slicedData,
    numberOfPages,
    currentPage,
    setCurrentPage,
  }
}

export default usePagination;
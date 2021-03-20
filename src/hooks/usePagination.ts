import {useState, useCallback} from 'react';

function usePagination(data: object[], rowsPerPage: number) {
    const [currentPage, setCurrentPage] = useState(0);

    const getRangeToShow = useCallback((): number[] => {
        const startIndex = currentPage * rowsPerPage
        return [startIndex, startIndex + rowsPerPage]
    }, [currentPage, rowsPerPage])

    const slicedData = data.slice(...getRangeToShow());

    const numberOfPages: number = rowsPerPage ? Math.ceil(data.length / rowsPerPage) : 0;

    return {
        data: slicedData,
        numberOfPages,
        currentPage,
        setCurrentPage,
    }
}

export default usePagination;
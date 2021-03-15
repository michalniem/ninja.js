import {memo} from 'react'
import Page from '../Page'
import times from '../../../helpers/times'

const PaginationControl = ({currentPageIndex, numberOfPages, onChange}) => {
  return (
    <ul className="pagination">
      {times(numberOfPages, pageNumber => (
        <Page
          key={pageNumber}
          currentPageIndex={currentPageIndex}
          pageNumber={pageNumber}
          onChange={onChange}
        />
      ))}
    </ul>
  )
}

export default memo(PaginationControl);

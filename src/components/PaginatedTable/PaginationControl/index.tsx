import {FormEventHandler, memo} from 'react'
import Page from '../Page'
import times from '../../../helpers/times'

type Props = {
    currentPageIndex: number;
    numberOfPages: number;
    onChange: FormEventHandler
}

const PaginationControl = ({currentPageIndex, numberOfPages, onChange}: Props) => {
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

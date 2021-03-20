import {FormEventHandler} from "react";

type Props = {
    pageNumber: number;
    currentPageIndex: number;
    onChange: FormEventHandler
}

function Page({pageNumber, currentPageIndex, onChange}: Props) {
    const isActivePage: boolean = currentPageIndex === pageNumber;

    const renderedPageNumber: number = pageNumber + 1;

    const handlePageSwitch = () => {
        onChange(pageNumber)
    }

    return (
        <li className="page-item mr-1">
            <button
                className={`page-link ${isActivePage && 'button-outline'}`}
                onClick={handlePageSwitch}
            >
                {renderedPageNumber}
            </button>
        </li>
    );
}

export default Page

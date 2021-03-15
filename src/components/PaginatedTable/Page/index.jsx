function Page({pageNumber, currentPageIndex, onChange}) {
  const isActivePage = currentPageIndex === pageNumber;

  const renderedPageNumber = pageNumber + 1;

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

const times = (n: number, iteratee: (pageNumber: number) => JSX.Element): JSX.Element[] => Array.from(Array(n).keys()).map(iteratee);

export default times;
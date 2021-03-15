import Row from './Row'
import Search from './Search'
import PaginatedTable from '../PaginatedTable'

import pickValues from '../../helpers/pickValues';
import includesKeyword from '../../helpers/includesKeyword';
import useInput from '../../hooks/useInput';

const SEARCH_BY = ['name1', 'email']

function DataTable({data, rowsPerPage}) {
  const [keyword, onChange] = useInput();

  const filteredData =
    data.filter((record) => pickValues(record, SEARCH_BY).some(value => includesKeyword(value, keyword)))

  return (
    <div>
      <Search value={keyword} onSearch={onChange}/>
      <PaginatedTable
        data={filteredData}
        renderRow={row => <Row key={row.per_id} row={row}/>}
        rowsPerPage={rowsPerPage}
      />
    </div>
  );
}

export default DataTable;

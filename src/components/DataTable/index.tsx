import Row from './Row'
import Search from './Search'
import PaginatedTable from '../PaginatedTable'

import pickValues from '../../helpers/pickValues';
import includesKeyword from '../../helpers/includesKeyword';
import useInput from '../../hooks/useInput';
import {User} from "../../shared/types/user";

const SEARCH_BY: string[] = ['name1', 'email']

type Props = {
    data: User[];
    rowsPerPage: number
}

function DataTable({data, rowsPerPage}: Props) {
  const [keyword, onChange] = useInput();

  const filteredData =
    data.filter((record) => {
        return pickValues(record, SEARCH_BY).some(value => includesKeyword(value, keyword));
    })

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

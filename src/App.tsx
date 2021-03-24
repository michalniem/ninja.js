import DataTable from './components/DataTable';
import './App.css';
import {User} from "./shared/types/user";

type Props = {
    rows: User[]
}

function App({rows}: Props): JSX.Element {
    return (
        <div className="container mt-3">
            <DataTable data={rows} rowsPerPage={5}/>
        </div>
    );
}

export default App;

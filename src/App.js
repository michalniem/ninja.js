import DataTable from './components/DataTable';
import './App.css';

function App({ rows }) {
  return (
    <div className="container mt-3">
      <DataTable data={rows} locale="da" rowsPerPage={5} />
    </div>
  );
}

export default App;

import ReactDOM from 'react-dom';
import App from './App';

const userData = JSON.parse(document.getElementById('user-data').dataset.users);
ReactDOM.render(<App rows={userData} />, document.getElementById('root'));

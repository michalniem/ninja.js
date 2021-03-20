import ReactDOM from 'react-dom';
import App from './App';
import {User} from "./shared/types/user";

const usersList: User[] = JSON.parse((document.getElementById('user-data') as HTMLElement).dataset.users as string);
ReactDOM.render(<App rows={usersList}/>, document.getElementById('root'));

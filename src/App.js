import { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

function App() {
    const [users, setUsers] = useState([]);
    const onUserAdd = (user) => setUsers([...users, user]);
    return (
        <div>
            <UserForm onUserAdd={onUserAdd} />
            <hr />
            <UserList users={users} />
        </div>
    );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }

// export default App;

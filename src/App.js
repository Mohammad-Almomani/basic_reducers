import './App.css';
import NewDevForm from './components/DeveloperForm';
import { Developer } from './components/Developer';
import { useReducer } from 'react';
import DevelopersList from './components/DeveloperList';
import logo from './assets/GIGACHAD2.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [Devs, dispatch] = useReducer(Developer, []);

  return (
    <div className="App" style={{margin: "3% 4%"}}>
      <h1><img src={logo} alt='logo' style={{width: "10%"}}></img> GigaChads Club</h1>
     <NewDevForm dispatch={dispatch} />
      <DevelopersList dispatch={dispatch} Devs={Devs} />
    </div>
  );
}

export default App;

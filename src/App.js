import './App.css';
import NewDevForm from './components/DeveloperForm';
import { Developer } from './components/Developer';
import { useReducer } from 'react';
import DevelopersList from './components/DeveloperList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [Devs, dispatch] = useReducer(Developer, []);

  return (
    <div className="App" style={{margin: "3% 4%"}}>
     <NewDevForm dispatch={dispatch} />
      <DevelopersList dispatch={dispatch} Devs={Devs} />
    </div>
  );
}

export default App;

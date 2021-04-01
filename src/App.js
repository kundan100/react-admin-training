import './App.css';
import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const App = () => {
  return(
    <div className="App">
      <Admin dataProvider={dataProvider} />
    </div>
  )
}

export default App;

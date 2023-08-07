import logo from './logo.svg';
import NavBar from './components/NavBar';
import ItemsListContainer from './components/ItemsListContainer';
import './App.css';

function App() {
  return (
    <div className='body'>
      <NavBar />
      <ItemsListContainer saludo='hola' />
    </div>
  );
}

export default App;

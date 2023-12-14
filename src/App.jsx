import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.esm';
import { Outlet } from 'react-router-dom';
import Menu from './components/menu/Menu';

function App() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
}

export default App;

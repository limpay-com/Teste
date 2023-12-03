import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.esm';
import { Outlet } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Banner from './components/banner/Banner';

function App() {
  return (
    <>
      {/* <Menu /> */}
      <Outlet />
    </>
  );
}

export default App;

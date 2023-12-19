import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.esm';
import { Outlet } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Cadastro from './components/cadastro/Cadastro';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    <Cadastro />
    <Body />
    <Footer />
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Cadastro from './components/cadastro/Cadastro';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Cadastro></Cadastro>
    </>
  );
}

export default App;

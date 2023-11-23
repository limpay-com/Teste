import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.esm';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;

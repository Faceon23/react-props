import { useState } from 'react';
import Footer from './components/Footer';
import Main from './components/Main'
import Menubar from './components/Menubar';
import './App.css';

function App() {
  const [name, setName] =useState('Zahra')
  return (
    <>
      <Menubar />
      <Main name={name} />
      <Footer />
    </>
  );
}

export default App;

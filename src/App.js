import './App.scss';
// COMPONENTS
// import Header from './components/header/header';
import Main from './components/main/main';
import { useState } from 'react';

function App() {
  const [selections] = useState(['About Me', 'Goals', 'Resume', 'Skills', 'Work History']);
  return (
    <>
      <Main selections={selections}/>
    </>
  );
}

export default App;

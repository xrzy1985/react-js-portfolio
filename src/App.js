import './App.scss';
// COMPONENTS
// import Header from './components/header/header';
import Main from './components/main/main';
import { useState } from 'react';

function App() {
  const [selections] = useState(['About Me', 'Resume', 'Work Experience']);
  return (
    <Main selections={selections}/>
  );
}

export default App;

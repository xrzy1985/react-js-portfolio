import './App.scss';
// COMPONENTS
// import Header from './components/header/header';
import Main from './components/main/main';
import { useState } from 'react';

function App() {
  const [selections] = useState(['About Me', 'Projects', 'Resume']);
  return (
    <Main selections={selections}/>
  );
}

export default App;

import './App.scss';
import { collection, getDocs } from "firebase/firestore";
import db from './state/firebase';
import Main from './components/main/main';
import { useState } from 'react';

const fetchData = async()=>{
  let state = {};
  const q = await getDocs(collection(db, "portfolio"));
  q.forEach((doc) => {
    const data = doc.data();
    state = { ...state, ...data};
  });
  return state;
}

export default function App() {
  const [state, setState] = useState({});

  if (Object.keys(state).length < 1) {
    fetchData().then((resp) => {
      if (resp) {
        setState(resp);
      }
    }).catch(err => {
      throw new Error(err => console.error(err));
    });
  } else {
    return (
      <Main selections={state.selections} state={state}/>
    );
  }
}
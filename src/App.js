import './App.css';
import { useState } from 'react';

function App() {

  let [name,setName] = useState("Hlaing Min Than");// [getter,setterFun]

  let changeName = () => {
    setName('Aung Aung');
    console.log(name);
  }

  return (
    <div className='app'>
      <h1>Hello {name}</h1>
      <button onClick={changeName}>change name</button>
    </div>
  );
}

export default App;

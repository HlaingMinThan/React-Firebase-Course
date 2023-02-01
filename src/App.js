import { useEffect, useState } from 'react';
import './App.css';
import TripList from './components/Triplist/index.js'

function App() {

  let [ data, setData ] = useState('my data');

  let myFunction = () => {
    setData('update data');
  }

  useEffect(() => {
    myFunction()
    console.log('running')
  },[myFunction])

  return <>
    <h1>{data}</h1>
    <TripList/>
  </>
}

export default App;

// data = 'my data'
// data = 'update data'  -> rerender
import './App.css';

function App() {

  let name = "Hlaing Min Than";

  let changeName = () => {
    name = 'Aung Aung';
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

import './App.css';
import QAImage from './assets/image.jpg';

function App() {

  let name = "Hlaing Min Than";

  return (
    <div>
      <h1>Hello {name}</h1>

      {/* 1st way -  public folder way */}

      {/* absolute path */}
      {/* <img src="http://localhost:3000/image.jpg" alt="" /> */}
      {/* relative path */}
      {/* <img src="/image.jpg" alt="" /> */}

      {/* 2nd import */}
      <img src={QAImage} alt="" />
    </div>
  );
}

export default App;

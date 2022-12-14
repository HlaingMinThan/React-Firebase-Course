import './App.css';
import { useState } from 'react';

function App() {

  let [name,setName] = useState("Hlaing Min Than");// [getter,setterFun]
  let [posts,setPosts]=useState([
    {
      id : 1,
      title: 'First post'
    },
    {
      id : 2,
      title: 'Second post'
    },
    {
      id : 3,
      title: 'Third post'
    }
  ]);
  console.log(posts);

  let changeName = () => {
    setName('Aung Aung');
    console.log(name);
  }

  return (
    <div className='app'>
      <h1>Hello {name}</h1>
      <button onClick={changeName}>change name</button>

      <h1>Posts</h1>
      <ul>
        {posts.map((post)=>(
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

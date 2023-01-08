import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/index';
import PostsList from './components/PostsList/index';

function App() {

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

  return (
    <>
      <Navbar/>
      <PostsList posts={posts} />
    </>
    );
}

export default App;

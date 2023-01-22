import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/index';
import PostsList from './components/PostsList/index';
import Modal from './components/Modal/index';

function App() {
  let [showModal , setShowModal] = useState(false);

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
      <Navbar setShowModal={setShowModal}/>
      <PostsList posts={posts} />
      {/* <Modal>
         <h1>Zoom class is available now.</h1>
          <p>feel free to <a href="">join</a> here</p>
      </Modal> */}
     {showModal && <Modal danger>
        <h1>Terms and Conditions</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere consequatur fuga excepturi, eum laudantium quidem esse quia temporibus sapiente! Voluptate sed quas, eligendi eveniet soluta quisquam atque magnam tempora nobis.</p>
        <button onClick={()=>setShowModal(false)}>close</button>
      </Modal>}
    </>
    );
}

export default App;

import React from 'react'
import './index.css';
import { useState } from 'react';
import { useRef } from 'react';

export default function Index({addPost}) {

  // let [ title, setTitle ]= useState("");

  let title = useRef();

  let resetForm = () => {
    // setTitle('');
    title.current.value = '';
    console.log('updated successfully')
  }

  let upload_post = (e) => {
    e.preventDefault();// prevent refreshing page
    let post = {
      id : Math.floor(Math.random()*10000),
      title : title.current.value
    }
    resetForm()
    addPost(post);
  }

  return (
    <form className='post-form' onSubmit={upload_post}>
        <h1>Create Post</h1>
        <div className="form-control">
          <label htmlFor="">Title</label>
          <input type="text"  ref={title}/>
        </div>
        <div className="form-control">
          <button type='submit'>Post Now</button>
        </div>
    </form>
  )
}

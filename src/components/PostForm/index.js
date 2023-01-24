import React from 'react'
import './index.css';
import { useState } from 'react';

export default function Index({addPost}) {

  let [ title, setTitle ]= useState("");
  let [ status, setStatus ]= useState("upcoming");

  let resetForm = () => {
    setTitle('');
    console.log('updated successfully')
  }

  let upload_post = (e) => {
    e.preventDefault();// prevent refreshing page
    let post = {
      id : Math.floor(Math.random()*10000),
      title : title,
      status : status
    }
    resetForm()
    addPost(post);
  }

  return (
    <form className='post-form' onSubmit={upload_post}>
        <h1>Create Post</h1>
        <div className="form-control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
        </div>
        <div className="form-control">
          <label htmlFor="">Status</label>
          <select name="" id="" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="dropped">Dropped</option>
            <option value="ongoing">Ongoing</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </div>
        <div className="form-control">
          <button type='submit'>Post Now</button>
        </div>
    </form>
  )
}

import React from 'react'
import './index.css';
import { useState } from 'react';

export default function Index() {

  let [ title, setTitle ]= useState("");

  let resetForm = () => {
    setTitle('');
    console.log('updated successfully')
  }

  return (
    <form className='post-form'>
        <h1>Create Post</h1>
        <div className="form-control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
        </div>
        <p>{title}</p>
        <button type='button' onClick={resetForm}> reset form </button>
        <div className="form-control">
          <button>Post Now</button>
        </div>
    </form>
  )
}

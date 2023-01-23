import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';

export default function Modal({children, danger = false , setShowModal }) {
  let className = danger ? 'border-red' : "border-blue";
  return (
    ReactDOM.createPortal(
    <div className="modal-component">
      <div className="modal-backdrop">
          <div className={`modal ${className}`}>
             {children}
             <button onClick={()=>setShowModal(false)}>close</button>
          </div>
      </div>
    </div>,
    document.getElementById('modal')
    )
  )
}

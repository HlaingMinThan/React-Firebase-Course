import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';

export default function Modal({children}) {
  return (
    ReactDOM.createPortal(
    <div className="modal-component">
      <div className="modal-backdrop">
          <div className="modal">
             {children}
          </div>
      </div>
    </div>,
    document.getElementById('modal')
    )
  )
}

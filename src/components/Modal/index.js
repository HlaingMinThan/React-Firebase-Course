import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';

export default function Modal({children, danger = false }) {
  return (
    ReactDOM.createPortal(
    <div className="modal-component">
      <div className="modal-backdrop">
          <div className="modal" style={{
            border : '4px solid',
            borderColor : danger ? 'red' : 'blue'
          }}>
             {children}
          </div>
      </div>
    </div>,
    document.getElementById('modal')
    )
  )
}

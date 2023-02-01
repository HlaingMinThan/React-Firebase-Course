import React from 'react'

export default function TodoList() {
    return (
        <ul className="todo-list">
            <li className="todo-item-container">
            <div className="todo-item">
                <input type="checkbox" />
                <span className="todo-item-label">Finish React Series</span>
                {/* <input type="text" className="todo-item-input" value="Finish React Series" /> */}
            </div>
            <button className="x-button">
                <svg
                className="x-button-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                />
                </svg>
            </button>
            </li>
            <li className="todo-item-container">
            <div className="todo-item">
                <input type="checkbox" />
                <span className="todo-item-label line-through">
                Go to Grocery
                </span>
                {/* <input type="text" className="todo-item-input" value="Go to Grocery" /> */}
            </div>
            <button className="x-button">
                <svg
                className="x-button-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                />
                </svg>
            </button>
            </li>
            <li className="todo-item-container">
            <div className="todo-item">
                <input type="checkbox" />
                <span className="todo-item-label">Do other thing</span>
                {/* <input type="text" className="todo-item-input" value="Do other thing /> */}
            </div>
            <button className="x-button">
                <svg
                className="x-button-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                />
                </svg>
            </button>
            </li>
        </ul>
    )
}

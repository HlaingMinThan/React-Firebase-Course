import React from 'react'

export default function TodoList({todos}) {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li className="todo-item-container" key={todo.id}>
                    <div className="todo-item">
                        <input type="checkbox" />
                        <span className={`todo-item-label ${todo.completed ? 'line-through' : ''}`}>
                        {todo.title}
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
            ))}
        </ul>
    )
}

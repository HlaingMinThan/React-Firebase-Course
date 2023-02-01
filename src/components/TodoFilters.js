import React from 'react'

export default function TodoFilters() {
    return (
        <div>
            <button className="button filter-button filter-button-active">
                All
            </button>
            <button className="button filter-button">Active</button>
            <button className="button filter-button">Completed</button>
        </div>
    )
}

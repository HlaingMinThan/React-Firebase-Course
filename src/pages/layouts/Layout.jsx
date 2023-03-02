import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Create</li>
                </ul>
            </nav>

            {/* dynamic router changes content */}
            <Outlet />
        </div>
    )
}

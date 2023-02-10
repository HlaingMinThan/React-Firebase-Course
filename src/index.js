import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './router/index'
import './index.css';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

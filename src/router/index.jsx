import {
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
import Home from '../pages/Home';
import Layout from "../pages/layouts/Layout";
import BookForm from "../pages/BookForm";
import Search from "../pages/Search";
import BookDetail from "../pages/BookDetail";
import Register from "../pages/Register";
import Login from "../pages/Login";

import React, { useContext } from 'react'
import { AuthContext } from "../contexts/AuthContext";

export default function index() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "",
                    element: <Home />
                },
                {
                    path: "/books/:id",
                    element: <BookDetail />
                },
                {
                    path: "/create",
                    element: <BookForm />
                },
                {
                    path: "/edit/:id",
                    element: <BookForm />
                },
                {
                    path: "/search",
                    element: <Search />
                },
                {
                    path: "/register",
                    element: <Register />
                },
                {
                    path: "/login",
                    element: <Login />
                },
            ]
        },
    ]);

    let { authReady } = useContext(AuthContext);

    return (
        authReady && <RouterProvider router={router} />
    )
}

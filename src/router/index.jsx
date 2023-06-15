import {
    createBrowserRouter,
} from "react-router-dom";
import Home from '../pages/Home';
import Layout from "../pages/layouts/Layout";
import BookForm from "../pages/BookForm";
import Search from "../pages/Search";
import BookDetail from "../pages/BookDetail";
import Register from "../pages/Register";
import Login from "../pages/Login";

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

export default router;
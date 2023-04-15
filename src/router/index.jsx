import {
    createBrowserRouter,
} from "react-router-dom";
import Home from '../pages/Home';
import Layout from "../pages/layouts/Layout";
import Create from "../pages/Create";
import Search from "../pages/Search";
import BookDetail from "../pages/BookDetail";

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
                element: <Create />
            },
            {
                path: "/search",
                element: <Search />
            }
        ]
    },
]);

export default router;
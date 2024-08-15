import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main"
import ErrorPage from './../Pages/ErrorPage';
import Home from "../Pages/Home/Home";
import About from './../Pages/About/About';
import Career from './../Pages/Career/Career';
import Projects from './../Pages/Projects/Projects';
import Contact from "@/Pages/contract/Contact";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/career",
                element: <Career />,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: "/projects",
                element: <Projects />,
            },
        ]
      },
])

export default router
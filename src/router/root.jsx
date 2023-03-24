import { createBrowserRouter } from "react-router-dom";
import AllLayout from "../layout/AllLayout";
import Contact from "../Views/Contact";
import Home from "../Views/Home";
import Projects from "../Views/Projects";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AllLayout />,
        children: [
            {
            index: true,
            element: <Home />
        },
        {
            path:'/Projects',
            element: <Projects/>
        },
        {
            path:'/Contact',
            element:<Contact/>
        }
    ]
    },
])
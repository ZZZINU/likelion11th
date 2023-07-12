import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Root from "./Root";
import NotFound from "../pages/NotFound";
import Detail from "../pages/Detail";

const router = createBrowserRouter([
    
    {
    path: "/",
    element: < Root />,
    children : [
        {
            path : "",
            element : <Home />
        },
        {
            path : "about",
            element : <About />
        },
        {
            path : "detail",
            element : <Detail />,
            children : [
                {
                    path : ":id",
                    element : <Detail />
                }
            ]
        },
    ],
    errorElement: <NotFound />
    },
]);


export default router;
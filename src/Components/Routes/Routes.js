import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import LayoutAppoinment from "../Pages/NAppoinment/LayoutAppoinment/LayoutAppoinment";
import Registration from "../Pages/Registration/Registration";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/appoinment',
                element: <LayoutAppoinment></LayoutAppoinment>
            }
        ]
    }
])


export default router;
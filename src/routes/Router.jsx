import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddTouristsSpot from "../pages/AddTouristsSpot/AddTouristsSpot";
import MyList from "../pages/MyList/MyList";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allTouristsSpot',
                element: <AllTouristsSpot></AllTouristsSpot>
            },
            {
                path: '/addTouristsSpot',
                element: <AddTouristsSpot></AddTouristsSpot>
            },
            {
                path: '/myList',
                element: <MyList></MyList>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddTouristsSpot from "../pages/AddTouristsSpot/AddTouristsSpot";
import MyList from "../pages/MyList/MyList";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Details from "../components/Details/Details";
import UpdatePage from "../pages/UpdatePage/UpdatePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import CountryWisePage from "../pages/CountryWisePage/CountryWisePage";
import PrivateRoute from "./PrivateRoute";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allTouristsSpot',
                element: <AllTouristsSpot></AllTouristsSpot>,
                loader: () => fetch('http://localhost:5000/addSpot')
            },
            {
                path: '/countryWiseCards/:countryName',
                element: <CountryWisePage></CountryWisePage>,
                loader: ({params}) => fetch(`http://localhost:5000/countryWiseCards/${params.countryName}`)
            },
            {
                path: '/addTouristsSpot',
                element: <PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>
            },
            {
                path: '/addSpot/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/addSpot/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/update/${params.id}`)
            },
            {
                path: '/myList',
                element: <PrivateRoute><MyList></MyList></PrivateRoute>
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
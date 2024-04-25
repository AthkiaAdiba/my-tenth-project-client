import { Outlet } from "react-router-dom";
//import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";


const Root = () => {
    return (
        <div>
           <Nav></Nav>
           <Outlet></Outlet>
           <Footer></Footer> 
        </div>
    );
};

export default Root;
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


// 
const Root = () => {
    
    return (
        <div className="dark:bg-zinc-900">
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer> 
        </div>
    );
};

export default Root;
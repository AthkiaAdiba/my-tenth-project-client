import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import logo from '../../assets/logo-dark.png'
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import useTheme from "../../hooks/useTheme";
import { IoIosList } from "react-icons/io";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const { toggleTheme, theme } = useTheme();

    const navLinks = <>
        <NavLink className={({ isActive }) => isActive ? 'underline mr-4 text-[#2095AE]' : 'text-[#0f2454] dark:text-white mr-4'} to='/'>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'underline mr-4 text-[#2095AE]' : 'text-[#0f2454] dark:text-white mr-4'} to='/allTouristsSpot'>All Tourists Spot</NavLink>
        {
            user && <>
                <NavLink className={({ isActive }) => isActive ? 'underline mr-4 text-[#2095AE]' : 'mr-4 text-[#0f2454] dark:text-white'} to='/addTouristsSpot'>Add Tourists Spot</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'underline mr-4 text-[#2095AE]' : 'mr-4 text-[#0f2454] dark:text-white'} to='/myList'>My List</NavLink>
            </>
        }
    </>

    // Log out
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('logged out successfully')
            })
            .catch()
    }

    return (
        <div>
            <div className="navbar dark:bg-zinc-900 font-barlow shadow-lg fixed top-0 w-full right-0 left-0 z-20 bg-base-100 px-1 lg:px-9 lg:py-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost dark:text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 dark:bg-zinc-900 text-[#0f2454] text-base font-barlow rounded-box w-52">
                            {navLinks}
                            <button className="btn bg-[#2095AE]"><Link to='/login' className="mr-5 text-white border-none font-barlow text-xl">Login</Link></button>
                            <button className="btn bg-[#0f2454]"><Link to='/register' className="w-14 lg:w-20 text-white border-none font-barlow text-xl">Register</Link></button>
                            {/* theme change */}
                            <span onClick={toggleTheme} className="text-2xl mr-3 text-center">
                                {
                                    theme === "dark" ? <CiLight className="dark:text-white"></CiLight> :
                                        <MdOutlineDarkMode></MdOutlineDarkMode>
                                }
                            </span>
                        </ul>
                    </div>
                    <div className="hidden md:block lg:block">
                        <img className="w-48" src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="text-xl dark:bg-zinc-900 menu menu-horizontal px-1 bg-base-100 text-[#0f2454] font-barlow">
                        {navLinks}
                    </ul>
                </div>
                {
                    user ?
                        <div className="navbar-end flex gap-0 lg:gap-3 items-center">
                            {/* theme change */}
                            <span onClick={toggleTheme} className="hidden md:hidden lg:block text-2xl mr-3 text-center">
                                {
                                    theme === "dark" ? <CiLight className="dark:text-white"></CiLight> :
                                        <MdOutlineDarkMode></MdOutlineDarkMode>
                                }
                            </span>
                            <details className="dropdown mr-[150%] md:mr-[45%] lg:mr-0">
                                <summary className="btn w-10 lg:w-12 h-10 lg:h-12 rounded-full">
                                    <div className="avatar tooltip tooltip-right md:tooltip-left lg:tooltip-left" data-tip={user.displayName}>
                                        <div className="w-12 lg:w-12 h-12 lg:h-12 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </div>
                                </summary>
                                <ul className="shadow menu dropdown-content z-[1] rounded-full w-52">
                                    <div className="h-full p-3 space-y-2 bg-[#0f2454] text-gray-100">
                                        <div className="items-center p-2 space-x-4">
                                            <h2 className="text-lg font-semibold text-center">{user.displayName}</h2>
                                            <p>{user.email}</p>
                                        </div>
                                        <div className="divide-y divide-gray-700">
                                            <ul className="pt-2 pb-4 space-y-1 text-sm">
                                                <li>
                                                    <Link className="space-x-3 flex items-center">
                                                        <CgProfile className="text-lg"></CgProfile>
                                                        <p>Profile</p>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/myList' className="space-x-3 flex items-center">
                                                        <IoIosList className="text-lg"></IoIosList>
                                                        <p>My List</p>
                                                    </Link>
                                                </li>
                                            </ul>
                                            <ul className="pt-4 pb-2 space-y-1 text-sm">
                                                <li>
                                                    <Link onClick={handleLogOut} className="space-x-3 flex items-center">
                                                        <MdLogout className="text-lg"></MdLogout>
                                                        <p>Log out</p>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </ul>
                            </details>
                            <div className="block md:hidden lg:hidden -ml-[130%]">
                                <img src={logo} alt="" />
                            </div>
                            <button onClick={handleLogOut} className="hidden lg:block btn bg-[#2095AE] hover:bg-[#0f2454] text-white border-none font-barlow text-base lg:text-xl text-center">Log out</button>
                        </div> :
                        <div className="navbar-end flex gap-2 lg:gap-4">
                            <div className="block md:hidden lg:hidden">
                                <div className="flex items-center">
                                    <img src={logo} alt="" />
                                </div>
                            </div>
                            <div className="hidden lg:block">
                                <div className="flex items-center">
                                    {/* theme change */}
                                    <span onClick={toggleTheme} className="text-2xl mr-3 text-center">
                                        {
                                            theme === "dark" ? <CiLight className="dark:text-white"></CiLight> :
                                                <MdOutlineDarkMode></MdOutlineDarkMode>
                                        }
                                    </span>
                                    <Link to='/login' className="btn mr-5 w-14 lg:w-20 bg-[#2095AE] text-white border-none font-barlow text-xl">Login</Link>
                                    <Link to='/register' className="btn w-14 lg:w-20 bg-[#0f2454] text-white border-none font-barlow text-xl">Register</Link>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;
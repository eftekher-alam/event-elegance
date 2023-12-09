import { Link, NavLink, useLocation } from "react-router-dom";
import defaultProPic from "../../assets/user.png"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/authProvider/AuthProvider";

const NavBar = () => {

    const [stickyClass, setStickyClass] = useState('relative');
    const { user, loggOut } = useContext(AuthContext);
    const currLocation = useLocation();

    const handlerLogOut = () => {
        loggOut();
    }


    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 500 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
        }
    };


    return (
        <div className={`navbar bg-base-100 ${stickyClass} shadow-lg`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li> <NavLink to={"/"} >Home</NavLink> </li>
                        <li> <NavLink to={"/services"}>Services</NavLink> </li>
                        <li> <NavLink to={"/shop"}>Shop</NavLink> </li>
                        <li> <NavLink to={"/about"}>About</NavLink> </li>
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost normal-case text-xl font-extrabold">EVENT ELEGANCE</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    <li> <NavLink to={"/"} >Home</NavLink> </li>
                    <li> <NavLink to={"/services"}>Services</NavLink> </li>
                    <li> <NavLink to={"/shop"}>Shop</NavLink> </li>

                    <li> <NavLink to={"/about"}>About</NavLink> </li>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                {
                    user ?
                        <>
                            <div className="w-10 rounded-full">
                                {
                                    user?.photoURL ?
                                        <img src={user?.photoURL} className="rounded-full" />
                                        :
                                        <img src={defaultProPic} className="rounded-full" />
                                }
                            </div>
                            <span className="max-md:hidden">{user?.displayName || user?.email}</span>
                            <Link onClick={handlerLogOut} className="btn btn-sm btn-neutral text-white">Log Out</Link>
                        </>
                        :
                        <>
                            <div className="max-md:flex max-md:flex-col gap-2 md:space-x-4">
                                <Link state={currLocation?.state} to={"/register"} className="btn btn-sm btn-neutral text-white">Register</Link>
                                <Link to={"/login"} className="btn btn-sm btn-neutral text-white">Log In</Link>
                            </div>
                        </>
                }
            </div>
        </div >
    );
};

export default NavBar;
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "./Header.css"


const Header = () => {

    const menuBar = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/donation"}>Donation</NavLink></li>
        <li><NavLink to={"/statistics"}>Statistics</NavLink></li>

    </>
    return (
        <nav className="">
            <div className="navbar container  bg-white  mx-auto">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <IoMenu className="text-3xl" />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menuBar}
                        </ul>
                    </div>
                    <img className="  btn btn-ghost lg:justify-start text-xl" src="/img/Logo.png" alt="" />
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal text-xl flex gap-8 px-1">
                        {menuBar}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
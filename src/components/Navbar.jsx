import { Outlet, useNavigate, Link } from "react-router-dom";
import { MenuList } from "./dummyData/MenuList";
import { useState } from "react";

export default function Navbar() {
    return (
        <div className="flex">
            <LeftNavBar />
                <div className="flex-1">
                    <Hamburger />
                </div>
            <Outlet />
        </div>
    );
}

function LeftNavBar() {

    const navigate = useNavigate();

    return (
        <nav className="hidden md:block p-0 m-0 h-dvh max-h-dvh w-[30%] max-w-[18rem] min-w-[15rem] bg-blue-500 text-slate-700 dark:text-slate-100">
            <div className="p-1 mb-2 w-full h-[30%] bg-blue-50 flex flex-col justify-center items-center">
                <div onClick={() => navigate("/")} className="hover:cursor-pointer p-2 m-2 size-20 bg-blue-200 text-center flex items-center justify-center">Logo</div>
                <div className="text-2xl flex space-x-1">
                    <div className="font-bold">Thynk</div>
                    <div className="font-thin">Tech</div>
                </div>
            </div>

            <ul className="p-2 m-2 text-xl">
                {MenuList.map((list) => (
                    <Link to={list.navLink}>
                        <li key={list.id} className="p-2 my-3 hover:bg-blue-700 hover:text-slate-100 rounded-md text-slate-300  focus:outline-none focus:ring-0 ">
                            {list.navLinkName}
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
}

function Hamburger() {
    const [hamburger, setHamburger] = useState(false);

    return (
        <div className="md:hidden">
            {hamburger ? (
                <NavLinks setHamburger={setHamburger} />
            ) : (
                <HamburgerLogo setHamburger={setHamburger} />
            )}
        </div>
    );
}

function NavLinks({ setHamburger }) {
    return (
        <div className="absolute z-50 bg-slate-100 w-fit p-2 rounded-xl top-0 left-0">
            <nav className="bg-blue-500 p-2 text-slate-100 rounded-xl">
                <ul className="text-xl">
                    <li onClick={() => setHamburger(false)} className=" m-1 mx-2 p-1 hover:bg-blue-400 rounded-md cursor-pointer">
                        Hide navBar
                    </li>
                    {MenuList.map((list) => (
                       <Link to={list.navLink}>
                            <li key={list.id} onClick={() => setHamburger(false)} className="m-1 mx-2 p-1 hover:bg-blue-600 rounded-md">
                                {list.navLinkName}
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

function HamburgerLogo({ setHamburger }) {
    return (
        <div className="cursor-pointer p-4 relative">
            <div onClick={() => setHamburger(true)} className="fixed top-9 left-10 bg-blues-300 w-12 h-12 rounded-xl font-extrabold flex items-center justify-center text-xs  bg-blue-200 position">
                LOGO
            </div>
        </div>
    );
}

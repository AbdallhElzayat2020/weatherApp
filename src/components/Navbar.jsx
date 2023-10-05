import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"
import { useEffect, useRef, useState } from "react"
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }
    const headerRef = useRef()
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                headerRef.current.style.background = "#000"
                headerRef.current.style.z_index = 10000
                headerRef.current.style.padding = "1.5rem"
            } else {
                headerRef.current.style.background = "transparent"
                headerRef.current.style.padding = "12px"

            }
        })
    }, [])
    return (
        <div ref={headerRef} className="header transition-all py-8 duration-300 z-[10000] w-full fixed top-0 left-0 ">
            <div className="container py-6 px-5  flex justify-between items-center text-white">
                <Link to="/" className="logo z-[1000] font-bold">GLX TRVL</Link>
                <div className="">
                    <ul onClick={handleNav} className="nav-items hidden sm:flex gap-[50px] ">
                        <li>
                            <Link className=" text-white hover:text-gray-700-500" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className=" text-white hover:text-gray-700-500" to="/pricing">Pricing</Link>
                        </li>
                        <li>
                            <Link className=" text-white hover:text-gray-700-500" to="/training">Training</Link>
                        </li>
                        <li>
                            <Link className=" text-white hover:text-gray-700-500" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                {/* bars icon */}
                <div onClick={handleNav} className=" sm:hidden z-[1000]">
                    {
                        nav ? <FaXmark size={35} className="cursor-pointer rounded-full bg-red-500 p-[3px] z-10" /> : <FaBars size={30} className="cursor-pointer z-10" />
                    }
                </div>
                {/* navbar mobile */}
                <div onClick={handleNav} className={nav ? `sm:hidden overflow-y-hidden flex items-center justify-center w-full h-screen absolute top-0 left-0 bg-slate-800 transition-all duration-300` : `absolute left-[-100%] top-0 w-full h-screen flex items-center justify-center transition-all duration-300 `}>
                    <ul onClick={handleNav} className="nav-items py-12">
                        <li className="py-8">
                            <Link className=" text-2xl py-12" to="/">Home</Link>
                        </li>
                        <li className="py-8">
                            <Link className=" text-2xl py-12" to="/pricing">Pricing</Link>
                        </li>
                        <li className="py-8">
                            <Link className=" text-2xl py-12" to="/training">Training</Link>
                        </li>
                        <li className="py-8">
                            <Link className=" text-2xl py-12" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
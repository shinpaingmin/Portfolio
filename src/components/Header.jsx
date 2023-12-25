import { Link } from "react-scroll";
import { navLinks } from "../constants";
import { FaLaptopCode } from "react-icons/fa";

const Header = ({ open, setOpen }) => {
  return (
    <>
    <header className="flex justify-between bg-black text-white
                        items-center px-4 lg:px-20 xl:px-28 py-5 
                         border-gray-200 shadow">

        <a href="#" className="flex items-center">
            <FaLaptopCode className="text-3xl md:text-4xl" />
            <h1 className="text-xl font-bold ml-3">My Portfolio</h1>
        </a>

        <ul className="flex list-none max-md:hidden">
            {
                navLinks.map((link, i) => (
                    <li key={i}>
                        <Link to={link.href} className="ml-8 cursor-pointer"
                            smooth duration={500} offset={-50}>{ link.label }</Link>
                    </li>
                ))
            }
        </ul>
        
        <button type='button' className="hamburger block md:hidden " onClick={() => setOpen(!open)}>
            <span className={`${open && "open"} hamburger-top `}></span>
            <span className={`${open && "open"} hamburger-middle `}></span>
            <span className={`${open && "open"} hamburger-bottom `}></span>
        </button>
    </header>

    

    <div className={`${open ? "overlay-show" : ""}`}></div>

        {/* mobile menu  */}

        <div className={`mobile-main-menu ${open && "show"}`}>
            <ul>
                {
                    navLinks.map((link, i) => (
                        <li key={i}>
                            <Link to={link.href} className="ml-8 cursor-pointer" onClick={() => setOpen(false)}
                                smooth duration={500} offset={-50}>{ link.label }</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </>
  )
}

export default Header
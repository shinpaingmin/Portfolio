import { Link } from "react-scroll";
import { navLinks } from "../constants";
import { FaLaptopCode } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between bg-black text-white
                        items-center px-28 py-5 
                         border-gray-200 shadow">

        <a href="#" className="flex items-center">
            <FaLaptopCode size={32} />
            <h1 className="text-2xl font-bold ml-3">My Portfolio</h1>
        </a>

        <ul className="flex list-none">
            {
                navLinks.map((link, i) => (
                    <li key={i}>
                        <Link to={link.href} className="ml-8 cursor-pointer"
                            smooth duration={500} offset={-50}>{ link.label }</Link>
                    </li>
                ))
            }
        </ul>

    </header>
  )
}

export default Header
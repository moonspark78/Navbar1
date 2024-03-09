import {useRef} from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";


export const Navbar = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

  return (
    <header>
        <h3>Logo</h3>
        <nav>
            <a href="/#">Homme</a>
            <a href="/#">My work</a>
            <a href="/#">Blog</a>
            <a href="/#">About me</a>
            <button onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <button>
            <FaBars/>
        </button>
    </header>
  );
};

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
        <nav ref={navRef}>
            <a href="/#">Home</a>
            <a href="/#">My work</a>
            <a href="/#">Blog</a>
            <a href="/#">About me</a>
            <button className="nav-btn nav-close" onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
            <FaBars/>
        </button>
    </header>
  );
};

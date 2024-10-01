import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-scroll';
import texts from '../texts/texts.json';
import Logo from './Logo';



function Navbar({ theme }) {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	const closeNavbarOnClick = () => {
		navRef.current.classList.remove("responsive_nav");
	};

	return (
		<header className={`navbar-${theme}`}>
			<button className="nav-btn nav-btn--burger" onClick={showNavbar}>
				<FaBars />
			</button>
			<nav ref={navRef}>
				<Link  spy={true} smooth={true} duration={500}  to="hero" onClick={closeNavbarOnClick}>
					HOME
				</Link>
				<Link  spy={true} smooth={true} duration={500}  to="abme" onClick={closeNavbarOnClick}>
					CHI SONO
				</Link>
				<Link  spy={true} smooth={true} duration={500}  to="lavoro" onClick={closeNavbarOnClick}>
					SCOPRI LO SHIATSU
				</Link>
				<Link  spy={true} smooth={true} duration={500}  to="contatti" onClick={closeNavbarOnClick}>
					CONTATTI
				</Link>
				<button className="nav-btn nav-btn--close" onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
		</header>
	);
}

export default Navbar;

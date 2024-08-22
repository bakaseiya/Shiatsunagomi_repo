import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import texts from '../texts/texts.json';
import Logo from './Logo';



function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
            {/* <div className="border">
            </div> */}
			<nav ref={navRef}>
				<Link to="/">HOME</Link>
				<Link to="/About_me">CHI SONO</Link>
				<a href="/#">IL MIO LAVORO</a>
				<a href="/#">CONTATTI</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
            {/* <div className="">
                <Logo/>
            </div> */}
            
    
			<button
				className=" nav-btn nav-btn--burger"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;


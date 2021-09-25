import React, { useState } from "react";
import { Link } from "gatsby";
import styledNav from "./style";

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSetIsOpen = () => setIsOpen(!isOpen);

	return (
		<nav className={`${styledNav}`}>
			<button type="button" className="menu-button" onClick={toggleSetIsOpen}>
				<span className="menu-icon">☰</span>
				<span className="menu-label">menu</span>
			</button>
			<div className={`nav__inner bg-black ${isOpen ? "open" : ""}`}>
				<a
					className="nav-link"
					href="https://onemocneni-aktualne.mzcr.cz/covid-19"
					target="blank"
					rel="noopener noreferrer"
				>
					Vývoj
				</a>
				<a
					className="nav-link"
					href="https://www.vlada.cz/cz/epidemie-koronaviru/dulezite-informace/nouzovy-stav-a-mimoradna-opatreni-_-co-aktualne-plati-180234/"
					target="blank"
					rel="noopener noreferrer"
				>
					Opatření
				</a>
				<a
					className="nav-link"
					href="https://covid19.who.int/"
					target="blank"
					rel="noopener noreferrer"
				>
					Svět
				</a>
				<Link className="nav-link" to="/upominka">
					Upomínka
				</Link>
			</div>
		</nav>
	);
};

export default Nav;

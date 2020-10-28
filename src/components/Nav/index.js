import React from "react";
import { Link } from "gatsby";
import styledNav from "./style";

const Nav = () => {
	return (
		<nav className={`${styledNav}`}>
			<div className="nav__inner">
				<a
					className="button"
					href="https://onemocneni-aktualne.mzcr.cz/covid-19"
					target="blank"
					rel="noopener noreferrer"
				>
					Vývoj
				</a>
				<a
					className="button"
					href="https://www.vlada.cz/cz/epidemie-koronaviru/dulezite-informace/nouzovy-stav-a-mimoradna-opatreni-_-co-aktualne-plati-180234/"
					target="blank"
					rel="noopener noreferrer"
				>
					Opatření
				</a>
				<a
					className="button"
					href="https://covid19.who.int/"
					target="blank"
					rel="noopener noreferrer"
				>
					Svět
				</a>
				<Link to="/upominka" className="button">
					Upomínka
				</Link>
			</div>
		</nav>
	);
};

export default Nav;

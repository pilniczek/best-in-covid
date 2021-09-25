import React from "react";
import { node, object, string } from "prop-types";
import GatsbyImg from "gatsby-image/withIEPolyfill";
import { Link } from "gatsby";
import styledLayout from "./style";
import Nav from "../Nav";
import Seo from "../SEO";
import "../../style";

const Layout = ({ children, data, metaTitle, metaDescription, metaImage }) => {
	return (
		<>
			<Seo
				metaTitle={metaTitle}
				metaDescription={metaDescription}
				metaImage={metaImage}
				lang="cs"
			/>
			<div className={styledLayout}>
				<div className="header bg-dark">
					<div className="container p0">
						<div className="flex-line">
							<h1 className="m0">
								<Link className="headline__link" to="/">
									Best in covid
								</Link>
							</h1>
							<Link to="/">
								<GatsbyImg fixed={data.favicon.childImageSharp.fixed} />
							</Link>
						</div>
						<Nav />
					</div>
				</div>
				{children}
				<footer className="bg-dark footer">
					<div className="container p0">
						<div className="flex-line">
							<p>
								{"© "}
								<a
									href="https://tomas-pilnaj.cz/"
									target="blank"
									rel="noopener noreferrer"
								>
									Tomáš Pilnaj
								</a>
								, 28. 10. 2020
							</p>
							<p>
								{"Zdroje a hosting: "}
								<a
									href="https://github.com/pilniczek/best-in-covid"
									target="blank"
									rel="noopener noreferrer"
								>
									GitHub
								</a>
								.
							</p>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
};

Layout.propTypes = {
	children: node.isRequired,
	data: object.isRequired, // eslint-disable-line
	metaTitle: string.isRequired,
	metaDescription: string.isRequired,
	metaImage: string.isRequired,
};

export default Layout;

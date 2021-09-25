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
				<div className="header bg-black">
					<div className="container p0">
						<div className="flex-line">
							<Link className="headline__link" to="/">
								<GatsbyImg fixed={data.favicon.childImageSharp.fixed} />
								<h1 className="m0">Best in covid</h1>
							</Link>
							<Nav />
						</div>
					</div>
				</div>
				{children}
				<footer className="bg-black footer">
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

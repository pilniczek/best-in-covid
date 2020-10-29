import React from "react";
import { node, object, string } from "prop-types";
import "skeleton-css/css/normalize.css";
import "skeleton-css/css/skeleton.css";
import GatsbyImg from "gatsby-image/withIEPolyfill";
import { Link } from "gatsby";
import styledLayout from "./style";
import Nav from "../Nav";
import Seo from "../SEO";

const Layout = ({ children, data, metaTitle, metaDescription }) => {
	return (
		<>
			<Seo metaTitle={metaTitle} metaDescription={metaDescription} lang="cs" />
			<div className={styledLayout}>
				<div className="container--wrapper">
					<div className="container">
						<div className="flex-line">
							<h1 className="headline">
								<Link className="headline__link" to="/">
									Best in covid
								</Link>
							</h1>
							<Link to="/">
								<GatsbyImg fixed={data.favicon.childImageSharp.fixed} />
							</Link>
						</div>
					</div>
					<div className="container">
						<Nav />
					</div>
				</div>
				{children}
			</div>
		</>
	);
};

Layout.propTypes = {
	children: node.isRequired,
	data: object.isRequired, // eslint-disable-line
	metaTitle: string.isRequired,
	metaDescription: string.isRequired,
};

export default Layout;

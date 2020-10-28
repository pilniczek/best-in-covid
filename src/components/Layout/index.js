import React from "react";
import { node, object } from "prop-types";
import "skeleton-css/css/normalize.css";
import "skeleton-css/css/skeleton.css";
import GatsbyImg from "gatsby-image/withIEPolyfill";
import styledLayout from "./style";
import Nav from "../Nav";

const Layout = ({ children, data }) => {
	return (
		<div className={styledLayout}>
			<div className="container--wrapper">
				<div className="container">
					<div className="flex-line">
						<h1 className="headline">Best in covid</h1>
						<GatsbyImg fixed={data.favicon.childImageSharp.fixed} />
					</div>
				</div>
				<div className="container">
					<Nav />
				</div>
			</div>
			{children}
		</div>
	);
};

Layout.propTypes = {
	children: node.isRequired,
	data: object.isRequired, // eslint-disable-line
};

export default Layout;

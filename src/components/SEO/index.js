import React from "react";
import Helmet from "react-helmet";
import { arrayOf, object, string } from "prop-types";

const SEO = ({ meta, metaTitle, metaDescription, lang, robots }) => {
	return (
		<Helmet
			htmlAttributes={{ lang }}
			title={metaTitle}
			meta={[
				{
					name: "description",
					content: metaDescription,
				},
				{
					property: "og:title",
					content: metaTitle,
				},
				{
					property: "og:description",
					content: metaDescription,
				},
				{
					property: "og:type",
					content: "website",
				},
				{
					name: "twitter:card",
					content: "summary",
				},
				{
					name: "twitter:creator",
					content: "Tomáš Pilnaj",
				},
				{
					name: "twitter:title",
					content: metaTitle,
				},
				{
					name: "twitter:description",
					content: metaDescription,
				},
			].concat(meta)}
		>
			{robots !== null && robots !== "" && typeof robots !== "undefined" && (
				<meta name="robots" content={robots} />
			)}
		</Helmet>
	);
};

SEO.propTypes = {
	meta: arrayOf(object), // eslint-disable-line
	metaTitle: string,
	metaDescription: string,
	lang: string.isRequired,
	robots: string,
};

SEO.defaultProps = {
	meta: [],
	metaTitle: "",
	metaDescription: "",
	robots: null,
};

export default SEO;

import React from "react";
import Helmet from "react-helmet";
import { arrayOf, object, string } from "prop-types";

const SEO = ({ meta, metaTitle, metaDescription, metaImage, lang, robots }) => {
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
					name: "image",
					content: metaImage,
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
					name: "og:image",
					content: metaImage,
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
				{
					name: "twitter:image",
					content: metaImage,
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
	metaTitle: string.isRequired,
	metaDescription: string.isRequired,
	metaImage: string.isRequired,
	lang: string.isRequired,
	robots: string,
};

SEO.defaultProps = {
	meta: [],
	robots: null,
};

export default SEO;

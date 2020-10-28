require("dotenv").config({
	path: `.env`,
});

module.exports = {
	pathPrefix: "/",
	siteMetadata: {
		title: `Best in Covid`,
		description: "Czech Republic is the best in covid!",
		author: `Tomáš Pilnaj`,
		siteUrl: "http://pilniczek.github.io/best-in-covid",
	},
	plugins: [
		`gatsby-plugin-sitemap`,
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: "http://pilniczek.github.io/best-in-covid",
				sitemap: "http://pilniczek.github.io/best-in-covidsitemap.xml",
				policy: [{ userAgent: "*", allow: "/" }],
			},
		},
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: "./src/images/favicon.png",
				background: "#fff",
				theme_color: "#000",
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					favicons: true,
					firefox: true,
					windows: true,
				},
			},
		},
		{
			resolve: "gatsby-plugin-eslint",
			options: {
				exclude: /(node_modules|.cache|public)/,
				stages: ["develop"],
			},
		},
		`gatsby-plugin-linaria`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/images/`,
				name: "images",
			},
		},
		{
			resolve: "gatsby-plugin-google-tagmanager",
			options: {
				id: process.env.GATSBY_GTM_ID,
				includeInDevelopment: false,
			},
		},
	],
};

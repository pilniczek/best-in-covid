import React from "react";
import { object } from "prop-types";
import GatsbyImg from "gatsby-image/withIEPolyfill";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const Upominka = ({ data }) => {
	return (
		<Layout
			data={data}
			metaTitle="Best in covid"
			metaDescripton="Upomínka na současnou situaci."
		>
			<div className="container">
				<div className="row">
					<h2>Upomínka</h2>
					<p>Premierův populární citát do každé kapsy!</p>
					<p>
						Obdarujte své klíče přívěskem. Dejte jim najevo, že i když je po
						dobu lockdownu prakticky nepoužívátě, tak na ně myslíte. A těšíte
						se, až je zase budete potřebovat několikrát denně.
					</p>
				</div>
			</div>
			<div className="container">
				<div className="row" style={{ backgroundColor: "black" }}>
					<div className="columns three">&nbsp;</div>
					<div className="columns six">
						<GatsbyImg fluid={data.best_in_covid_all.childImageSharp.fluid} />
					</div>
					<div className="columns three">&nbsp;</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="columns six">
						<GatsbyImg fluid={data.best_in_covid_black.childImageSharp.fluid} />
					</div>
					<div className="columns six">
						<GatsbyImg fluid={data.best_in_covid_white.childImageSharp.fluid} />
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<h2>Jak ji získám?</h2>
					<p>
						{"Podklady pro 3D tisk nalezneta na "}
						<a
							href="https://www.thingiverse.com/thing:4637753"
							target="blank"
							rel="noopener noreferrer"
						>
							Thingiverse
						</a>
						.
					</p>
					<p>
						{
							"Nemáte-li 3D tiskárnu ani známého, který by Vám přívěšek vytisknul, nezoufejte. "
						}
						<a
							href="https://tomas-pilnaj.cz/kontakt/"
							target="blank"
							rel="noopener noreferrer"
						>
							Zkuste se mi ozvat
						</a>
						{" a třeba to nějak vymyslíme!"}
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default Upominka;

Upominka.propTypes = {
	data: object.isRequired, // eslint-disable-line
};

export const query = graphql`
	query UpominkaQuery {
		favicon: file(relativePath: { eq: "favicon.png" }) {
			childImageSharp {
				fixed(width: 100) {
					...GatsbyImageSharpFixed_withWebp_noBase64
				}
			}
		}
		best_in_covid_white: file(relativePath: { eq: "best-in-covid-white.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp_noBase64
				}
			}
		}
		best_in_covid_black: file(relativePath: { eq: "best-in-covid-black.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp_noBase64
				}
			}
		}
		best_in_covid_all: file(relativePath: { eq: "best-in-covid-all.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp_noBase64
				}
			}
		}
	}
`;

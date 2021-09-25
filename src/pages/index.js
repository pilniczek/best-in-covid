import React from "react";
import { object } from "prop-types";
import GatsbyImg from "gatsby-image/withIEPolyfill";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Iframe from "../components/Iframe";
import TextBox from "../components/TextBox";
import Graph from "../components/Graph";

const Index = ({ data }) => {
	return (
		<Layout
			data={data}
			metaTitle="Best in covid"
			metaDescription="Češi musí být vždy ve všem nejlepší! A patřičně se pochlubit."
			metaImage={data.meta_image.childImageSharp.fixed.src}
		>
			<div className="bg-black u-full-width">
				<div className="container">
					<Iframe
						title="Best in Covid - Andrej Babiš"
						src="https://www.youtube.com/embed/HSH2dGRc_LE"
					/>
				</div>
			</div>
			<div className="container">
				<TextBox title="Hvězdný výrok, který zraje" icon="?">
					<p>
						{"Zazněl na "}
						<a
							href="https://2020.bledstrategicforum.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Bled Strategic Forum 2020
						</a>
						.
					</p>
				</TextBox>
			</div>
			<div className="container">
				<h2>Jak šel čas</h2>
				<TextBox title="28.1.2020 - Otázky bez odpovědí" icon="!">
					<p>
						<a
							href="https://www.psp.cz/sqw/detail.sqw?id=6007"
							target="_blank"
							rel="noopener noreferrer"
						>
							Bohuslav Svoboda
						</a>
						{" chce zařadit na pořad jednání PSP "}
						<a
							href="https://www.psp.cz/eknih/2017ps/stenprot/040schuz/s040160.htm#r10"
							target="_blank"
							rel="noopener noreferrer"
						>
							informace vlády ČR k opatřením souvisejícím se šířením koronaviru
						</a>
						.
					</p>
					<p>
						{"Bohužel "}
						<a
							href="https://www.psp.cz/sqw/hlasy.sqw?G=72072"
							target="_blank"
							rel="noopener noreferrer"
						>
							marně
						</a>
						.
					</p>
				</TextBox>
			</div>
			<div className="bg-black u-full-width">
				<div className="container">
					<Iframe
						title="Koronavirová horská dráha Andreje Babiše! Změnu názorů premiéra shrnuje Veselovský"
						src="https://video.aktualne.cz/embed_iframe/dvtv/best-in-covid-nebo-taky-ne-nazorovou-houpacku-premiera-babis/r~30f6c2ac0dab11ebaabd0cc47ab5f122/?media_external=1"
					/>
				</div>
			</div>
			<div className="bg-black u-full-width">
				<div className="container">
					<Iframe
						title="Jak šel čas s koronavirem - Milion chvilek"
						src="https://www.youtube.com/embed/B2a2m3CsiR0"
					/>
				</div>
			</div>
			<div className="container">
				<h2>Jak to dopadlo</h2>
				<Graph />
				<TextBox title="Drsné finále" icon="?!">
					<p>
						{"Ohlédnutí za výsledkem řízení v době pandemie dal dohromady web "}
						<a
							href="https://neschopnostzabiji.cz/"
							target="_blank"
							rel="noopener noreferrer"
						>
							https://neschopnostzabiji.cz/
						</a>
						.
					</p>
				</TextBox>
			</div>
			<div className="container">
				<h2>Že si za to lidé mohou sami? Možná na tom kapka pravdy bude.</h2>
				<p>
					{"Následující post od "}
					<a
						title="Josef Šlerka - profil"
						target="_blank"
						rel="noreferrer"
						href="https://www.facebook.com/josef.slerka?fref=nf"
					>
						Josef Šlerka
					</a>
					{" publikovaný 28. října, naleznete "}
					<a
						title="Josef Šlerka - post"
						target="_blank"
						rel="noreferrer"
						href="https://www.facebook.com/760503155/posts/10158905368163156/"
					>
						zde
					</a>
					.
				</p>
				<div
					style={{
						border: "1px solid silver",
						borderRadius: "5px",
						padding: "20px 30px",
					}}
				>
					<p>
						Na českém Facebooku nejúspěšnější články (a videa z YouTube)
						obsahující v nadpisu slovo COVID a Koronavirus za poslední měsíc dle
						Buzzsumo. Jo a to video je z Primy hovořící Lenka Zlámalová o údajné
						studii WHO. We are doomed.
					</p>
					<GatsbyImg fluid={data.covid_share_slerka.childImageSharp.fluid} />
					<GatsbyImg fluid={data.covid_share_slerka_2.childImageSharp.fluid} />
				</div>
			</div>
		</Layout>
	);
};

export default Index;

Index.propTypes = {
	data: object.isRequired, // eslint-disable-line
};

export const query = graphql`
	query IndexQuery {
		covid_share_slerka: file(relativePath: { eq: "covid-share-slerka.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp_noBase64
				}
			}
		}
		covid_share_slerka_2: file(
			relativePath: { eq: "covid-share-slerka-2.jpg" }
		) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp_noBase64
				}
			}
		}
		favicon: file(relativePath: { eq: "favicon.png" }) {
			childImageSharp {
				fixed(width: 100) {
					...GatsbyImageSharpFixed_withWebp_noBase64
				}
			}
		}
		meta_image: file(relativePath: { eq: "favicon.png" }) {
			childImageSharp {
				fixed(width: 200) {
					...GatsbyImageSharpFixed_withWebp_noBase64
				}
			}
		}
	}
`;

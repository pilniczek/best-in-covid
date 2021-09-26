import React from "react";
import { string } from "prop-types";
import { iframeWrapper } from "./style";

const Iframe = ({ src, title }) => {
	return (
		<div className={iframeWrapper}>
			<iframe
				title={title}
				src={src}
				allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				msallowfullscreen="true"
				frameBorder="0"
			/>
		</div>
	);
};

export const YT = ({ videoid, playlabel }) => {
	return (
		<div className={iframeWrapper}>
			<lite-youtube videoid={videoid} playlabel={playlabel} />
		</div>
	);
};

YT.propTypes = {
	videoid: string.isRequired,
	playlabel: string.isRequired,
};

Iframe.propTypes = {
	title: string.isRequired,
	src: string.isRequired,
};

export default Iframe;

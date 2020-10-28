import React from "react";
import { string } from "prop-types";
import { iframeWrapper, styledIframe } from "./style";

const Iframe = ({ src, title }) => {
	return (
		<div className={iframeWrapper}>
			<iframe
				title={title}
				src={src}
				allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				className={styledIframe}
				allowFullScreen
				msallowfullscreen="true"
				frameBorder="0"
			/>
		</div>
	);
};

Iframe.propTypes = {
	title: string.isRequired,
	src: string.isRequired,
};

export default Iframe;

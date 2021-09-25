import "skeleton-css/css/normalize.css";
import "skeleton-css/css/skeleton.css";
import { css } from "linaria";

const defaultStyles = css`
	:global() {
		.bg-dark {
			background-color: #24292e;
			color: #f8f9fa;
		}
		.bg-black {
			background-color: #000000;
			color: #f8f9fa;
		}
		.p0 {
			padding: 0 !important;
		}
		.m0 {
			margin: 0 !important;
		}
	}
`;

export default defaultStyles;

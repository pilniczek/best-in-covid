import "skeleton-css/css/normalize.css";
import "skeleton-css/css/skeleton.css";
import { css } from "linaria";

const defaultStyles = css`
	:global() {
		h2:after {
			content: "";
			display: block;
			border-bottom: 1rem solid #f24d12;
			width: 10rem;
		}
		.button,
		button {
			background-color: #f8f9fa;
		}
		.bg-black {
			background-color: #000000;
			color: #f8f9fa;
			.button,
			button {
				background-color: #000000;
				color: #f8f9fa;
			}
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

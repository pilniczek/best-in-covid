import { css } from "linaria";

export const iframeWrapper = css`
	@keyframes loading {
		from {
			content: "🌑";
		}
		12.5% {
			content: "🌘";
		}
		25% {
			content: "🌗";
		}
		37.5% {
			content: "🌖";
		}
		50% {
			content: "🌕";
		}
		62.5% {
			content: "🌔";
		}
		75% {
			content: "🌓";
		}
		87.5% {
			content: "🌒";
		}
		to {
			content: "🌑";
		}
	}

	border: 0px none;
	height: 0px;
	margin: 0px;
	overflow: hidden;
	padding: 0px 0px 56.25%;
	position: relative;

	&:before {
		content: "🌑";
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		animation: loading 0.75s infinite;
		font-size: 3rem;
	}
`;

export const styledIframe = css`
	border: 0px none;
	height: 100%;
	left: 0px;
	margin: 0px;
	overflow: hidden;
	padding: 0px;
	position: absolute;
	top: 0px;
	width: 100%;
`;

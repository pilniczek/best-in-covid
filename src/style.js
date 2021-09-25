import normalize from "skeleton-css/css/normalize.css";
import skeleton from "skeleton-css/css/skeleton.css";
import { css } from "linaria";

const defaultStyles = css`
	:global() {
		${normalize}
		${skeleton}
	}
`;

export default defaultStyles;

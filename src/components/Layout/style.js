import { css } from "linaria";

const styledLayout = css`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-width: 280px;
	margin: auto;
	.container {
		padding-bottom: 2rem;
	}
	.container--wrapper {
		background-color: #24292e;
		margin-bottom: 2rem;
	}
	.flex-line {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.headline {
		margin: 0;
	}
	.headline__link {
		color: #f8f9fa;
		text-decoration: none;
	}
`;

export default styledLayout;
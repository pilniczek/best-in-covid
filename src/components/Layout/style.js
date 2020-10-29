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
		color: #f8f9fa;
		margin-bottom: 2rem;
		&.footer {
			padding-top: 2rem;
			margin-bottom: 0;
		}
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
		text-decoration: none;
		color: #f8f9fa;
	}
`;

export default styledLayout;

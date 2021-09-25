import { css } from "linaria";

const styledLayout = css`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-width: 280px;
	margin: auto;
	.container {
		padding-top: 6rem;
		padding-bottom: 4rem;
	}
	.footer {
		padding-top: 4rem;
		margin-bottom: 0;
	}
	.flex-line {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.headline__link {
		text-decoration: none;
		color: #f8f9fa;
		display: flex;
		align-items: center;
		padding: 0 20px;
		margin: 0 -20px;
	}
	.header {
		padding-bottom: 2rem;
	}
`;

export default styledLayout;

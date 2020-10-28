import { css } from "linaria";

const styledNav = css`
	text-align: center;
	max-width: 600px;
	width: 100%;
	margin: auto;
	.nav__inner {
		margin-left: -0.5rem;
		margin-right: -0.5rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		@media (max-width: 300px) {
			margin-left: -1.5rem;
			margin-right: -1.5rem;
		}
	}
	.button {
		background-color: #f8f9fa;
		width: 23%;
		min-width: 125px;
		margin-left: 0.5rem;
		margin-right: 0.5rem;
	}
`;

export default styledNav;

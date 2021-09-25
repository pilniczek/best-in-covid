import { css } from "linaria";

const styledNav = css`
	max-width: 150px;
	width: 100%;
	position: relative;
	text-align: right;
	.nav__inner {
		position: absolute;
		right: 0;
		bottom: 0;
		z-index: 100000;
		width: 100%;
		transform: translateY(100%);
		display: none;
		flex-direction: column;
		padding: 10px 0;
		text-transform: uppercase;
		&.open {
			display: flex;
		}
	}
	.menu-button {
		display: flex;
		align-items: center;
		padding: 0 5px;
		margin-left: auto;
		margin-bottom: 0;
		font-weight: normal;
	}
	.menu-icon {
		font-size: 20px;
		height: 20px;
		line-height: 20px;
		padding: 0 5px;
		display: inline-block;
	}
	.menu-label {
		font-size: 14px;
		height: 14px;
		line-height: 14px;
		padding: 0 5px;
		display: inline-block;
	}
	.nav-link {
		padding: 5px 0;
		width: 100%;
		font-size: 14px;
		color: #f8f9fa;
		text-decoration: none;
		&:after {
			content: "";
			display: block;
			width: 0%;
			height: 0.3rem;
			background: linear-gradient(
				90deg,
				#000000 85%,
				#f24d12 85%,
				#f24d12 100%
			);
			transition: width 0.2s ease-in-out;
		}
		&:hover:after,
		&:focus:after {
			outline: none;
			width: 100%;
		}
	}
`;

export default styledNav;

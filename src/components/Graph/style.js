import { css } from "linaria";

const styledGraph = css`
	display: block;
	text-align: center;
	.g-col-wrap {
		padding-top: 3rem;
		padding-bottom: 6rem;
		max-width: 800px;
		margin: auto;
	}

	.g-col-wrap .g-col .g-box.gb-h04 {
		height: 15.5rem;
	}
	.g-col-wrap .g-col {
		display: inline-block;
		vertical-align: bottom;
		width: 10%;
		position: relative;
	}
	.g-col-wrap .g-col:not(:last-child) {
		margin-right: 5%;
	}
	.g-col-wrap .g-col .death-count {
		color: #0e0e1c;
		font-size: 1rem;
		font-weight: bold;
		position: absolute;
		white-space: nowrap;
		left: 50%;
		top: -0.6rem;
		transform: translate(-50%, -100%);
	}
	.g-col-wrap .g-col .country {
		left: 50%;
		color: #0e0e1c;
		font-size: 1rem;
		font-weight: 500;
		position: absolute;
		white-space: nowrap;
		top: calc(100% + 1.2rem);
		transform: translateX(-50%);
	}
	.g-col-wrap .g-col .g-box {
		background-color: #f24d12;
		position: relative;
		-moz-transition: 0.5s height;
		-o-transition: 0.5s height;
		-webkit-transition: 0.5s height;
		transition: 0.5s height;
	}
	.g-col-wrap .g-col .g-box.gb-black {
		background-color: #0e0e1c;
	}
	.cross {
		position: absolute;
		width: 18%;
		min-width: 12px;
		bottom: 1.3rem;
		left: 50%;
		transform: translateX(-50%);
	}
	.cross.big {
		width: 25%;
		min-width: 15px;
		top: 1.5rem;
		bottom: auto;
		left: 50%;
	}
	.gb-h01 {
		height: 11.9rem;
	}
	.gb-h02 {
		height: 5.5rem;
	}
	.gb-h03 {
		height: 6.5rem;
	}
	.gb-h04 {
		height: 0rem;
	}
	.gb-h05 {
		height: 7rem;
	}
	.gb-h06 {
		height: 6.9rem;
	}
	.gb-h07 {
		height: 5.8rem;
	}
	.gb-h08 {
		height: 10.7rem;
	}
	.g-col-wrap .g-col .g-box.gb-h04 {
		height: 12rem;
	}
	@media (min-width: 1260px) {
		.graph-headline {
			font-size: 2.4rem;
		}
		.country,
		.death-count {
			font-size: 1.6rem;
		}
		.gb-h01 {
			height: 23.8rem;
		}
		.gb-h02 {
			height: 10.6rem;
		}
		.gb-h03 {
			height: 13rem;
		}
		.gb-h05 {
			height: 14rem;
		}
		.gb-h06 {
			height: 13.8rem;
		}
		.gb-h07 {
			height: 11.6rem;
		}
		.gb-h08 {
			height: 21.4rem;
		}
		.g-col-wrap .g-col .g-box.gb-h04 {
			height: 31rem;
		}
		.g-col-wrap .g-col .g-box.gb-h04 {
			height: 23.5rem;
		}
	}
	@media screen and (max-width: 405px) {
		.g-col-wrap .g-col .country {
			font-size: 0.8rem;
		}
		.g-col-wrap .g-col {
			width: 12.55%;
		}
		.g-col-wrap .g-col:not(:last-child) {
			margin-right: 2%;
		}
	}
`;

export default styledGraph;

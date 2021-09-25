import { css } from "linaria";

const styledTextBox = css`
	border-left: 2rem solid #f24d12;
	box-shadow: 0.5rem 0.5rem 2rem 0 rgb(0 0 0 / 20%);
	display: flex;
	padding: 0rem 3rem 3rem 3rem;
	margin-bottom: 3rem;
	.icon {
		flex-shrink: 0;
		height: 8rem;
		line-height: 8rem;
		width: 8rem;
		font-size: 4.6rem;
		text-align: center;
		border: 0.2rem solid #f24d12;
		color: #f24d12;
		font-weight: bold;
		border-radius: 9999.9rem;
		margin-right: 3rem;
		margin-top: 3rem;
	}
	.title {
		text-transform: uppercase;
		letter-spacing: 0.1rem;
		font-weight: 700;
		font-size: 1.25rem;
	}
	.content {
		padding-top: 3rem;
	}
	@media (max-width: 549px) {
		flex-direction: column;
	}
`;

export default styledTextBox;

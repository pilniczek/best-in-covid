import React from "react";
import styledGraph from "./style";

const TextBox = () => {
	return (
		<div className={`${styledGraph}`}>
			<div className="g-col-wrap">
				<div className="g-col">
					<div className="g-box gb-h01">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlSpace="preserve"
							viewBox="0 0 60 60"
							className="cross"
						>
							<path
								d="M36.5 13V0h-13v13h-15v13h15v34h13V26h15V13z"
								fill="white"
							/>
						</svg>
					</div>

					<span className="death-count">21 412</span>

					<span className="country">Polsko</span>
				</div>

				<div className="g-col">
					<div className="g-box gb-h02">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlSpace="preserve"
							viewBox="0 0 60 60"
							className="cross"
						>
							<path
								d="M36.5 13V0h-13v13h-15v13h15v34h13V26h15V13z"
								fill="white"
							/>
						</svg>
					</div>

					<span className="death-count">9 252</span>

					<span className="country">Srbsko</span>
				</div>

				<div className="g-col">
					<div className="g-box gb-h03">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlSpace="preserve"
							viewBox="0 0 60 60"
							className="cross"
						>
							<path
								d="M36.5 13V0h-13v13h-15v13h15v34h13V26h15V13z"
								fill="white"
							/>
						</svg>
					</div>

					<span className="death-count">11 881</span>

					<span className="country">Německo</span>
				</div>

				<div className="g-col">
					<div className="g-box gb-h04 gb-black">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlSpace="preserve"
							viewBox="0 0 60 60"
							className="cross big"
						>
							<path
								d="M36.5 13V0h-13v13h-15v13h15v34h13V26h15V13z"
								fill="white"
							/>
						</svg>
						<span className="death-count">30 413</span>
					</div>

					<div className="g-box gb-h05">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlSpace="preserve"
							viewBox="0 0 60 60"
							className="cross"
						>
							<path
								d="M36.5 13V0h-13v13h-15v13h15v34h13V26h15V13z"
								fill="white"
							/>
						</svg>
						<span className="death-count" style={{ color: "white" }}>
							Ø
							<br />
							14 264
						</span>
					</div>

					<span className="country">Česko</span>
				</div>

				<div className="g-col">
					<div className="g-box gb-h06">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlSpace="preserve"
							viewBox="0 0 60 60"
							className="cross"
						>
							<path
								d="M36.5 13V0h-13v13h-15v13h15v34h13V26h15V13z"
								fill="white"
							/>
						</svg>
					</div>

					<span className="death-count">12 826</span>

					<span className="country">Rakousko</span>
				</div>

				<div className="g-col">
					<div className="g-box gb-h07">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlSpace="preserve"
							viewBox="0 0 60 60"
							className="cross"
						>
							<path
								d="M36.5 13V0h-13v13h-15v13h15v34h13V26h15V13z"
								fill="white"
							/>
						</svg>
					</div>

					<span className="death-count">10 582</span>

					<span className="country">Estonsko</span>
				</div>

				<div className="g-col">
					<div className="g-box gb-h08">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlSpace="preserve"
							viewBox="0 0 60 60"
							className="cross"
						>
							<path
								d="M36.5 13V0h-13v13h-15v13h15v34h13V26h15V13z"
								fill="white"
							/>
						</svg>
					</div>

					<span className="death-count">19 630</span>

					<span className="country">Rumunsko</span>
				</div>
			</div>
		</div>
	);
};

export default TextBox;

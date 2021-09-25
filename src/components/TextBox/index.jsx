import React from "react";
import { node, string, any } from "prop-types";
import styledTextBox from "./style";

const TextBox = ({ icon, title, children }) => {
	return (
		<div className={styledTextBox}>
			<div className="icon">{icon}</div>
			<div className="content">
				<h3 className="title">{title}</h3>
				{children}
			</div>
		</div>
	);
};

TextBox.propTypes = {
	children: node.isRequired,
	icon: any.isRequired, // eslint-disable-line
	title: string.isRequired,
};

export default TextBox;

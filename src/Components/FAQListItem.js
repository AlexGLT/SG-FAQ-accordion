import { useState } from "react";

import "./FAQListItem.css";

export default function FAQListItem({ accordion, text }) {
	const [panelVisibility, setPanelVisibility] = useState("invisibility");

	return (
		<>
			<div className="accordion" onClick={togglePanelVisibility}>
				{accordion}
				<img src="/images/icon-arrow-down.svg" className="arrow" alt="arrow-down" />
			</div>
			<div className={`panel ${panelVisibility}`}>{text}</div>
		</>
	);

	function togglePanelVisibility() {
		if (panelVisibility) setPanelVisibility("");
		else setPanelVisibility("invisibility");
	}
}

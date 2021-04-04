import { useRef } from "react";

import "./FAQListItem.css";

export default function FAQListItem({ accordion, text }) {
	const accordionRef = useRef();
	const panelRef = useRef();
	const arrowRef = useRef();

	return (
		<>
			<div ref={accordionRef} className="accordion" onClick={togglePanelVisibility}>
				{accordion}
				<img ref={arrowRef} src="/images/icon-arrow-down.svg" className="arrow" alt="arrow-down" />
			</div>
			<div ref={panelRef} className="panel">
				{text}
			</div>
		</>
	);

	function togglePanelVisibility() {
		const panel = panelRef.current;

		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}

		accordionRef.current.classList.toggle("accordion-active");
		panelRef.current.classList.toggle("panel-active");
		arrowRef.current.classList.toggle("arrow-active");
	}
}

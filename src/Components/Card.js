import "./Card.css";

import FAQList from "./FAQList";

export default function Card() {
	return (
		<div id="card">
			<div id="image-container">
				<img id="women-image" src="/images/illustration-woman-online-desktop.svg" alt="women" />
				<img id="box-image" src="/images/illustration-box-desktop.svg" alt="women" />
			</div>
			<FAQList />
		</div>
	);
}

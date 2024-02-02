import React from "react";
import { useState } from "react";

function Character(props) {
	// ❗ Add the props
	const [showHomeworld, setShowHomeworld] = useState(false);
	const toggleHomeworld = () => {
		setShowHomeworld(!showHomeworld);
	};
	return (
		<div onClick={toggleHomeworld} className="character-card">
			<h3 className="character-name">{props.person.name}</h3>
			{showHomeworld && (
				<p>
					Plant: <span className="character-planet">{props.person.homeworld}</span>
				</p>
			)}
		</div>
	);
}

export default Character;

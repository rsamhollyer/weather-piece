import { useState, useEffect } from "react";

const Speed = (props) => {
	const { current } = props;

	const [state, setState] = useState(0);
	let color;

	useEffect(() => {
		if (current) {
			setState(current.speed);
		}
	}, [current]);

	if (state < 0.5) {
		color = "good";
	} else if (state < 0.8) {
		color = "caution";
	} else {
		color = "danger";
	}
	return (
		<div className="speed-component single-stat-panel">
			<div className="text-area">
				<h3 className="component-header">Speed</h3>
				<h2 className={`read-out-info ${color}`}>
					{current ? current.speed.toFixed(4) : 0}
					<span>FT/S</span>
				</h2>
			</div>

			<div className="icon-area">
				<span
					className={`component-icon ${color}fas fa-tachometer-alt `}
				></span>
			</div>
		</div>
	);
};

export default Speed;

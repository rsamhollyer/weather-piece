import { useState, useEffect } from "react";

const Altitude = (props) => {
	const { current } = props;
	const [state, setState] = useState(0);
	let color;
	let background;

	useEffect(() => {
		if (current) {
			setState(current.alt);
		}
	}, [current]);

	if (state < 0.5) {
		color = "good";
		background = "good-background";
	} else if (state < 0.8) {
		color = "caution";
		background = "caution-background";
	} else {
		color = "danger";
		background = "danger-background";
	}

	return (
		<div className="altitude-component single-stat-panel">
			<div className="text-area">
				<h3 className="component-header">Altitude</h3>
				<h2 className={`read-out-info ${color}`}>
					{current ? current.alt.toFixed(2) : 0} <span>feet</span>
				</h2>
			</div>

			<div className={`icon-area ${background}`}>
				<span className="component-icon fas fa-plane-departure"></span>
			</div>
		</div>
	);
};

export default Altitude;

import { useState, useEffect } from "react";

const MotorTemp = (props) => {
	const { current } = props;
	return (
		<div className="motor-temp-component single-stat-panel">
			<div className="text-area">
				<h3 className="component-header">Motor Temperature</h3>
				<h2 className="read-out-info">
					{current ? current.temp.toFixed(2) : 0} <span>°F</span>
				</h2>
			</div>

			<div className="icon-area">
				<span className="component-icon fas fa-fire"></span>
			</div>
		</div>
	);
};

export default MotorTemp;

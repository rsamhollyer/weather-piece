const MotorTemp = () => {
	return (
		<div className="motor-temp-component single-stat-panel">
			<div className="text-area">
				<h3 className="component-header">Motor Temperature</h3>
				<h2 className="read-out-info">
					200 <span>°F</span>
				</h2>
			</div>

			<div className="icon-area">
				<span className="component-icon fas fa-fire"></span>
			</div>
		</div>
	);
};

export default MotorTemp;

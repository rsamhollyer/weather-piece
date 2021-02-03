const FlightDuration = (props) => {
	const { data } = props;
	return (
		<div className="flight-duration-component single-stat-panel">
			<div className="text-area">
				<h3 className="component-header">Flight Duration</h3>
				<h2 className="read-out-info">
					{data ? data.time : 0} <span>seconds</span>
				</h2>
			</div>

			<div className="icon-area">
				<span className="component-icon fas fa-stopwatch"></span>
			</div>
		</div>
	);
};

export default FlightDuration;

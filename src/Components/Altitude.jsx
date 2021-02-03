const Altitude = (props) => {
	const { data } = props;
	return (
		<div className="altitude-component single-stat-panel">
			<div className="text-area">
				<h3 className="component-header">Altitude</h3>
				<h2 className="read-out-info">
					{data ? data.alt.toFixed(2) : 0} <span>feet</span>
				</h2>
			</div>

			<div className="icon-area">
				<span className="component-icon fas fa-plane-departure"></span>
			</div>
		</div>
	);
};

export default Altitude;

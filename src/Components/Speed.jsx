const Speed = (props) => {
	const { current } = props;

	return (
		<div className="speed-component single-stat-panel">
			<div className="text-area">
				<h3 className="component-header">Speed</h3>
				<h2 className="read-out-info">
					{current ? current.speed.toFixed(4) : 0}
					<span>FT/S</span>
				</h2>
			</div>

			<div className="icon-area">
				<span className="component-icon fas fa-tachometer-alt"></span>
			</div>
		</div>
	);
};

export default Speed;

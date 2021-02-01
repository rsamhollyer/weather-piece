const Map = (props) => {
	const { viewport } = props;
	return (
		<div className="map-component">
			<ReactMapGL {...viewport}></ReactMapGL>
		</div>
	);
};

export default Map;

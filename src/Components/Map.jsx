import ReactMapGL from "react-map-gl";

const Map = (props) => {
	const { viewport, setViewport, key } = props;

	return (
		<div className="map-component">
			<ReactMapGL
				mapStyle="mapbox://styles/rsamhollyer/ckkn1mivy5aml17mnueua6ovj"
				mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
				{...viewport}
				onViewportChange={(nextViewport) => {
					setViewport(nextViewport);
				}}
			></ReactMapGL>
		</div>
	);
};

export default Map;

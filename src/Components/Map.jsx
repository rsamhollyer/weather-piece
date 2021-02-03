import ReactMapGL from "react-map-gl";
import { config } from "../Config/config";
import { useState, useEffect } from "react";
const Map = (props) => {
	const { data } = props;
	const [viewport, setViewport] = useState({
		latitude: 29.910577,
		longitude: -95.060882,
		zoom: 11,
		width: "90%",
		height: "90%",
	});
	useEffect(() => {
		if (data[0]) {
			setViewport({
				...viewport,
				latitude: data[0].lat,
				longitude: data[0].long,
			});
		}
	}, [data]);

	return (
		<div className="map-component">
			<ReactMapGL
				mapStyle="mapbox://styles/rsamhollyer/ckkprmd573gmw17mlcncjk8bz"
				mapboxApiAccessToken={config.mapBox}
				{...viewport}
				onViewportChange={(nextViewport) => {
					setViewport(nextViewport);
				}}
			></ReactMapGL>
		</div>
	);
};

export default Map;

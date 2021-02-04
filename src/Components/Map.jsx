import ReactMapGL, { Marker, Layer } from "react-map-gl";
import { config } from "../Config/config";
import { useState, useEffect } from "react";

const droneLineLayer = {
	id: "drone-tracking",
	type: "line",
	source: "mapbox",
	lineColor: "red",
	lineWidth: "5",
};
const Map = (props) => {
	const { data, mapPoints } = props;
	const [viewport, setViewport] = useState({
		latitude: 29.910577,
		longitude: -95.060882,
		zoom: 13,
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
			>
				{mapPoints.lat ? (
					<Marker latitude={mapPoints.lat} longitude={mapPoints.long}>
						<button key={mapPoints.key} className="marker-btn">
							<img src={"/black-drone.svg"} alt={"Drone Icon"} />
						</button>
						<Layer {...droneLineLayer} />
					</Marker>
				) : (
					<Marker latitude={29.910577} longitude={-95.060882}>
						<button key={1} className="marker-btn">
							<img src={"/black-drone.svg"} alt={"Drone Icon"} />
						</button>
					</Marker>
				)}
			</ReactMapGL>
		</div>
	);
};

export default Map;

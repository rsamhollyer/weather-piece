import ReactMapGL from "react-map-gl";
import { config } from "../Config/config";
const Map = (props) => {
	const { viewport, setViewport } = props;

	return (
		<div className="map-component">
			<ReactMapGL
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

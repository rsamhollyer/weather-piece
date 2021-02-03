import Moment from "react-moment";
import { useEffect } from "react";
const Header = (props) => {
	const { getWeather, getData, data } = props;
	console.log(data);
	useEffect(() => {
		if (data[0]) {
			getWeather("imperial", data[0].lat, data[0].long);
		}
	}, [data]);
	return (
		<div className="header-component">
			<h1>Drone Flight Recorder</h1>
			<button
				onClick={() => {
					getData();
				}}
			>
				Get Flight
			</button>
			<div className="date-time">
				<Moment className="date" format="DD/MM/YYYY" />
				<Moment className="time" format="HH:mm" />
			</div>
		</div>
	);
};

export default Header;

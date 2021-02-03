import Moment from "react-moment";
const Header = (props) => {
	const { getWeather, getData } = props;
	return (
		<div className="header-component">
			<h1>Drone Flight Recorder</h1>
			<button
				onClick={() => {
					getWeather("imperial", "77532");
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

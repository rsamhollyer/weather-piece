import Moment from "react-moment";
const Header = () => {
	return (
		<div className="header-component">
			<h1>Drone Flight Recorder</h1>
			<div className="date-time">
				<Moment className="date" format="DD/MM/YYYY" />
				<Moment className="time" format="HH:mm" />
			</div>
		</div>
	);
};

export default Header;

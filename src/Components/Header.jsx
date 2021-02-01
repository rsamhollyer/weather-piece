import Moment from "react-moment";
const Header = () => {
	return (
		<div className="header-component">
			<h1>Hi React</h1>
			<Moment format="DD/MM/YYYY" />
		</div>
	);
};

export default Header;

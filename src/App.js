import "./App.css";
import { useState, useEffect } from "react";
import { config } from "./Config/config";
import axios from "axios";
import { Weather } from "./Components/Weather";
import Header from "./Components/Header";
import Speed from "./Components/Speed";
import Altitude from "./Components/Altitude";
import MotorTemp from "./Components/MotorTemp";
import FlightDuration from "./Components/FlightDuration";
import SpeedGraph from "./Components/SpeedGraph";
import AltitudeGraph from "./Components/AltitudeGraph";
import MotorGraph from "./Components/MotorGraph";
import Map from "./Components/Map";
import Moment from "react-moment";
function App() {
	const [weather, setWeather] = useState(null);

	const getWeather = async (units, zipcode) => {
		const resp = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${config.weatherKey}&units=${units}`
		);
		setWeather(resp.data);
	};

	useEffect(() => {
		getWeather("imperial", "77532");
	}, []);

	return (
		<main className="app">
			<Header />
			<Speed />
			<Altitude />
			<MotorTemp />
			<FlightDuration />
			<SpeedGraph />
			<AltitudeGraph />
			<MotorGraph />
			<Map />
			<Weather weather={weather} />
		</main>
	);
}

export default App;

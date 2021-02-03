import "./App.css";
import { useState, useEffect } from "react";
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
import { config } from "./Config/config";

function App() {
	useEffect(() => {
		getWeather("imperial", "77532");
		getData();
		setDataLength(data.length);
	}, []);

	const [weather, setWeather] = useState(null);
	const [data, setData] = useState([]);
	const [index, setIndex] = useState(0);
	const [dataLength, setDataLength] = useState(0);

	let currentData = data[index] || {};

	const [viewport, setViewport] = useState({
		latitude: 29.910577,
		longitude: -95.060882,
		zoom: 10,
		width: "90%",
		height: "90%",
	});

	const getWeather = async (units, zipcode) => {
		const resp = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${config.weatherKey}&units=${units}`
		);
		setWeather(resp.data);
	};

	const getData = async () => {
		const resp = await axios.get("data/2013_04_14_merlischachen.kml.json");
		setData(resp.data);
	};

	console.log(`DATA ${data}`);
	console.log(`INDEX ${index}`);
	console.log(`LENGTH ${dataLength}`);

	return (
		<main className="app">
			<Header />
			<Speed data={currentData} />
			<Altitude />
			<MotorTemp />
			<FlightDuration />
			<SpeedGraph />
			<AltitudeGraph />
			<MotorGraph />
			<button
				style={{ fontSize: "3rem" }}
				onClick={(e) => {
					e.preventDefault();
					return index < dataLength - 1 ? setIndex(index + 1) : setIndex(0);
				}}
			>
				CLICK ME
			</button>
			<Map viewport={viewport} setViewport={setViewport} />

			<Weather weather={weather} />
		</main>
	);
}

export default App;

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
	const [weather, setWeather] = useState(null);
	const [data, setData] = useState([]);
	const [viewport, setViewport] = useState({
		latitude: 29.910577,
		longitude: -95.060882,
		zoom: 11,
		width: "90%",
		height: "90%",
	});

	const [index, setIndex] = useState(0);
	let dataLength = data.length;
	let current = data[index];

	const getWeather = async (units, lat, lon) => {
		const resp = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${config.weatherKey}&units=${units}`
		);
		setWeather(resp.data);
	};

	const getData = async () => {
		const resp = await axios.get("data/2013_04_14_merlischachen.kml.json");
		setData(resp.data);
	};

	return (
		<main className="app">
			<button
				style={{ fontSize: "3rem" }}
				onClick={() => {
					index < dataLength - 1 ? setIndex(index + 1) : setIndex(0);
				}}
			>
				Click Me
			</button>
			<Header getWeather={getWeather} getData={getData} data={data} />
			<Speed data={current} />
			<Altitude data={current} />
			<MotorTemp data={current} />
			<FlightDuration data={current} />
			<SpeedGraph />
			<AltitudeGraph />
			<MotorGraph />
			<Map viewport={viewport} setViewport={setViewport} />
			<Weather weather={weather} />
		</main>
	);
}

export default App;

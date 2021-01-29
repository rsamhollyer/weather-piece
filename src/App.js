import "./App.css";
import { Weather } from "./Components/Weather";
import { useState } from "react";

import { config } from "./Config/config";
import axios from "axios";

function App() {
	const [weather, setWeather] = useState(null);
	console.log(weather);

	const getWeather = async (units, zipcode) => {
		const resp = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${config.weatherKey}&units=${units}`
		);
		setWeather(resp.data);
	};

	return (
		<>
			<div className="container">
				<h1>Hi React</h1>
				<button onClick={() => getWeather("imperial", "80138")}>
					Get Weather
				</button>
			</div>
			<Weather weather={weather} />
		</>
	);
}

export default App;

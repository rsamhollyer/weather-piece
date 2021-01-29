import "./App.css";
import { useState } from "react";
// import { getWeather } from "./API/weatherapi";
import axios from "axios";

function App() {
	const [weather, setWeather] = useState(null);
	console.log(weather);

	const getWeather = async () => {
		const resp = await axios.get(
			"https://api.openweathermap.org/data/2.5/weather?zip=77065&appid=fe43392eb547459161fce4da921cbf28&units=imperial"
		);
		setWeather(resp.data);
	};

	return (
		<>
			<div className="container">
				<h1>Hi React</h1>

				<button onClick={getWeather}>Get Weather</button>
			</div>

			<div className="weather">
				{weather ? (
					<div>
						<i className="fas fa-sun"></i>
						<h2>{weather.name}</h2>
						<h3>Current Weather is :{weather.weather[0].main} </h3>
						<h3>Current Temperature is : {weather.main.temp}</h3>
						<h3>Today's Min: {weather.main.temp_min}</h3>
						<h3>Today's Max : {weather.main.temp_max}</h3>
						<h3>Wind : {weather.wind.speed}</h3>
						<h3>Wind Direction : {weather.wind.deg} deg.</h3>
						<h3>Wind Gusts: {weather.wind.gust}</h3>
					</div>
				) : null}
			</div>
		</>
	);
}

export default App;

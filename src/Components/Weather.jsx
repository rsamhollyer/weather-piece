import WeatherIcon from "./WeatherIcon";

export const Weather = (props) => {
	const { weather } = props;
	return (
		<div className="weather-component">
			{weather && (
				<div className="weather-body">
					<div className="weather-name">
						<h2>{weather.name}</h2>
					</div>

					<div className="weather-info">
						<WeatherIcon main={weather.weather[0].main} />
						<div className="current-infor">
							<h3>Current Weather is : {weather.weather[0].main} </h3>
							<h3>Current Temperature is : {weather.main.temp}</h3>
						</div>
					</div>

					<h3>Today's Min: {weather.main.temp_min}</h3>
					<h3>Today's Max : {weather.main.temp_max}</h3>
					<h3>Wind : {weather.wind.speed}</h3>
					<h3>Wind Direction : {weather.wind.deg}°</h3>
					{weather.wind.gust ? (
						<h3>Wind Gusts :{weather.wind.gust}</h3>
					) : (
						<h3>Wind Gusts : No Data</h3>
					)}
				</div>
			)}
		</div>
	);
};

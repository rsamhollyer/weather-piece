import React from "react";

export default function WeatherIcon(props) {
	const { main } = props;

	return (
		<div>
			{
				{
					Thunderstorm: <i className="fas fa-poo-storm"></i>,
					Drizzle: <i className="fas fa-cloud-rain"></i>,
					Rain: <i className="fas fa-cloud-showers-heavy"></i>,
					Snow: <i className="far fa-snowflake"></i>,
					Mist: <i className="fas fa-smog"></i>,
					Smoke: <i className="fas fa-smog"></i>,
					Haze: <i className="fas fa-smog"></i>,
					Dust: <i className="fas fa-smog"></i>,
					Fog: <i className="fas fa-smog"></i>,
					Sand: <i className="fas fa-smog"></i>,
					Ash: <i className="fas fa-smog"></i>,
					Squall: <i className="fas fa-wind"></i>,
					Tornado: <i className="fas fa-exclamation"></i>,
					Clear: <i className="fas fa-sun" style={{ color: "#fffb00" }}></i>,
					Clouds: <i className="fas fa-cloud"></i>,
				}[main]
			}
		</div>
	);
}

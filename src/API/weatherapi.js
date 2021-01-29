import axios from "axios";
import { config } from "./config";

export const getWeather = async (units, zipcode) => {
	const url = "api.openweathermap.org/data/2.5/weather?";
	const resp = axios.get(
		`${url}zip=${zipcode}&units=${units}&appid=fe43392eb547459161fce4da921cbf28`
	);
	setWeather(resp.data);
};

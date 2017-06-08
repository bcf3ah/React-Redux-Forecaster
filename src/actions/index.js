import axios from 'axios';

const API_KEY = '633afad2bbe22922f50ed2969c9669f1';
//const rootURL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName){
	//const url = `${rootURL}&q=${cityName},us`;
	const url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName},us&appid=${API_KEY}`;
	const request = axios.get(url); //returns a promise
	
	return {
		type: FETCH_WEATHER,
		payload: request
	}
}


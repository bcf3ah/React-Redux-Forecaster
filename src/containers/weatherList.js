import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GMap from '../components/gmap';


class WeatherList extends Component {
	renderWeather(cityData){
		const name = cityData.city.name;
		const temp = cityData.list.map(weather => weather.main.temp);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		const {lon, lat} = cityData.city.coord;

		return(
			<tr key={name}>
				<td><GMap lon={lon} lat={lat} /></td>
				<td>
					<Chart data={temp} color='blue' units='K'/>
				</td>
				<td>
					<Chart data={pressure} color='green' units='HPa'/>
				</td>
				<td>
					<Chart data={humidity} color='black' units='%'/>
				</td>
			</tr>
		);
	}

	render(){
		return(
			<table className='table table-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temp</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({weather}){
	return {weather}; //from the Root Reducer!!! same as weather: state.weather and passing in state
	//weather is now available as this.props.weather
}

export default connect(mapStateToProps)(WeatherList);

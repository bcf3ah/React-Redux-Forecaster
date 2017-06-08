import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){
	//console.log(action);
	switch (action.type) {
		case FETCH_WEATHER:	
			return [action.payload.data, ...state]; //same as return return state.concat(action.payload.data); for ES6
	}
	return state;
}
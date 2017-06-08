import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function average(data){
	//console.log(data);
	return _.round(_.sum(data)/data.length);
}

export default (props) => {
	return(
		<Sparklines svgHeight={100} svgWidth={160} data={props.data}>
			<SparklinesLine color={props.color} />
			<SparklinesReferenceLine type='avg' />
			<div>
				{average(props.data)} - {props.units}
			</div>
		</Sparklines>
	);
};
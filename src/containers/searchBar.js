import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state={term: ''};
	}

	handleChange(e){
		this.setState({term: e.target.value});
	}

	onFormSubmit(e){
		e.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({term: ''});
	}

	render(){
		return(
			<div>
				<form onSubmit={this.onFormSubmit.bind(this)} className='input-group'>
					<input className='form-control' placeholder='Get the forecast!' value={this.state.term} onChange={this.handleChange.bind(this)}/>
					<span className='input-group-btn'>
						<button type='submit' className='btn btn-primary'>Submit</button>
					</span>
				</form>
				<h1>{this.state.term}</h1>
			</div>
		);
	}
}

//THIS CONNECTS THIS CONTAINER TO THE ACTION CREATOR. THE OHTER ONE (MAPSTATETOPROPS) CONNECTS IT TO THE APP STATE
function mapDispatchToProps(dispatch){
	//connects action creator, makes sure the action flows through all reducers
	//have access to this.props.fetchWeather now
	return bindActionCreators({fetchWeather}, dispatch);
}

//first argument is null because not connecting this component to the state. Connecting it to the action creator only.
export default connect(null, mapDispatchToProps)(SearchBar);
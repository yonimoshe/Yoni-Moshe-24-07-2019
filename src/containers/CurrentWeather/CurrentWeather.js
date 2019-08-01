import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrentWeatherOutput from '../../components/CurrentWeatherOutput/CurrentWeatherOutput';

class CurrentWeather extends Component {

  render() {
     return (
         <CurrentWeatherOutput
                iconValue={this.props.icon}
                tempValue={this.props.temp}
                cityValue={this.props.city}/>
     );
  }
}

const mapStateToProps = state => {
  return {
      icon: state.current.weatherIcon,
      temp: state.current.temperature,
      city: state.current.city
  }
};

export default connect(mapStateToProps)(CurrentWeather);

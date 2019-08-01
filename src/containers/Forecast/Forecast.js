import React, { Component } from 'react';
import { connect } from 'react-redux';
import ForecastOutput from '../../components/ForecastOutput/ForecastOutput';

class Forecast extends Component {

  render() {
    if (this.props.days.length !== 0) {
         var nextDays = [];
         for (var i = 0; i < 5; i++) {
         nextDays.push(<ForecastOutput
                        dayValue={this.props.days[i].Date.slice(5,10)}
                        minValue={this.props.days[i].Temperature.Minimum.Value}
                        maxValue={this.props.days[i].Temperature.Maximum.Value}/>)
         }
         return nextDays;
    }else{
      return (
        <ForecastOutput
              dayValue={'not found'}/>
      );
    }
  }
}

const mapStateToProps = state => {
    return {
        days: state.forecast.days
    }
};

export default connect(mapStateToProps)(Forecast);

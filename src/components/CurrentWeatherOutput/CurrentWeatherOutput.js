import React from 'react';

const currentWeatherOutput = (props) =>{

      return (
            <div className="col-2">
              <img src={props.iconValue} alt="icon" />
              <h5>{props.tempValue}</h5>
              <h5>{props.cityValue}</h5>
            </div>
      );
}

export default currentWeatherOutput;

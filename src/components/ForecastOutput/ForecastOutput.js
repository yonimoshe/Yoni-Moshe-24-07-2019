import React from 'react';

const forecastOutput = (props) =>{

      return (
            <div className="col-12 col-md-2 justify-content-center">
              <div className="card bg-light mb-3 justify-content-center">
                <h6 className="card-header text-center">{props.dayValue}</h6>
                  <div className="card-body">
                   <p className="card-text text-center">Max: {props.maxValue} C</p>
                   <p className="card-text text-center">Min: {props.minValue} C</p>
                </div>
              </div>
            </div>
      );
}

export default forecastOutput;

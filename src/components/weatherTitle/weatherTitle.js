import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

const weatherTitle = (props) =>{
      return (
            <div className="col-12 my-4 text-center">
                   <h1>{props.weatherText}</h1>
            </div>
      );
}
const mapStateToProps = state => {
    return {
        weatherText: state.current.weatherText
    }
};

export default connect(mapStateToProps)(weatherTitle);

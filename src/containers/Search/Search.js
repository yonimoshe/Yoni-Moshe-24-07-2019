import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';
import Autosuggest from 'react-autosuggest';
import themeable from 'react-themeable';
import './search.css';

class Search extends Component  {
  state = {
        value: ''
      }

  onChange = (event, { newValue }) => {
  this.setState({
    value: newValue
  });
};

  onSuggestionsFetchRequested = ({ value }) => {
  this.props.onInputChange(value)
};

 render () {
   const { value } = this.state;

   const {autoSuggestion} = this.props;

   const getSuggestionValue = (suggestion) => {
     this.props.onSearchCurrent(suggestion.name,suggestion.key)
     this.props.onSearchForcast(suggestion.key)
     return suggestion.name
   }

   const renderSuggestion = suggestion => (
     <div>
       {suggestion.name}
     </div>
   );

   const inputProps = {
   placeholder: 'Search City',
   value,
   onChange: this.onChange
   };
    return (
      <div className="search-cont">
          <Autosuggest
            suggestions={autoSuggestion}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
      </div>
    );
 }
}

const mapStateToProps = state => {
    return {
        autoSuggestion: state.search.autoSuggestion
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInputChange: (char) => dispatch(actionCreators.getSuggestions(char)),
        onSearchCurrent: (cityName,key) => dispatch(actionCreators.getCurretWeather(cityName,key)),
        onSearchForcast: (key) => dispatch(actionCreators.getForecast(key))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

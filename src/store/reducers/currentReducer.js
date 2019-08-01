import * as actionTypes from '../actions/actions';

const initialState = {
  weatherIcon: '',
  temperature: '',
  weatherText: '',
  city: 'Tel-Aviv',
  key: '215854'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CURRENT:
      return {
        ...state,
          weatherIcon: action.weatherIcon,
          temperature: action.temperature + ' C',
          weatherText: action.weatherText,
          city: action.city,
          key: action.key
      }
  }
  return state;
};

export default reducer;

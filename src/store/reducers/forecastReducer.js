import * as actionTypes from '../actions/actions';

const initialState = {
  days: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FORECAST:
      return {
        ...state,
        days: action.days
      }
  }
  return state;
};

export default reducer;

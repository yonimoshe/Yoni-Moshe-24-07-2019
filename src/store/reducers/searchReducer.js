import * as actionTypes from '../actions/actions';

const initialState = {
  autoSuggestion: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SUGGESTIONS:
      return {
        ...state,
        autoSuggestion: action.autoSuggestion
      }
  }
  return state;
};

export default reducer;

import {ADD_TODO} from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  return state.concat(action.text);
}

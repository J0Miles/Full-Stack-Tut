import { CREATE_MESSAGE } from '../actions/types';

const intitalState = {}

export default function(state = intitalState, action) {
  switch(action.type){
    case CREATE_MESSAGE:
    return (state = action.payload);
    default:
    return state;
  }
}

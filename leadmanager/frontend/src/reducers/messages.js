import { GET_MESSAGES, CREATE_MESSAGE } from '../actions/types';

const intitalState = {}

export default function(state = intitalState, action) {
  switch(action.type){
    case GET_MESSAGES:
    return action.payload;
    case CREATE_MESSAGE:
    return (state = action.payload);
    default:
    return state;
  }
}

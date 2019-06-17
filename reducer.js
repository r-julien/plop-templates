import { SOME_METHOD } from '../actions/{{pascalCase name}}';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SOME_METHOD:
      return INITIAL_STATE;
    default:
      return state;
  }
};

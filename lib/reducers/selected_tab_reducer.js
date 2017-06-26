import { RECEIVE_SELECTED_TAB } from '../actions/tab_actions';

const SelectedTabReducer = (state = 0, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SELECTED_TAB:
      return action.tabId;
    default:
      return state;
  }
};

export default SelectedTabReducer;

import { combineReducers } from 'redux';
import TabsReducer from './tabs_reducer';

const RootReducer = combineReducers({
  tabs: TabsReducer
});

export default RootReducer;

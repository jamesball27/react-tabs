import { combineReducers } from 'redux';
import TabsReducer from './tabs_reducer';
import SelectedTabReducer from './selected_tab_reducer';

const RootReducer = combineReducers({
  tabs: TabsReducer,
  selectedTab: SelectedTabReducer
});

export default RootReducer;

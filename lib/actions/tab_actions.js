export const RECEIVE_SELECTED_TAB = 'RECEIVE_TAB';

export const receiveSelectedTab = tabId => ({
  type: RECEIVE_SELECTED_TAB,
  tabId
});

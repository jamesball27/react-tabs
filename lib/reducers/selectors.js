export const arrayAllTabs = ({ tabs }) => {
  return Object.keys(tabs).map(tabId => tabs[tabId]);
};

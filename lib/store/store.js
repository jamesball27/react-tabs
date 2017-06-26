// {
//   tabs: {
//     0: {
//       header: "lorem",
//       content: "ipsum",
//       img: "test"
//     },
//     1: {
//       header: "lorem",
//       content: "ipsum",
//       img: null
//     },
//     2: {
//       header: "lorem",
//       content: "ipsum",
//       img: null
//     }
//   }
// }

import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
// import logger from 'redux-logger';

const configureStore = () => {
  return createStore(RootReducer);
};

export default configureStore;

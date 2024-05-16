import { createStore } from 'redux';
import rootReducer from './reducers'; // Create rootReducer

const store = createStore(rootReducer);

export default store;

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import api from './middleware/api';

const store = createStore(rootReducer, applyMiddleware(api));

export default store;
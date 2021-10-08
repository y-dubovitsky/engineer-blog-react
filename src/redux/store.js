import { createStore } from "redux";
import { applyMiddleware } from "redux";
import rootReducer from './reducers';
import api from "./middleware/api";

const store = createStore(rootReducer, applyMiddleware(api));

export default store;

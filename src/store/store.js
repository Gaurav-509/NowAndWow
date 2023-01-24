import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { logger } from 'redux-logger';
import thunk from "redux-thunk";
import { userReducer } from "../reducers/user-reducers.js";
import { composeWithDevTools } from "@redux-devtools/extension";

import { categoriesReducers } from "../reducers/categories.reducers.js";
import { CartReducer } from "../reducers/cart.reducers.js";

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user']
}



const reducers = combineReducers({
  currentUser: userReducer,
  categories: categoriesReducers,
  cart: CartReducer
});

const persistedReducer = persistReducer(persistConfig, reducers)

const middleWares = [logger, thunk];

const composeEnhancers = composeWithDevTools(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const persister = persistStore(store)

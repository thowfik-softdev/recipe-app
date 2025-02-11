import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { Reducer } from "./Reducer";

const rootReducer = combineReducers({
  recipeData: Reducer
});

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const Store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(Store);
export default Store;

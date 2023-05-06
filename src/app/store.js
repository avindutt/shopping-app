import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '../features/mainSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//making the redux data persistent
//create a persitconfig object and pass it to create persist reducer alongwith the existing reducer, if any.
// In case there would have been multiple pre exisiting reducer functions, combine them and pass it thereafter to persistReducer
const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, mainReducer);

//create a store assigning persistedReducer as the main reducer function
export const store = configureStore({
  reducer: {
    main: persistedReducer
  },
});

export const persistor = persistStore(store);
//wrap the app component inside PersistGate tag and pass persister as a prop to it
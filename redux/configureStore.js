import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { excursiones } from './excursiones';
import { comentarios } from './comentarios';
import { cabeceras } from './cabeceras';
import { actividades } from './actividades';
import { favoritos } from './favoritos';
import {AsyncStorage} from 'react-native';
import { persistStore, persistReducer } from 'redux-persist'


const persistConfig ={
  key:'root',
  storage:AsyncStorage,
}

let rootReducer=combineReducers({excursiones, comentarios, cabeceras, actividades, favoritos});
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const ConfigureStore = () => {
    const store = createStore(
        persistedReducer,applyMiddleware(thunk)
        //applyMiddleware(thunk, logger)
    );
    let persistor = persistStore(store)
    return {store, persistor};
}

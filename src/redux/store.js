import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk';


const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);

const store = createStore(persistedReducer, enhancer)
const persistor = persistStore(store)
export { store, persistor }



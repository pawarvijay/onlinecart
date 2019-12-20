import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

if (typeof window === 'undefined') {
    global.window = {}
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)  ));

// const store = createStore(rootReducer, applyMiddleware(thunk));
export default store
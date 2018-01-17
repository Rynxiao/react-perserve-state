import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';

const loggerMiddleware = createLogger({ collapsed: true });
function reduxStore(initialState) {

    const middlewares = [loggerMiddleware];
    const createStoreWithMiddleware = compose(applyMiddleware(...middlewares));
    const store = createStoreWithMiddleware(createStore)(
        combineReducers({
            ...reducers
        }),
        initialState
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');  // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}

export default reduxStore;
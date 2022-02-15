// Imports: Dependencies
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// Imports: Redux Root Reducer
import rootReducer from './src/reducers';
// Imports: Redux Root Saga
import rootSaga from './src/sagas';
// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();
// Redux: Store
const Store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
// Exports
export { Store };

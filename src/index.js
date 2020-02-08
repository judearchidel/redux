import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers , applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducer/counter';
import reportReducer from './store/reducer/report';
import thunk from 'redux-thunk';


const rootReducer = combineReducers ({
    ctr: counterReducer,
    rst: reportReducer
})

const logger = store =>{
    return next => {
        return action =>{
            console.log('Middileware ', action);
            const result = next(action);
            console.log('Middeleware next', store.getState())
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(logger,thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

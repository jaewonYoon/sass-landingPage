import React from 'react';
import Head from 'next/head';
import {Provider} from 'react-redux'; 
import withRedux from 'next-redux-wrapper';
import rootReducer from '../reducers'; 
import {createStore, compose, applyMiddleware} from 'redux'; 
import createSagaMiddleware from 'redux-saga';

import AppLayout from '../components/appLayout'; 
const App = ({Component, store}) => {
    return(
        <>
            <Provider store={store}>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet"/>
                </Head>
                <AppLayout>
                    <Component />
                </AppLayout>
            </Provider> 
        </>
    )
}
const configureStore = (initialState, options) => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware]; 
    const enhancer = process.env.NODE_ENV === 'production' 
        ? compose(applyMiddleware(...middlewares)) 
        : compose(applyMiddleware(...middlewares),
        !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
        );
    const store = createStore(rootReducer, initialState,enhancer);
    return store; 
}
export default withRedux(configureStore)(App);
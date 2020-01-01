import {all, fork} from 'redux-saga/effects';
import axios from 'axios';
import user from './user';
import cart from './cart';

axios.defaults.baseURL = 'http://localhost:3065/api';

export default function * rootSaga() {
    yield all([
        fork(user),
        // fork(cart)
    ]);
};


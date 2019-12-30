import {all, call, fork, put, takeEvery, delay} from 'redux-saga/effects';
import axios from 'axios';
import {
    LOAD_USER_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from '../reducers/user';

function logInAPI(loginData) {
    // return axios.post('/user/login', loginData,{
    //     withCredentials: true
    // });
}

function * login(action){
    try{
        // const result = yield call(logInAPI, action.data);
        delay(3000); 
        yield put({
            type: LOG_IN_SUCCESS,
            // data: result.data,
        }); 
    } catch(e) {
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE
        })
    }
}

function* watchLogIn(){
    yield takeEvery(LOG_IN_REQUEST, login);
}

function signUpAPI(signUpData){
    return axios.post('/user', signUpData);
}

function* signUp(action){
    try{
        delay(3000); 
        // yield call(signUpAPI, action.data);
        yield put({
            type: SIGN_UP_SUCCESS
        });
    } catch(e){
        console.error(e);
        yield put({
            type: SIGN_UP_FAILURE,
            error: e 
        }); 
    }
}

function* watchSignUp(){
    yield takeEvery(SIGN_UP_REQUEST, signUp); 
}

function logOutAPI(){
    return axios.post('/user/logout', {}, {
        withCredentials: true,
    });
}

function* logOut() {
    try {
        yield call(logOutAPI);
        yield put({
            type: LOG_OUT_SUCCESS,
        })
    } catch(e){
        console.error(e);
        yield put({
            type: LOG_OUT_FAILURE,
            error: e 
        })
    }
}
function * watchLogOut() {
    yield takeEvery(LOG_OUT_REQUEST, logOut); 
}
export default function* userSaga() {
    yield all([
        fork(watchSignUp),
        fork(watchLogIn),
        fork(watchLogOut) 
    ])
}
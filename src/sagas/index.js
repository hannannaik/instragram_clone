import {all, takeLatest} from 'redux-saga/effects';
import {GET_USER_DATA, LOGIN} from '../actions/auth/types';
import {handleLogin, handleUserData} from './authSaga';

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, handleLogin),
    takeLatest(GET_USER_DATA, handleUserData),
  ]);
}

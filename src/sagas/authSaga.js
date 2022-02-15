import {put, call, takeLatest, all} from 'redux-saga/effects';
import {login, userData} from '../services/jwt';

export function* handleLogin(action) {
  try {
    const {email, password, device_name} = action.payload;
    const response = yield call(login, email, password, device_name);
    console.log('====================================');
    console.log('response in saga', response);
    console.log('====================================');
    const {callback} = action.payload;
    if (callback) {
      yield call(callback);
    }
  } catch (e) {
    console.log('error in login', e);
    const {callback} = action.payload;
    if (callback) {
      yield call(callback, e);
    }
  }
}
export function* handleUserData() {
  console.log('====================================');
  console.log('in get user saga');
  console.log('====================================');
  try {
    const response = yield call(userData);
    console.log('====================================');
    console.log('response', response);
    console.log('====================================');
  } catch (e) {
    console.log('in saga failed', e);
  }
}

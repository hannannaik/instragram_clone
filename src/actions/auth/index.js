import {LOGIN, GET_USER_DATA} from './types';

export const loginAction = data => {
  console.log('====================================');
  console.log('data in action', data);
  console.log('====================================');
  return {
    type: LOGIN,
    payload: {
      email: data.email,
      password: data.password,
      device_name: data.device_name,
      callback: data.callback,
    },
  };
};

export const getUserData = () => {
  return {
    type: GET_USER_DATA,
  };
};

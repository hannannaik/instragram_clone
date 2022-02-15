import {GET_USER_DATA, LOGIN} from '../actions/auth/types';

const initialState = {
  fetching: false,
  success: false,
  error: null,
  loggedIn: false,
  data: [],
  userData: {},
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {...state, ...action.payload};
    case GET_USER_DATA:
      return {...state, userData};
    // case AUTH.REGISTER:
    // case AUTH.VERIFY_OTP:
    // case AUTH.RESEND_OTP:
    // case AUTH.UPDATE_PROFILE:
    // case AUTH.UPDATE_PASSWORD:
    // case AUTH.UPDATE_SUBSCRIPTION_FEE:
    // case AUTH.UPLOAD_IMAGE:
    // case AUTH.UPLOAD_COVER:
    // case AUTH.FORGOT_PASSWORD:
    // case AUTH.REFRESH_TOKEN:
    // case AUTH.ME:
    // case AUTH.REQUEST_FOLLOWERS:
    // case AUTH.REQUEST_FOLLOWINGS:
    // case AUTH.UPDATE_TWO_FACTOR_AUTHENTICATION:
    // case AUTH.GET_SESSIONS:
    // case AUTH.EXPIRE_ALL_SESSIONS:
    // case AUTH.LOGOUT:
    // case AUTH.SUCCESS:
    // case AUTH.FAILURE:
    // case AUTH.GET_COUNTRIES:

    default:
      return state;
  }
}

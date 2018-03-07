import { ACTION_TYPES } from '../constants/action-types';

const initialState = {
  loaded: false,
  apiStatus: null
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.APP_LOAD:
      return { ...state, loaded: true };
    case ACTION_TYPES.API_STATUS_CHECK_SUCCESS:
      return { ...state, apiStatus: action.status }
    case ACTION_TYPES.API_STATUS_CHECK_FAILURE:
      return { ...state, apiStatus: "PROBLEMO" }
    default:
      return state;
  }
}
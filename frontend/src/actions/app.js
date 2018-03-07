import { ACTION_TYPES } from '../constants/action-types';
import ApiClient from '../shared/api-client';

export function loadApp() {
  return {
    type: ACTION_TYPES.APP_LOAD,
  };
}

function ApiSuccess(status) {
  return {
    type: ACTION_TYPES.STATUS_SUCCESS,
    status
  }
}

function ApiFailure(err) {
  return {
    type: ACTION_TYPES.STATUS_FAILURE,
    err
  }
}

const STATUS_URI = "/";

export function checkApiStatus() {
  return function(dispatch) {
    return ApiClient.get(STATUS_URI)
      .then((response) => {
        dispatch(ApiSuccess(response.body.status));
      },
      (error) => {
        dispatch(ApiFailure(error));
      });
  }
}
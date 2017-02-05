import request from 'superagent';

import { API_ROOT } from 'constants/API';
import * as types from 'constants/actionTypes/PostActionTypes';

const requestPost = (id) => ({
  type: types.FETCH_POST_REQUEST,
  id
});

const errorPost = () => ({
  type: types.FETCH_POST_ERROR
});

const receivePost = (response) => ({
  type: types.FETCH_POST_SUCCESS,
  response
});

export function fetchPost(id) {
  return (dispatch) => {
    dispatch(requestPost(id));

    return request
      .get(`${API_ROOT}/posts/${id}`)
      .end((err, response) => {
        err ? dispatch(errorPost()) : dispatch(receivePost(response.body));
      });
  };
}

import { API_CALL } from 'middleware/API';

import * as types from 'constants/actionTypes/PostsActionTypes';

export function fetchPosts() {
  return {
    [API_CALL]: {
      endpoint: '/',
      query: { },
      method: 'GET',
      types: [
        types.FETCH_POSTS_REQUEST,
        types.FETCH_POSTS_SUCCESS,
        types.FETCH_POSTS_ERROR
      ]
    }
  };
}

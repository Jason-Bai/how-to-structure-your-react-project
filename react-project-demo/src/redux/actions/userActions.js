export const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED';
export const USER_FETCH_SUCCESS   = 'USER_FETCH_SUCCESS';
export const USER_FETCH_FAILED    = 'USER_FETCH_FAILED';


// fetch user action creator
export function fetchUser(params) {
  return {
    type: USER_FETCH_REQUESTED,
    payload: {
      params,
    },
  };
}

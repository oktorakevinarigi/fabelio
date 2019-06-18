import * as types from '../ActionType'

export function getdata(){
    return (dispatch, getState) => {
        dispatch({ type: types.APP_GET_DATA });
      }
}

export function handleState(property, value) {
  return (dispatch, getState) => {
    dispatch({ type: types.APP_HANDLE_STATE, value: value, field: property });
  }
}

export const actions = {
    getdata,
    handleState
}

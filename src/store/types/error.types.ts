export const ADD_ERROR = "ADD_ERROR";
interface AddErrorAction {
  type: typeof ADD_ERROR;
  payload: string;
}

export const CLEAR_ERROR = "CLEAR_ERROR";
interface CLearErrorAction {
  type: typeof CLEAR_ERROR;
  payload: number; // error index
}

export type ErrorActionTypes = AddErrorAction | CLearErrorAction;

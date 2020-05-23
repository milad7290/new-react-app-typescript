import { ErrorActionTypes, ADD_ERROR, CLEAR_ERROR } from "../types/error.types";

export function addError(newError: string): ErrorActionTypes {
  return {
    type: ADD_ERROR,
    payload: newError,
  };
}

export function clearError(idx: number): ErrorActionTypes {
  return {
    type: CLEAR_ERROR,
    payload: idx,
  };
}

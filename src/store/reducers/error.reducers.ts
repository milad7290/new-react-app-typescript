import { ErrorActionTypes, ADD_ERROR, CLEAR_ERROR } from "../types/error.types";

export function allErrorsReducer(
  state: string[] = [],
  action: ErrorActionTypes
) {
  switch (action.type) {
    case ADD_ERROR:
      return [...state, action.payload];
    case CLEAR_ERROR:
      return state.filter((message, i) => i !== action.payload);
    default:
      return state;
  }
}

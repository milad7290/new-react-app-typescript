import { FetchResultType } from "./fetch-result-type";

/**
 * handle result of every http-request in an standard way
 *
 * @param {*} { result }
 * @returns {{}} standardized http-response-body
 */
export function resultHandler({ result }: any) {
  const { message } = result || {};

  switch (true) {
    case "message" in result || "stack" in result:
      return {
        result: null,
        error: message,
        errorCode: null,
        type: FetchResultType.FetchError,
      };
    // case !isSuccess:
    //   return {
    //     result: null,
    //     error: error.displayMessage,
    //     errorCode: error.errorCode || null,
    //     type: FetchResultType.ServerError,
    //   };
    default:
      return {
        result,
        error: null,
        errorCode: null,
        type: FetchResultType.Success,
      };
  }
}

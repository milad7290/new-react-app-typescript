import axios from "axios";

export function HttpProvider({
  base = "https://jsonplaceholder.typicode.com",
  url,
  data,
  headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    // Authorization: `Bearer ${getAccessToken()}`,
    // ClientType: "Web",
  },
  method = HttpMethod.GET,
}: HttpProviderType) {
  const fullUrl = url.startsWith("/") ? `${base}${url}` : `${base}/${url}`;

  const options: HttpProviderOptionType = {
    method,
    headers,
    data,
  };

  return new Promise(async (resolve) => {
    try {
      const result = await axios(fullUrl, options);
      const response = await result.data;

      return resolve(resultHandler({ result: response }));
    } catch (error) {
      console.log(`Failed response for ${url}: ${error}`);

      return resolve(resultHandler({ result: error }));
    }
  });
}

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

export interface HttpProviderType {
  base?: string;
  url: string;
  data?: any;
  headers?: any;
  method?: string;
}

export interface HttpProviderOptionType {
  data: any;
  headers: any;
  method: any;
}

export const FetchResultType = {
  ServerError: "server_error",
  FetchError: "fetch_error",
  Success: "success",
};

export const HttpMethod = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  DELETE: "DELETE",
};

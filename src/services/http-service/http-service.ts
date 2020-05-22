import axios from "axios";
import { HttpServiceOptionType } from "../../types/http-service-type/http-service-option-type";
import { HttpServiceType } from "../../types/http-service-type/http-service-type";
import { HttpMethod } from "./http-method";
import { resultHandler } from "./result-handler";

export function HttpService({
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
}: HttpServiceType) {
  const fullUrl = url.startsWith("/") ? `${base}${url}` : `${base}/${url}`;

  const options: HttpServiceOptionType = {
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

import { HttpService } from "../providers/http-service/http-service";

export const postsList = () => {
  return HttpService({ url: "/posts" });
};

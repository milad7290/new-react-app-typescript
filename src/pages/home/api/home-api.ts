import { HttpService } from "../../../services/http-service/http-service";

const postsList = () => {
  return HttpService({ url: "/posts" });
};

export { postsList };

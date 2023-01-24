import APIRequest from "../utils/config/axios.config";

export function getRandomJoke() {
  return APIRequest.get("/random", {
    validateStatus: function (status) {
      return status < 500; // Resolve only if the status code is less than 500
    },
  });
}
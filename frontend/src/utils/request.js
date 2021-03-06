import axios from "axios"
export default function fetchBackend(method, url, data) {
  if (typeof data == "object") {
    return axios({
      url: process.env.BACKEND + url,
      method,
      data,
      withCredentials: true,
    })
      .then(a => {
        return a
      })
      .catch(e => {
        if (!e.response) {
          return {
            isError: true,
            data: {
              error: "NETWORK ERROR",
            },
          }
        }
        e.response.isError = data
        return e.response
      })
  }
}

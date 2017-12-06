export default class LikeApi {
  static createPoem(params) {
    return fetch("http://localhost:3000/api/v1/likes", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(params)
    })
  }
}

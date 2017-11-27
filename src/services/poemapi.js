export default class PoemApi {
  static createPoem(params) {
    return fetch("http://localhost:3000/api/v1/poems", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
}

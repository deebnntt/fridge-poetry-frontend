export default class PoemApi {
  static createPoem(params) {
    return fetch("http://localhost:3000/api/v1/poems", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(params)
    })
  }


  static fetchPoem(id) {
    const poemId = id
    return fetch(
      `http://localhost:3000/api/v1/poems/${poemId}`)
      .then(res => res.json())
    }

  static fetchPoems() {
    return fetch(
      'http://localhost:3000/api/v1/poems')
      .then(res => res.json())
    }

}

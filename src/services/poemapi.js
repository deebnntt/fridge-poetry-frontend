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

  static updatePoem(id, data) {
    const poemId = id
    return fetch(
      `http://localhost:3000/api/v1/poems/${poemId}`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
    }

    static deletePoem(id) {
      const poemId = id
      let obj = { delete: 'hi' }
      return fetch(
        `http://localhost:3000/api/v1/poems/${poemId}`,{
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(obj)
        })
      }

  }

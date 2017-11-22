export function fetchWords() {
  return fetch(
		'http://localhost:3000/api/v1/words')
    .then(res => res.json());
}

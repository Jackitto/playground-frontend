export default class API {
  static fetcher(url: string) {
    return fetch(url).then((res) => res.json())
  }
}
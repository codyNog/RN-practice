export class httpClient {
  static get(url: string, config: RequestInit) {
    return fetch(url, {...config, method: 'GET'});
  }

  static post(url: string, config: RequestInit) {
    return fetch(url, {...config, method: 'POST'});
  }

  static put(url: string, config: RequestInit) {
    return fetch(url, {...config, method: 'PUT'});
  }
}

import request from 'superagent';
import { baseApiUri } from '../constants/config';

class ApiClient {
  constructor(baseUri) {
    this.baseUri = baseUri;
  }

  get(path, headers = {}, params = {}) {
    return this.sendRequest('GET', path, params);
  }

  post(path, headers = {}, body = {}) {
    return this.sendRequest('POST', path, body);
  }

  delete(path, headers = {}, params = {}) {
    return this.sendRequest('DELETE', path, params);
  }

  patch(path, headers = {}, body = {}) {
    return this.sendRequest('PATCH', path, body);
  }

  requestUrl(path) {
    return `${this.baseUri}/${path}`;
  }

  sendRequest(method, path, headers = {}, params = {}) {
    return request(method, this.requestUrl(path), params).set(headers);
  }
}

export default new ApiClient(baseApiUri);
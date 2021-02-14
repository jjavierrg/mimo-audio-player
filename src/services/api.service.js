import Conf from '../config/app.conf.js'

export default class ApiService {
  async getAsync(url, params) {
    params = !params ? '' : `&${params}`
    const response = await fetch(`${Conf.apiUrl}${url}?client_id=${Conf.clientId}${params}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    if (response.status !== 200) {
      throw `error: ${response.status}`
    }

    return response.json()
  }
}

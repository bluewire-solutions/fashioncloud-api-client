const axios = require('axios').default

class FashionCloud {
  constructor (config) {
    this.token = config.token
    this.baseURL = 'https://api.fashion.cloud/v2/'
    this.axios = axios.create({
      baseURL: this.baseURL,
      headers: {
        Accept: 'application/json',
        'Accept-Encoding': 'Gzip, deflate'
      }
    })
  }

  fcKeys (key) {
    switch (key) {
      case 'ageGroup': {
        return [
          'adults',
          'teens',
          'kids',
          'babies',
          'unknown'
        ]
      }
      default: {
        return null
      }
    }
  }

  async getRequest (endpoint, params = {}) {
    try {
      params.token = this.token
      const response = await this.axios.get('/' + endpoint, { params: params })
      return response
    } catch (error) {

    }
  }

  async listBrands (params) {
    try {
      const response = await this.getRequest('brands', params)

      if (response.status === 200) {
        return response.data
      }
      return response
    } catch (error) {

    }
  }

  async listProducts (params) {
    try {
      const response = await this.getRequest('products', params)

      if (response.status === 200) {
        return response.data
      }
      return response
    } catch (error) {

    }
  }

  getImageUrl (id) {
    return 'https://api.fashion.cloud/v2/products/media/images/' + id + '?token=' + this.token + '&px=1024&watermark=false&minAcceptableSize=1024'
  }
}

module.exports = FashionCloud

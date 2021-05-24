# fashioncloud-api-client

## Quick Start

```
npm install --save fashioncloud-api-client
```

```javascript
const FashionCloud = require('fashioncloud-api-client')

const fashionCloud = new FashionCloud({ 
  token: process.env.FASHIONCLOUD_TOKEN 
})

(async () => {
  // List Brands
  // refer to https://fashioncloudv2.docs.apiary.io/#reference/0/brands-collection/list-brands
  const brands = await fashionCloud.listBrands(params)

  // List Products
  // refer to https://fashioncloudv2.docs.apiary.io/#reference/0/brands-collection/list-products
  const products = await fashionCloud.listProducts(params)

  // Get Image URL
  const url = fashionCloud.getImageUrl(id)
})()

```


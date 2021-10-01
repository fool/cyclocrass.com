var axios = require('axios')

axios.get('https://site-api.datocms.com/site?include=item_types%2C')
      .then(function (res) {
          console.log(res);
          // ... do something with the response
      })
      .catch(function (error) {
          console.log(error);
      });

var axios = require('axios')

axios.get('https://github-bat.v7apps.com/Canada/vuse.com/')
      .then(function (res) {
          console.log(res);
          // ... do something with the response
      })
      .catch(function (error) {
          console.log(error);
      });

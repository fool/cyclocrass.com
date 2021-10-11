var axios = require('axios')

axios.get('https://en.wikipedia.org/wiki/List_of_Masters_Tournament_champions')
      .then(function (res) {
          console.log(res);
          // ... do something with the response
      })
      .catch(function (error) {
          console.log(error);
      });

var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=681976b89b72b4822e2e10c14c4af472&units=metric';
//681976b89b72b4822e2e10c14c4af472
module.exports = {
  getTemp:function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl).then(function (res) {
      //debugger;
      if (res.data.cod && res.data.message) {
          //debugger;
        throw new Error(res.data);
      } else {
        //debugger;
        return res.data;
        //return an obj with multiple data
        //use es6 destructurng.S
      }
    }, function (res) {
      //debugger;
      if (res.data.cod && res.data.message) {
          //debugger;
        throw new Error(res.data);
        }
      //debugger;
    });
  }
  }

//   if (res.data.cod && res.data.message) {
//       debugger;
//     throw new Error(res.data);
//   } else {
//     return res.data.main.temp;
//     //return an obj with multiple data
//     //use es6 destructurng.S
//   }
// }, function (res) {
//   throw new Error(res.data);
// });
// }
// }

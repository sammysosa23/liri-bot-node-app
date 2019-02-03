var fs = require("fs");

var axios = require("axios");


var moment = require("moment");

const concertThis = (args) => {
  console.log("searching bands in town...");
  axios.get(`https://rest.bandsintown.com/artists/${args}/events?app_id=codingbootcamp`)
    .then(
      res => {
        let artist = res.data[0].lineup.join(" and ");
        let venue = res.data[0].venue.name;
        let city = res.data[0].venue.city;
        let region = res.data[0].venue.region;
        let country = res.data[0].venue.country;
        let date = moment(res.data[0].datetime.split("T"), "YYYY-MM-DDHH:mm:ss").format("MM/DD/YYYY");

        console.log(`${artist} is playing at `)
      }
    )
}


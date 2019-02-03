var fs = require('fs');
var axios = require("axios");
var moment = require("moment");

function movieThis() {
  console.log(`\n - - - - -\n\nSEARCHING FOR..."${userQuery}"`);
  if (!userQuery) {
    userQuery = "mr nobody";
  };
  // REQUEST USING OMDB API
  request("http://www.omdbapi.com/?t=" + userQuery + "&apikey=86fe999c", function (error, response, body) {
    let userMovie = JSON.parse(body);

    // BECAUSE THE ROTTEN TOMATOES RATING WAS NESTED IT WAS NECESSARY TO CAPTURE ITS VALUES IN AN ARRAY TO CREATE A PATH
    let ratingsArr = userMovie.Ratings;
    if (ratingsArr.length > 2) { }

    if (!error && response.statusCode === 200) {
      console.log(`\nBA DA BOP!  That's for you...\n\nTitle: ${userMovie.Title}\nCast: ${userMovie.Actors}\nReleased: ${userMovie.Year}\nIMDb Rating: ${userMovie.imdbRating}\nRotten Tomatoes Rating: ${userMovie.Ratings[1].Value}\nCountry: ${userMovie.Country}\nLanguage: ${userMovie.Language}\nPlot: ${userMovie.Plot}\n\n- - - - -`)
    } else {
      return console.log("Movie able to be found. Error:" + error)
    };
  })
};


module.exports = movie
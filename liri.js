// // REQUIRE DOTENV FILE
require("dotenv").config();

// // REQUIRE KEYS.JS FILE
var keys = require("./keys");
var fs = require('fs');

// // REQUIRE REQUEST
// var request = require("request");

// INITIALIZE SPOTIFY
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotifyKeys);


// OMDB API
const omdb = keys.omdb.key;

// BANDS IN TOWN API
// var bandsKey = keys.bands.key;
// const bandsKey = (keys.bandsintown);


// REQUIRE MOMENT
var moment = require("moment");

// REQUIRE AXIOS
var axios = require("axios");

// USERS ACTION AND INPUTS
const userInput = process.argv[2];
const userQuery = process.argv.slice(3).join(" ");

// function userCommand(userInput, userQuery) {
//   switch (userInput) {
//     case "concert-this":
//       concertThis();
//       break;

//     case "spotify-this-song":
//       spotifyThisSong();
//       break;

//     case "movie-this":
//       movieThis();
//       break;

//     case "do-what-it-says":
//       doIt(userQuery);
//       break;
//   }
// }
switch (userInput) {
  case "concert-this":
    concertThis(inputs);
    break;

  case "spotify-this-song":
    spotifyThisSong();
    break;

  case "movie-this":
    movieThis();
    break;

  case "do-what-it-says":
    doIt();
    break;
}

// // - - - - - - - - - - - - - - SPOTIFY - - - - - - - - - - - - - - //

function spotifyThisSong(songName) {

  spotify.search({
    type: 'track',
    query: userQuery
  },
    function (err, data) {
      if (err) {
        console.log('Error has occurred: ' + err);
        return;
      }
      var songInfo = data.tracks.items;

      console.log(`- - - - - - - - - - - - - - - - - - - - - - -`);
      console.log(`\n- - - - - - - SEARCHING FOR ${userQuery} - - - - - - -\n`);

      console.log("Artist: " + songInfo[0].artists[0].name);
      console.log("Song Name: " + songInfo[0].name);
      console.log("Album: " + songInfo[0].album.name);
      console.log("Preview Link: " + songInfo[0].external_urls.spotify);

      console.log(`\n- - - - - - - END OF INQUIRY - - - - - - -\n`);
      console.log(`- - - - - - - - - - - - - - - - - - - - - - -`);
    });
}

// // - - - - - - - - - - - - - - OMDB - - - - - - - - - - - - - - //

function movieThis(inputs) {

  // var movie = inputs
  // if (movie === undefined) {
  //   movie = "Mr. Nobody"
  // };

  var queryUrl = "http://www.omdbapi.com/?t=" + inputs + "&y=&plot=short&apikey=40e9cece";
  axios.get(queryUrl, function (error, response, body) {
    if (!inputs) {
      inputs = "Mr Nobody";
    }
    if (!error && respoonse.statusCode === 200) {

      console.log(`- - - - - - - - - - - - - - - - - - - - - - -`);
      console.log(`\n- - - - - - - SEARCHING FOR ${inputs} - - - - - - -\n`);

      console.log("Title: " + response.data.Title);
      console.log("Release Year: " + response.data.Year);
      console.log("IMDB Rating: " + response.data.Ratings[0].Value);
      console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
      console.log("Country: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actor(s): " + response.data.Actors);

      console.log(`\n- - - - - - - END OF INQUIRY - - - - - - -\n`);
      console.log(`- - - - - - - - - - - - - - - - - - - - - - -`);
    }
  })
}
// // - - - - - - - - - - - - - - BANDS IN TOWN - - - - - - - - - - - - - - //


// function concertThis(userQuery) {
//   var band = userQuery
//   console.log(`- - - - - - - - - - - - - - - - - - - - - - -`);
//   console.log(`\n- - - - - - - SEARCHING FOR ${userQuery} - - - - - - -\n`);
//   if (band != undefined) {
//     var URL = "https://rest.bandsintown.com/artists/" + band + "/events?app_id=" + bandsKey;
//     axios.get(URL)
//       .then(function (response) {
//         for (i in response.data) {
//           number = parseInt(i) + 1;
//           console.log(response.data[i].venue.name);
//           console.log(response.data[i].venue.city);
//           console.log(moment(response.data[i].datetime).format("MM/DD/YYYY"));
//         }
//       })
//   } else {
//   } console.log("- - - Please enter one of the commands\n- - - node.liri.js concert-this 'Artist'");
// }

// // - - - - - - - - - - - - - - DO WHAT I SAY - - - - - - - - - - - - - - //

// function doIt() {
//   fs.readFile('random.txt', 'utf8', function (error, data) {
//     if (error) {
//       return console.log(error);
//     }
//     const dataArr = data.split(",");

//     userInput = dataArr[0];
//     userQuery = dataArr[1];

//     userCommand(userInput, userQuery);

//   });
// }
// userCommand(userInput, userQuery);


// function runApp(command, item) {
//   switch(command) {
//     case "concert-this":
//     concert(query);
//     break;
//     case "spotify-this-song":
//     music(query);
//     break; 
//     case "movie-this":
//     movie(query);
//     break;
//     case "do-what-it-says":
//     file();
//     break;
//   }

// }
// // REQUIRE DOTENV FILE
require("dotenv").config();

// // REQUIRE REQUEST
var request = require("request");

// REQUIRE MOMENT
var moment = require("moment");

// REQUIRE FILE SYSTEM
var fs = require('fs');

// REQUIRE KEYS.JS FILE
var keys = require("./keys");

// INITIALIZE SPOTIFY
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify);


// OMDB API
let omdb = (keys.omdb);
let bandsintown = (keys.bandsintown)

// REQUIRE AXIOS
var axios = require("axios");

// USER COMMAND AND INPUT
let userInput = process.argv[2];
let userQuery = process.argv.slice(3).join(" ");

// APPLICATION LOGIC
function userCommand(userInput, userQuery) {
  switch (userInput) {
    case "concert-this":
      concertThis();
      break;
    case "spotify-this-song":
      spotifyThisSong();
      break;
    case "movie-this":
      movieThis();
      break;
    case "do-this":
      doThis(userQuery);
      break;
    default:
      console.log("Does not compute");
      break;
  }
}
userCommand(userInput, userQuery);

// - - - - - - - - - - - - - - BANDS IN TOWN - - - - - - - - - - - - - - //

function concertThis() {
  // USED REQUEST BECAUSE OF HAVING ISSUES WITH THE AXIOS - WILL REWORK THIS TO USE AXIOS
  request("https://rest.bandsintown.com/artists/" + userQuery + "/events?app_id="
    + bandsintown, function (error, response, body) {

      if (!error && response.statusCode === 200) {

        let userBand = JSON.parse(body);
        // PARSING DATA AND USING A LOOP 
        if (userBand.length > 0) {
          for (i = 0; i < 1; i++) {

            // FORMATTING COMMAND LINE AND CONSOLE LOGGING ALL DATA
            console.log(`- - - - - - - - - - - - - - - - - - - - - - -\n`);
            console.log(`SEARCHING FOR . . . ${userQuery}'s next concert . . .`);
            console.log(`\nABRACADABRA . . .\n\nArtist: ${userBand[i].lineup[0]} \nVenue: ${userBand[i].venue.name} \nVenue City: ${userBand[i].venue.city}, ${userBand[i].venue.region} - ${userBand[i].venue.country}`);
            let concertDate = moment(userBand[i].datetime.split("T"), "YYYY-MM-DDHH:mm:ss").format("MM/DD/YYYY");
            console.log(`Date: ${concertDate}\n`);
            console.log(`- - - - - - - END OF INQUIRY - - - - - - -\n`);
            console.log(`- - - - - - - - - - - - - - - - - - - - - - -`);
          };
        } else {
          console.log(`Band does not have any upcoming shows!`);
        };
      };
    });
};

// - - - - - - - - - - - - - - SPOTIFY - - - - - - - - - - - - - - //

function spotifyThisSong() {

  // IF USER INPUTS NO DATA PASS VALUE OF 1993'S SMASH HIT BY ACE OF BASE 
  if (!userQuery) {
    userQuery = "The Sign"
  };

  // SPOTIFY SEARCH QUERY PULLED FROM DOCS
  spotify.search({
    type: 'track',
    query: userQuery,
    limit: 1
  }, function (error, data) {
    if (error) {
      return console.log("Error occurred: " + error);
    }
    let spotifyArr = data.tracks.items;
    for (i = 0; i < spotifyArr.length; i++) {

      // FORMATTING COMMAND LINE AND CONSOLE LOGGING ALL DATA
      console.log(`- - - - - - - - - - - - - - - - - - - - - - -\n`);
      console.log(`SEARCHING FOR . . . ${userQuery} . . .\n\nABRACADABRA . . .\n`);

      console.log("Artist: " + spotifyArr[0].artists[0].name);
      console.log("Song Name: " + spotifyArr[0].name);
      console.log("Album: " + spotifyArr[0].album.name);
      console.log("Preview Link: " + spotifyArr[0].external_urls.spotify);

      console.log(`\n- - - - - - - END OF INQUIRY - - - - - - -\n`);
      console.log(`- - - - - - - - - - - - - - - - - - - - - - -`);
    };
  });
}

// - - - - - - - - - - - - - - OMDB - - - - - - - - - - - - - - //

function movieThis() {
  if (!userQuery) {
    userQuery = "Mr Nobody";
  };
  // USED REQUEST BECAUSE OF HAVING ISSUES WITH THE AXIOS - WILL REWORK THIS TO USE AXIOS
  request("http://www.omdbapi.com/?t=" + userQuery + "&apikey=86fe999c", function (error, response, body) {
    let userMovie = JSON.parse(body);

    let ratingsArr = userMovie.Ratings;
    if (ratingsArr.length > 2) { }
    if (!error && response.statusCode === 200) {

      // FORMATTING COMMAND LINE AND CONSOLE LOGGING ALL DATA
      console.log(`- - - - - - - - - - - - - - - - - - - - - - -\n`);
      console.log(`SEARCHING FOR . . . ${userQuery} . . .\n\nABRACADABRA . . .\n`);
      console.log(`Title: ${userMovie.Title}\nCast: ${userMovie.Actors}\nReleased: ${userMovie.Year}\nIMDb Rating: ${userMovie.imdbRating}\nRotten Tomatoes Rating: ${userMovie.Ratings[1].Value}\nCountry: ${userMovie.Country}\nLanguage: ${userMovie.Language}\nPlot: ${userMovie.Plot}`)
      console.log(`\n- - - - - - - END OF INQUIRY - - - - - - -\n`);
      console.log(`- - - - - - - - - - - - - - - - - - - - - - -`);
    };
  })
};

// - - - - - - - - - - - - - - DO WHAT I SAY - - - - - - - - - - - - - - //

function doThis() {
  fs.readFile("random.txt", "utf8", function (error, data) {
    if (error) {
      return console.log(error);
    }
    let dataArr = data.split(",");

    userInput = dataArr[0];
    userQuery = dataArr[1];

    userCommand(userInput, userQuery);
  });
};


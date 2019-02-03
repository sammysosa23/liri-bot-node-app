# LIRI Bot

Node.js | GA Tech | Assignment


### Overview

Liri is a command line application that takes user commands and queries from the command line and returns data from API's. The following commands have been hard coded into the program to give the user the capability to look up songs, concerts and movie information.
- - -

INSTALLATION
1. Clone repo to your local machine
2. Run "npm install" to retrieve all the dependencies.

```
npm -i
```

  - [Axios](https://www.npmjs.com/package/axios)
  - [Moment](https://www.npmjs.com/package/moment)
  - [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
  - [Dotenv](https://www.npmjs.com/package/dotenv)

3. Node-spotify-API will require a client ID and client secret for the Node-Spotify-API to function

- - -

COMMANDS | FUNCTION | INFORMATION
---------|---------|---------
concert-this | uses the **bandsintown** API to take a band name from the user and returns that bands next concert | Venue / Venue Location / Date
spotify-this-song | uses the **spotify** API to take a song name from the user and returns the artist, song name, spotify-link and album | Name / Album / Song / URL Link
movie-this | uses the **OMDB** API to take a movie name and returns the name, cast, release year, IMDB and Rotten Tomatoes rating, country of origin, language and plot | Title / Year / IMDB Rating / RT Rating / Country / Language / Plot / Actor(s)
do-this-it-says | uses the built in **readFile()** method to access data from a prepopulated .txt file and return its information as a command/search query. | N/A


### BANDS IN TOWN - GIF
![bandsintowngif](https://user-images.githubusercontent.com/44001036/52181527-ede62d80-27c0-11e9-8fe5-830fdf392d6e.gif)

### SPOTIFY - GIF
![spotifygif](https://user-images.githubusercontent.com/44001036/52171352-87620080-2729-11e9-80e2-6fb92dc8f999.gif)

### OMDB - GIF
![omdbgif](https://user-images.githubusercontent.com/44001036/52181533-fc344980-27c0-11e9-9355-7dc06367c40a.gif)

### Notes
---
This was my first back end project and even though I am happy with it, I found some aspects of it very difficult. Quite frustrating when things would not work when I expected them to function.

# LIRI Bot

Node.js | GA Tech | Assignment


### Overview
---
Liri is a command line application that takes user commands and queries from the command line and returns data from API's. The following commands have been hard coded into the program to give the user the capability to look up songs, concerts and movie information.
---

INSTALLATION
---
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


COMMANDS | FUNCTION
---------|---------
concert-this | uses the **bandsintown** API to take a band name from the user and returns that bands next concert
spotify-this | uses the **spotify** API to take a song name from the user and returns the artist, song name, spotify-link and album 
movie-this | uses the **OMDB** API to take a movie name and returns the name, cast, release year, IMDB and Rotten Tomatoes rating, country of origin, language and plot 
do-this | uses the built in **readFile()** method to access data from a prepopulated .txt file and return its information as a command/search query.






### Notes
---
This was my first back end project and even though I am happy with it, I found some aspects of it very difficult. Quite frustrating when things would not work when I expected them to function.
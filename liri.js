require('dotenv').config();
const axios = require('axios');
var Spotify = require('node-spotify-api');



const worker = process.argv[2];
const search = process.argv[3];
const id = process.env.SPOTIFY_ID;
const secret = process.env.SPOTIFY_SECRET;
const omdbKey = process.env.OMDB_KEY;


var spotify = new Spotify({
  id: id,
  secret: secret
});

//* `concert-this`

//* `spotify-this-song`

//* `movie-this`

//* `do-what-it-says`

if(worker==="spotify-this-song"){
  spotify.search({ type: 'track', query: search ,limit: 1}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data.tracks); 
  });



}else if (worker==="movie-this"){
          console.log(`search info ${search}`)

          if(search==" "){
            search="Mr. Nobody";
            console.log("hello");
            axios.get(`http://www.omdbapi.com/?apikey=${omdbKey}&t=${search}`).then((response) => {
              console.log(`Title: ${response.data.Title}`);
              console.log(`Year: ${response.data.Year}`);
              console.log(`IMDB Rating: ${response.data.imdbRating}`);
              console.log(`Country: ${response.data.Country}`);
              console.log(`Language: ${response.data.Language}`);
              console.log(`Plot: ${response.data.Plot}`);
              console.log(`Actors: ${response.data.Actors}`);
              console.log(response);
              console.log(search);
              })
             }else{


                    axios.get(`http://www.omdbapi.com/?apikey=${omdbKey}&t=${search}`).then((response) => {
                      console.log(`Title: ${response.data.Title}`);
                      console.log(`Year: ${response.data.Year}`);
                      console.log(`IMDB Rating: ${response.data.imdbRating}`);
                      console.log(`Country: ${response.data.Country}`);
                      console.log(`Language: ${response.data.Language}`);
                      console.log(`Plot: ${response.data.Plot}`);
                      console.log(`Actors: ${response.data.Actors}`);

                      })
                    }
};
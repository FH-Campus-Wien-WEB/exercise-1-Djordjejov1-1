const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  const movies = [
     {
      title: "The Matrix",
      released: "1999-03-31",
      runtime: 136,
      genres: ["Action", "Sci-Fi"],
      directors: ["Lana Wachowski", "Lilly Wachowski"],
      writers: ["Lana Wachowski", "Lilly Wachowski"],
      actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      plot: "A hacker discovers reality is a simulation and joins a rebellion.",
      poster: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
      metascore: 73,
      imdbRating: 8.7
    },
    {
      title: "Inception",
      released: "2010-07-16",
      runtime: 148,
      genres: ["Action", "Adventure", "Sci-Fi"],
      directors: ["Christopher Nolan"],
      writers: ["Christopher Nolan"],
      actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
      plot: "A thief steals secrets through dream-sharing technology.",
      poster: "https://picsum.photos/200/300?random=1",
      metascore: 74,
      imdbRating: 8.8
    },
    {
      title: "Interstellar",
      released: "2014-11-07",
      runtime: 169,
      genres: ["Adventure", "Drama", "Sci-Fi"],
      directors: ["Christopher Nolan"],
      writers: ["Jonathan Nolan", "Christopher Nolan"],
      actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
      plot: "A team travels through a wormhole to save humanity.",
      poster: "https://picsum.photos/200/300?random=2",
      metascore: 74,
      imdbRating: 8.6
    }
  ]

  res.json(movies)
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")


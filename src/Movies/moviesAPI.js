const movies = [{ name: "Get Out", id: 1, director: "Jordan Peele", genre: ["Thriller", "Horror", "Mystery"], stars: ['Daniel Kaluuya', 'Allison Williams', 'Bradley Whitford'], trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/sRfnevzM9kQ?rel=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>' },
  { name: "Wonder Woman", id: 2, director: "Patty Jenkins", genre: ["Action", "Adventure", "Fantasy"], stars: ['Gal Gadot', 'Chris Pine', 'Robin Wright'], trailer: "" },
  { name: "Thor Ragnarok", director: "Taika Waititi", id: 3, genre: ["Action", "Adventure", "Comedy"], stars: ['Chris Hemsworth', 'Tom Hiddleston', 'Cate Blanchett'], trailer: "" },
  { name: "Dunkirk", id: 4, director: "Christopher Nolan", genre: ["Action", "Drama", "History"], stars: ['Fionn Whitehead', 'Barry Keoghan', 'Mark Rylance'], trailer: "" },
  { name: "Baby Driver", id: 5, director: "Edgar Wright", genre: ["Action", "Crime", "Music"], stars: ['Ansel Elgort', 'Jon Bernthal', 'Jon Hamm'], trailer: "" },
  { name: "Blade Runner 2049", id: 6, director: "Denis Villeneuve", genre: ["Drama", "Mystery", "Sci-Fi"], stars: ['Harrison Ford', 'Ryan Gosling', 'Ana de Armas'], trailer: "" },
  { name: "Logan", id: 7, director: "James Mangold", genre: ["Action", "Drama", "Sci-Fi"], stars: ['Hugh Jackman', 'Patrick Stewart', 'Dafne Keen'], trailer: "" },
  { name: "IT", id: 8, director: "Andrés Muschietti", genre: ["Horror", "Drama", "Thriller"], stars: ['Bill Skarsgård', 'Jaeden Lieberher', 'Finn Wolfhard'], trailer: "" },
  { name: "John Wick 2", id: 9, director: "Chad Stahelski", genre: ["Action", "Crime", "Thriller"], stars: ['Keanu Reeves', 'Riccardo Scamarcio', 'Ian McShane'], trailer: "" },
  { name: "Girls Trip", id: 10, director: "Malcolm D. Lee", genre: ["Comedy"], stars: ['Regina Hall', 'Queen Latifah', 'Jada Pinkett Smith'], trailer: "" },
  { name: "Transformer: The Last Knight", id: 11, director: "Michael Bay", genre: ["Action", "Adventure", "Sci-Fi"], stars: ['Mark Wahlberg', 'Anthony Hopkins', 'Josh Duhamel'], trailer: "" },
  { name: "Justice League", id: 12, director: "Zack Snyder", genre: ["Action", "Adventure", "Fantasy"], stars: ['Ben Affleck', 'Gal Gadot', 'Jason Momoa'], trailer: "" }];

const getAll = () => movies;

const getOne = id => movies.find(movie => movie.id === id);

const genres = genre => {
  return movies.filter(movie => {
    return movie.genre.filter(el=>el === genre).join('') === genre
  });
};
// console.log(genres("Action"))
const allGenres = () => {
  let genres = [];
  movies.forEach(movie => {
    movie.genre.forEach(el => {
      genres.includes(el) ? null : genres.push(el)
    })
  })
  return genres;
}

export default {
  getAll,
  getOne,
  genres,
  allGenres
};
import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Movies from './Movies/Movies.js'
import Genres from './Movies/Genre.js'
import moviesAPI from './Movies/moviesAPI.js'


const App = () => {
  const genres = moviesAPI.allGenres()
  
  return(
  <div>
    <div>
        <header><img id='head-img' src="http://www.unknownrobot.com/wp-content/uploads/2016/08/extra-large-movie-reels-wall-art-plaque-media-interior-design-handmade-wonderful-decoration-premium-material-cool-ideas.jpg" alt="movie"/></header>
    </div>
    <nav>
      <Link to="/">Home</Link>
      {' '}
      <Link to="/movies">All Movies</Link>
      <br/>Movie Genres:{' '}
      {genres.map(genre =>
        <Link to={"/genre/" + genre}>{genre + ' '}</Link>)}
    </nav>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path = '/movies' component={Movies} />
      <Route path = '/genre/:genre' component={Genres} />
    </Switch>
  </div>
)
}


export default App;
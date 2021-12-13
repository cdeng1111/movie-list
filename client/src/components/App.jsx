import React from 'react';
import movies from '../movies.js';
import MovieList from './MovieList.jsx';
import Header from './Header.jsx';
import SearchForm from './SearchForm.jsx';
import AddMovie from './AddMovie.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      title: '',
      watch:'',
      // error: 'There is no movie in the movie list.'
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.AddMovie = this.AddMovie.bind(this);
    this.updateMovie = this.updateMovie.bind(this);
    this.handleWatch = this.handleWatch.bind(this);
  }

  componentDidMount() {
    axios.get('/movies')
          .then(response =>{
            const movies=response.data;
            this.setState({movies})
          })
          .catch(error=>{
            console.log('error getting data:', error)
          })
  }

  handleSearch(title) {
    this.setState({ title: title });
    // this.setState({ error: "no movie by that name found!" });
  }
  handleWatch(watch) {
    this.setState({ watch: watch });
  }

  AddMovie(movie) {
    axios.post('/movies', movie)
          .then((data) =>{
            // let newMovies = [...this.state.movies, movie ];
            // let newMovies = data.data;
            // this.setState({ movies: newMovies});
            // this.setState({movies: [...this.state.movies, Object.assign(movie, data.data)]})
            this.setState({movies: [...this.state.movies,  movie]})
          } )
          .catch(err =>{
            console.log('err from addmovie:', err);
          })
  }

  updateMovie(movie) {
    axios.patch('/movies', movie)
        .then(
          (response)=>{
            this.setState({movies:response.data})
          })
        .catch(err => {
          console.log('update error:',err)
        })
  }


  render() {

    return (
      <div>
        <Header />
        <AddMovie AddMovie={this.AddMovie} />

        <SearchForm handleSearch={this.handleSearch} handleWatch={this.handleWatch} />

        {this.state.movies.length > 0 ? <MovieList movies={this.state.movies} title={this.state.title} watch={this.state.watch} updateMovie={this.updateMovie}  /> : <p>{this.state.error}</p>}
      </div>
    )
  }
};

export default App;
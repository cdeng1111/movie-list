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
      targetList: [],
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




  // handleSearch(title, watch) {
  //   this.setState({ title: title });
  //   axios.get('/movies')
  //         .then(response =>{
  //           const newMovies = response.data;
  //           var targetList = newMovies.filter(movie =>{
  //             return movie.title.indexOf(title) !== -1
  //             && movie.watch.indexOf(watch) !== -1;
  //       } );

  //           console.log("newMovies from handle search:",newMovies );
  //           console.log("targetList from handle search:",targetList );
  //           this.setState({targetList});
  //         })
  //         .catch(error=>{
  //           console.log('error getting data:', error)
  //         })
  // }

        //goal: make a get request to the server and send watch status as well as search term and only get the matched items from server

  handleSearch(title, watch) {
    if ( title === undefined || title === '') {
    this.setState({ title: title });
    axios.get(`/movies/filter/${watch}`)
          .then(response =>{
            // const newMovies = response.data;
            console.log('axios get response data:', response.data);
            this.setState({targetList: response.data});
          })
          .catch(error=>{
            console.log('error getting data:', error)
          })
      } else {
        axios.get(`/movies/filter/${title}/${watch}`)
        .then(response =>{
          console.log('axios get response data:', response.data);
          this.setState({targetList: response.data});
        })
        .catch(error=>{
          console.log('error getting data:', error)
        })
      }
  }


  handleWatch(watch) {
    this.setState({ watch: watch });
    this.handleSearch('', watch);
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

        <MovieList movies={this.state.movies} title={this.state.title} watch={this.state.watch} targetList={this.state.targetList} updateMovie={this.updateMovie}  />
      </div>
    )
  }
};

export default App;
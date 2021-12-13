import React from 'react';

class MovieItem extends React.Component {
  constructor(props) {
    super(props);
    this.state={movie: props.movie}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = function() {
    console.log('this.state.movie.watch:',this.state.movie.watch);
    if (this.state.movie.watch== 'yes' ){
      var newWatch='no';
    } else {
      newWatch='yes'
    }
    var newMovie = {...this.state.movie, watch:newWatch};
    this.setState({movie: newMovie });
    this.props.updateMovie(newMovie);

  }

  render() {
    const {movie} = this.props;
    return (
      <li key={movie.id}>
      <span>{movie.title} </span>
      <button onClick={this.handleClick}>{ movie.watch=='yes'? "Watched": "To Watch"} </button>
      </li>
    );
  }
};

export default MovieItem;
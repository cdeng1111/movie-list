import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '',
                   watch: 'no'};
    this.handleMovieChange=this.handleMovieChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

handleMovieChange(event){
  this.setState({title: event.target.value})
}
handleAddMovie(event){
  event.preventDefault();
  this.props.AddMovie(this.state);
  this.setState({title:'' });
}

  render() {
    const styles={bold:true, color:'white', backgroundColor: 'green'};

    return (
      <form onSubmit={this.handleAddMovie}>
        <label>
          <input type="text" placeholder='Add movie title here' value ={this.state.title} onChange={this.handleMovieChange} />
        </label>
        <button type="submit" style={styles}>Add</button>
      </form>
    );
  }
};

export default AddMovie;
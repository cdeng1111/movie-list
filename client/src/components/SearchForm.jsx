import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            title: '',
            showWatchButton: true,
            watch:'yes',
          };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleWatched = this.handleWatched.bind(this);
    this.handleToWatch = this.handleToWatch.bind(this);
  }

  handleChange(event) {
    this.setState({title: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSearch(this.state.title, this.state.watch);
    this.setState({title:''});
  }

  handleWatched() {
    event.preventDefault();
    console.log('this is from handleWatched!')
    this.setState({ showWatchButton: true});
    this.setState({ watch: 'yes'}, () => {this.props.handleWatch(this.state.watch)} );
    ;
    }

  handleToWatch() {
    event.preventDefault();
    console.log('this is from handleToWatch!')
    this.setState({ showWatchButton: false});
    this.setState({ watch: 'no'}, () => {this.props.handleWatch(this.state.watch)});
  }

  render() {
     let styles1 = {bold:true, color:'white', backgroundColor: 'green'} ;
     let styles2 = {bold:false, color:'black', backgroundColor: '#fff'} ;
     const {showWatchButton} = this.state;
    return (
      <form>
        <button type="submit"  style={showWatchButton? styles1 : styles2}  onClick={this.handleWatched} >Watched</button>
        <button type="submit"  style={showWatchButton? styles2 : styles1}  onClick={this.handleToWatch} >To Watch</button>

        <label>
          <input type="text" placeholder='search' value={this.state.title} onChange={this.handleChange}  />
        </label>

        <button type="submit" onClick={this.handleSubmit} >Go!</button>
      </form>

    );
  }
};

export default SearchForm;
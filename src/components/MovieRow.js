import React, { Component } from 'react';
import axios from 'axios'
import MovieRow from '../containers/MovieContainer'
import { api_key, movieUrl } from '../config/api_config'

var myoption 
class MovieRows extends Component{
  constructor (props){
    console.log(props)
    super(props)
    myoption = props.options
    this.state= {}
    this.performSearch()
    
    }
    performSearch = async (movies) => {
    try {
    const url= movieUrl + myoption
    
    
    const response = await axios.get(url, {
    params: {
    api_key: api_key,
    q: movies
    }
    })
    
    var movieRows = []
    response.data.results.forEach((movies)=>{
    movies.poster_src = "https://image.tmdb.org/t/p/w185" + movies.poster_path
    
    const moviesRow = <MovieRow key={movies.id} movies={movies} />
    movieRows.push(moviesRow)
    
    
    })
    this.setState({rows:movieRows})
    
    } catch (error) {
    throw error
    }
    
}
componentWillUpdate(){
  this.performSearch()
  
}
  

  render() {
    
    return (
    <div className="App">

      {this.state.rows}
    
    </div>
    )
  }
}export default MovieRows;

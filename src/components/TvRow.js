import React, { Component } from 'react';
import axios from 'axios'
import TvRow from '../containers/TvContainer'
import { api_key, tv_Url } from '../config/api_config'

var myoption = "popular"
class TvRows extends Component{
  constructor (props){
    
    super(props)
    myoption = props.options
    this.state= {}
    this.performSearch()
    }
    performSearch = async (show) => {
    try {
    const url= tv_Url + myoption
    
    const response = await axios.get(url, {
    params: {
    api_key: api_key,
    q: show
    }
    })
    //console.log(response)
    //return response.data.results
    var tvRows = []
    response.data.results.forEach((show)=>{
    show.poster_src = "https://image.tmdb.org/t/p/w185" + show.poster_path
    //console.log(movie.poster_path)
    const showRow = <TvRow key={show.id} show={show} />
    tvRows.push(showRow)
    //console.log("result",tvRows)
    
    })
    this.setState({rows:tvRows})
    } catch (error) {
    throw error
    }  
}
componentDidUpdate(){
  this.performSearch()
  
}
componentDidMount(){
  this.performSearch()

}


  render() {
    
    return (
    <div className="App">

      {this.state.rows}
    
    </div>
    )
  }
}export default TvRows;

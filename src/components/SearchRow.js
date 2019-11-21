import React, { Component } from 'react';
import axios from 'axios'
import SearchRow from '../containers/Search1Container'
import Form from './Search'
import { api_key, searchUrl } from '../config/api_config'

class SearchRows extends Component{
  constructor (props){
    super(props)
    this.state= {}
    this.on()
    }
    onInputChange = async (search) => {
      
    try {
    const url= searchUrl+"multi"+"?query="+"woman"
    //console.log(url)
    const response = await axios.get(url, {
    params: {
    api_key: api_key,
    q: search
    }
    })
   // console.log(response)
    //return response.data.results
    var searchRows = []
    response.data.results.forEach((search)=>{
    search.poster_src = "https://image.tmdb.org/t/p/w185" + search.poster_path
    //console.log(movie.poster_path)
    const searchRow = <SearchRow key={search.id} search={search} />
    searchRows.push(searchRow)
    //console.log("result",result)
    
    })
    this.setState({rows:searchRows})
    } catch (error) {
    throw error
    }
}

  render() {
    return (
    <div className="App">

      {this.state.rows}
    
    </div>
    )
  }
}export default SearchRows;

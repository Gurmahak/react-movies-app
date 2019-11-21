import axios from 'axios'

import { api_key, BASE_URL, TV_URL } from '../config/api_config'


export const getMovies = async (movieName) => {
  const url = BASE_URL
  
  try {
    const response = await axios.get(url, {
      params: {
        api_key: api_key,
       q: movieName
      }
    })
    console.log(response)
    return response.data.results
   // var movie=[]
   //response.data.results.forEach((result)=>{
      
     // movie.push(result)
      //  console.log("result",result)
      // return response.data.result
      //return movie;
      
      
    //})
    
  } catch (error) {
    throw error
  }
}


export const getTvShows = async (showName) => {
  const url = TV_URL
  try {
    const response = await axios.get(url, {
      params: {
        api_key: api_key,
        q: showName
      }
    })
    console.log(response)
    console.log(url)
    return response.data.results
  } catch (error) {
    throw error
  }
}

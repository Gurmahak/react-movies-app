import React from 'react'
import axios from 'axios'


class MovieCard extends React.Component {
    state = {
        movieData: {}
    };


    componentDidMount() {
        axios
        .get(
            `https://api.themoviedb.org/3/search/movie?api_key=3f918e326ee690eb0323fa8230f8c49a&id=${
                this.props.movieID
            }&plot=full`
        )
        
        .then(res => res.data)
        
        .then(res => {
            this.setState({ movieData: res });
        });
        //console.log(res)
    }

    render() {
    const {
        Title,
        Released,
        Poster,
        imdbRating
    } = this.state.movieData;

    if (!Poster || Poster === 'N/A') {
        return null;
    }

    return <table id = "searchReturn">
    <tbody >
        <tr>
        <td>
            <img alt="poster" width="250" height="300"src={Poster}/>
        </td>
        <td>
            <h2>{Title}</h2>
            <p><b>Release Date:  </b>{Released} | <b>Popularity: </b>{imdbRating}</p>
            
            
            
            <br/><br/>
            
        </td>
        </tr>
    </tbody>

    </table>
    
}
}export default MovieCard
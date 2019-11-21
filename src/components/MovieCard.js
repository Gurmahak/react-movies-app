import React from 'react'
import axios from 'axios'

class MovieCard extends React.Component {
    state = {
        movieData: {}
    };

    componentDidMount() {
        axios
        .get(
            `https://api.themoviedb.org/3/movie/${
                this.props.movieID
            }?api_key=3f918e326ee690eb0323fa8230f8c49a&plot=full`
        )
        
        .then(res => res.data)
        
        .then(res => {
            this.setState({ movieData: res });
        });
        //console.log(res)
    }

    render() {
    const {
        title,
        released_date,
        poster_path,
        popularity,
        overview
    } = this.state.movieData;

    if (!poster_path || poster_path === 'N/A') {
        return null;
    }

    return <table id = "searchReturn">
    <tbody >
        <tr>
        <td>
             
            <img alt="poster" width="250" height="300"src= {`https://image.tmdb.org/t/p/w185${poster_path}`}/>
        </td>
        <td>
            <h2>{title}</h2>
            <p><b>Release Date:  </b>{released_date} | <b>Popularity: </b>{popularity}</p>
            <p>{overview}</p>
            <br/><br/>  
        </td>
        </tr>
    </tbody>
</table>   
}
}export default MovieCard
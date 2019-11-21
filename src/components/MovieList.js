import React from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'


class MoviesList extends React.Component {
    state = {
        moviesList: ['0'],
        searchTerm: ''
    };

    search = event => {
        event.preventDefault();
        axios
        .get(
            `https://api.themoviedb.org/3/search/movie?api_key=3f918e326ee690eb0323fa8230f8c49a&query=${
                this.state.searchTerm
            }&plot=full`
        )
        .then(res => res.data.results)
        //console.log(res.data.results[0])
        .then(res => {
            
            console.log(res)
            
            if (!res) {
                this.setState({ moviesList: [ ] });
                console.log(this.state.moviesList)
                return;
            }
            
            console.log("hello")
            const moviesList = res.map(movie => movie.id);
            this.setState({
                moviesList
                
            });        
        });
            
    };
    
    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        });
    };
     
    render() {
       
        const { moviesList } = this.state;
        return (
            <div>
                <form onSubmit={this.search}>
                    <textarea id = "searchInput"
                        placeholder="  Search for a movie"
                        onChange={this.handleChange}
                    />
                
                    <button class="searchBtn"
                    id ="submit"
                    type="submit">
                        Search
                    </button>
                </form>

                {moviesList.length > 0 ? (
                    moviesList.map(movie => (
                        <MovieCard movieID={movie} key={movie} />
                    ))
                ) : (
                    <p>
                        <h1>Sorry, there were no results</h1>
                    </p>
                )}
            </div>
        );
    }
}export default MoviesList
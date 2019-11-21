import React from 'react'
import Form from '../components/Search'




 class SearchContainer extends React.Component {
    // state = {
    //     movieData: {}
    // };
    // componentDidMount() {
    //     axios
    //         .get(
    //             `https://www.omdbapi.com/?apikey=75dc6f14&i=${
    //                 this.props.movieID
    //             }&plot=full`
    //         )
    //         .then(res => res.data)
    //         .then(res => {
    //             this.setState({ movieData: res });
    //         });
    // }

    render(){
        // const {
        //     Title,
        //     Released,
        //     Poster,
        //     imdbRating
        // } = this.state.movieData;

        // if (!Poster || Poster === 'N/A') {
        //     return null;
        // }
    // const { search } = this.state
    // const { text } = search

    return(
        <Form
        //title={text}
        />    
    )
        
    }
    

}export default SearchContainer

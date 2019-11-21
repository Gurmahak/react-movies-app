import React from 'react'

class Search1Container extends React.Component{
    render(){
        return <table key={this.props.search.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="250" height="300"src={this.props.search.poster_src}/>
            </td>
            <td>
              <h2>{this.props.search.title}{this.props.search.name}</h2>

              <p><b>Release Date: </b> {this.props.search.release_date} | <b>Popularity: </b>{this.props.search.popularity}</p>
              <p>{this.props.search.overview}</p>
              
              <br/><br/><br/><br/>
              
            </td>
          </tr>
        </tbody>

      </table>
    }
}
export default Search1Container
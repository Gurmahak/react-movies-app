import React from 'react'

class TvContainer extends React.Component{
    render(){
        return <table key={this.props.show.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="250" height="300"src={this.props.show.poster_src}/>
            </td>
            <td>
              <h2>{this.props.show.name}</h2>
              <p><b>Release Date:  </b>{this.props.show.release_date} | <b>Popularity: </b>{this.props.show.popularity}</p>
              <p>{this.props.show.overview}</p>
              
              <br/><br/>
              
            </td>
          </tr>
        </tbody>

      </table>
    }
}
export default TvContainer
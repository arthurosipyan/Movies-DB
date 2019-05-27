import React from 'react'

class MovieRow extends React.Component {
  viewMore() {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }
  render(){
      return <table key={this.props.movie.id}>
      <tbody>
        <tr>
          <td>
            <img alt="poster" width="120" src={this.props.movie.poster_src}/>
          </td>
          <td>
            <h3>{this.props.movie.title} (User Rating: {this.props.movie.vote_average}, Popularity: {this.props.movie.popularity})</h3>
            <p>{this.props.movie.overview}</p>
            <input type="button" onClick={this.viewMore.bind(this)} value="View"/>
          </td>
        </tr>
      </tbody>
    </table>
  }
}

export default MovieRow
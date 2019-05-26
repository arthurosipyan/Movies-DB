import React from 'react'

class MovieRow extends React.Component {
    render(){
        return <table key={this.movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="120" src={this.movie.poster_src}/>
            </td>
            <td>
              {this.movie.title}
              <p>{this.movie.overview}</p>
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default MovieRow
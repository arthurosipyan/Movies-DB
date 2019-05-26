import React, { Component } from 'react';
import './App.css';
import MovieRow from './movieRow'

class App extends Component {
  constructor(props) {
    super(props)

    const movies = [
      {id: 0, poster_src: "https://s3.amazonaws.com/rical-misc/USATSI_12737579.jpg", title: "Avengers: Infinity War", overview: "As asdasdfasd wv asdaw dawd"},
      {id: 1, poster_src: "https://s3.amazonaws.com/rical-images/ronald-acuna-800x480.jpg", title: "The Avengers", overview: "Sciondasdasd g232313dadahfddd"}
    ]

    var movieRows = []
    movies.forEach((movie) => {
      console.log(movie.title)
      const movieRow = <MovieRow movie={movie} />
      movieRows.push(movieRow)
    })

    this.state = {rows: movieRows}

  }

  render() {
    return (
      <div>

        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="green_app_icon.svg"/>
              </td>
              <td width="8"></td>
              <td>
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} placeholder="Enter search term"/>

        {this.state.rows}

      </div>
  );
  }
  
}

export default App;

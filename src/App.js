import { useState } from "react";
import "./styles.css";

var moviesec = {
  action: [
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMTc5NjY4MjUwNF5BMl5BanBnXkFtZTgwODM3NzM5MzE@._V1_UY209_CR0,0,140,209_AL_.jpg",
      name: "Gangs of Wasseypur",
      rating: "8.2",
      link: "http://www.youtube.com/watch?v=j-AkWDkXcMY"
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BOGZiM2IwODktNTdiMC00MGU1LWEyZTYtOTk4NTkwYmJkNmI1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR6,0,140,209_AL_.jpg",
      name: "Sholay",
      rating: "8.2",
      link: "http://www.youtube.com/watch?v=JRQfxrJt8Xw"
    }
  ],
  comedy: [
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMzcxOWU3ZTAtZmYwYS00MzJmLWI1MmEtYmJlOTFjYTAxMWUwXkEyXkFqcGdeQXVyODk1MzE5NDA@._V1_UY209_CR5,0,140,209_AL_.jpg",
      name: "Dil Chahta Hai",
      rating: "8.1",
      link: "http://www.youtube.com/watch?v=m13b25V0B10"
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMzQ4MTBlYTQtMzJkYS00OGNjLTk1MWYtNzQ0OTQ0OWEyOWU1XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_UY209_CR3,0,140,209_AL_.jpg",
      name: "Munna Bhai M.B.B.S.",
      rating: "8.1",
      link: "http://www.youtube.com/watch?v=8uX1qIE6Qks"
    }
  ],
  drama: [
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR2,0,140,209_AL_.jpg",
      name: "3 Idiots",
      rating: "8.4",
      link: "http://www.youtube.com/watch?v=xvszmNXdM4w"
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BYThmZDA0YmQtMWJhNy00MDQwLTk0Y2YtMDhmZTE5ZjhlNjliXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR3,0,140,209_AL_.jpg",
      name: "Rang De Basanti",
      rating: "8.1",
      link: "https://www.youtube.com/watch?v=QHhnhqxB4E8"
    }
  ]
};

export default function App() {
  const [selectedmovie, setmovie] = useState("drama");

  function movieClickHandler(movie) {
    setmovie(movie);
  }

  return (
    <div className="App">
      <h1>Best Movies</h1>

      <p>Checkout best Movies. Select a genre to get started</p>

      <div className="buttons">
        {Object.keys(moviesec).map((movie) => (
          <button className="click" onclick={() => movieClickHandler(movie)}>
            {movie}
          </button>
        ))}
        {/* <button onclick={movieClickHandler} className="click">
          action
        </button>
        <button onclick={movieClickHandler} className="click">
          comedy
        </button>
        <button onclick={movieClickHandler} className="click">
          drama
        </button> */}
      </div>
      <hr />
      <div className="section">
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

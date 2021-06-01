import "./styles.css";

var movie = {
  action: [
    { image: "", name: "Gangs of Wasseypur", rating: "8.2" },
    { image: "", name: "Sholay", rating: "8.2" }
  ],
  comedy: [
    { image: "", name: "Dil Chahta Hai", rating: "8.1" },
    { image: "", name: "Munna Bhai M.B.B.S.", rating: "8.1" }
  ],
  drama: [
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR2,0,140,209_AL_.jpg",
      name: "3 Idiots",
      rating: "8.4"
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BYThmZDA0YmQtMWJhNy00MDQwLTk0Y2YtMDhmZTE5ZjhlNjliXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR3,0,140,209_AL_.jpg",
      name: "Rang De Basanti",
      rating: "8.1"
    }
  ]
};

export default function App() {
  function onClickHandler(change) {
    var image = movie.drama[change];
    console.log(image);
  }

  return (
    <div className="App">
      <h1>Best Movies</h1>
      <p>Checkout best Movies. Select a genre to get started</p>
      <div className="buttons">
        <button className="click">action</button>
        <button className="click">comedy</button>
        <button onclick={onClickHandler} className="click">
          drama
        </button>
      </div>
      <hr />
      <div>
        <ul>
          <div>
            {movie.drama.map((dramas, i) => (
              <img src={dramas.image} alt="logo" />
            ))}
          </div>
          <div></div>
        </ul>
      </div>
    </div>
  );
}

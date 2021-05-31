import "./styles.css";

const movie = {
  action: [
    { name: "Gangs of Wasseypur", rating: "8.2" },
    { name: "Sholay", rating: "8.2" }
  ],
  comedy: [
    { name: "Dil Chahta Hai", rating: "8.1" },
    { name: "Munna Bhai M.B.B.S.", rating: "8.1" }
  ],
  drama: [
    { name: "3 Idiots", rating: "8.4" },
    { name: "Rang De Basanti", rating: "8.1" }
  ]
};

export default function App() {
  return (
    <div className="App">
      <h1>Best Movies</h1>
      <p>Checkout best Movies. Select a genre to get started</p>
      <div className="buttons">
        <button className="click">action</button>
        <button className="click">comedy</button>
        <button className="click">drama</button>
      </div>
      <hr />
      <div>
        <ul></ul>
      </div>
    </div>
  );
}

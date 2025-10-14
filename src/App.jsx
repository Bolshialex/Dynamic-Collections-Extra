import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { players } from "./players.js";
import PlayerCard from "./components/PlayerCard.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        {players.map((player) => (
          <PlayerCard {...player} />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default App;

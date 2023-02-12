import "./App.css"

import Nav from "./components/Nav.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"
import data from "./data"

function App() {

  const cardData = data.map(card => {
    console.log(card.coverImg)
    return <Card
        key={card.id} 
        card={card}
        
    />
    
  })
  return (
    <div className="App">
      <Nav />
      <Hero />
      <div className ="cardContainer">
        {cardData}
      </div>
      
    </div>
  );
}

export default App;

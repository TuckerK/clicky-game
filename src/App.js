import React, { Component } from "react";
import "./App.css";
import cardInfo from "./cardInfo.json";
import ImageCard from "./components/ImageCard/ImageCard.js";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

class App extends Component {
  state = {
    cardInfo
  };

  render() {
    return (
      <div>
        <Title />
        <Wrapper>
          {this.state.cardInfo.map(card => (
            <ImageCard id={card.id} key={card.id} image={card.image} />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;

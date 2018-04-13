import React, { Component } from "react";
import "./App.css";
import cardInfo from "./cardInfo.json";
import ImageCard from "./components/ImageCard/ImageCard.js";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

class App extends Component {
  state = {
    cardInfo,
    score: 1,
    highScore: 0
  };

  randomizeImages = () => {
    const cardInfo = this.state.cardInfo.sort(() => {
      return 0.5 - Math.random();
    });
    this.setState({ cardInfo });
  };

  addScore = () => {
    this.setState({ score: this.state.score + 1})
    console.log(this.state.score);
  };

  //   console.log(this.state.score);
  //   console.log(this.state.clicked);
  // };

  endGame = () => {};

  gameLogic = () => {};

  render() {
    return (
      <div>
        <Title />
        <Wrapper>
          {this.state.cardInfo.map(card => (
            <ImageCard
              randomizeImages={this.randomizeImages}
              addScore={this.addScore}
              id={card.id}
              key={card.id}
              image={card.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;

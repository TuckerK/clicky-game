import React, { Component } from "react";
import "./App.css";
import cardInfo from "./cardInfo.json";
import ImageCard from "./components/ImageCard/ImageCard.js";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

class App extends Component {
  state = {
    cardInfo,
    score: 0,
    highScore: 0
  };

  endGame = () => {
    if(this.state.score > this.state.highScore){
      this.setState({highScore: this.state.score}, function(){
        console.log(this.state.highScore)
      })
    }

    this.state.cardInfo.forEach(card =>{
      card.count = 0;
    });

    this.setState({score:0});
    return true;
  }

  // Scoring recieved the id from above 
  gameLogic = id => {

    // Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
    this.state.cardInfo.find((obj, inj) => {

      //if id you clicked on is = to object 
      if(obj.id === id) {
        if(cardInfo[inj].count === 0) {

          //the cardInfo count on json is equal to the cardInfo json + 1 (keeping track of each card clicked on)
          cardInfo[inj].count = cardInfo[inj].count + 1;
          this.setState({score: this.state.score + 1}, function(){
            
            console.log(this.state.score);
          });

          this.state.cardInfo.sort(() => Math.random() - 0.5)
          return true;

        } else {
          //Rendering the score 
          this.endGame();
        }
      }
    });
  }

  render() {
    return (
      <div>
        <Title 
        score={this.state.score}
        highScore={this.state.highScore}
        />
        <Wrapper>
          {this.state.cardInfo.map(card => (
            <ImageCard
              id={card.id}
              key={card.id}
              image={card.image}
              gameLogic={this.gameLogic}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;

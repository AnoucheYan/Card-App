import React from "react";
import "./App.css";
import randomNumber from "./Helpers/randomNumber";
import Card from "./Components/Card";
import Instructions from "./Components/Instructions";

class App extends React.Component {
  state = {
    numbers: [],
  };

  handleAddCard = () => {
    const numbers = [...this.state.numbers];
    let unique = false;
    do {
      const newNumber = randomNumber();
      if (!numbers.includes(newNumber)) {
        numbers.push(newNumber);
        unique = true;
      }
    } while (!unique);

    this.setState({
      numbers,
    });
  };

  handleSortCards = () => {
    const numbers = [...this.state.numbers];
    numbers.sort((a, b) => a - b);

    this.setState({
      numbers,
    });
  };

  handleDeleteCard = (number) => {
    let numbers = [...this.state.numbers];

    let filteredNumbers = numbers.filter(function (value, index, arr) {
      return value !== number;
    });

    this.setState({
      numbers: filteredNumbers,
    });
  };

  render() {
    const Cards = this.state.numbers.map((number, { index = number }) => {
      return (
        <div className="flex-item" key={index}>
          <Card
            randomNumber={number}
            handleDeleteCard={this.handleDeleteCard}
          />
        </div>
      );
    });

    return (
      <div className="App">
        <div className="container">
          <header>
            <button className="addOrSortBtn" onClick={this.handleAddCard}>
              add card
            </button>
            <button className="addOrSortBtn" onClick={this.handleSortCards}>
              sort cards
            </button>
          </header>

          <main>
            <div className="cardContainer">{Cards}</div>
          </main>

          <footer>footer</footer>
        </div>

        <Instructions />
      </div>
    );
  }
}

export default App;

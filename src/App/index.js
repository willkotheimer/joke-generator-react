import React from 'react';
import './App.scss';
import jokeData from '../helpers/data/jokeData';
import Joke from '../components/Joke';

class App extends React.Component {
  state = {
    joke: [],
  }

  makeAJoke = () => {
    jokeData.getJoke().then((resp) => {
      this.setState({
        joke: resp,
      });
    });
  }

  render() {
    const { joke } = this.state;
    const showtheDangJoke = () => <Joke key={joke.id} joke={joke} />;
    return (
      <div className="App">
        <h2>Joke generator</h2>
        <div class="background"></div>
        <button onClick={this.makeAJoke} className='btn btn-danger'>See Joke</button>
        <br /><br />
        {this.state.joke.id && showtheDangJoke()}
      </div>
    );
  }
}

export default App;

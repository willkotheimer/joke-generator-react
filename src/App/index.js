import React from 'react';
import './App.scss';
import jokeData from '../helpers/data/jokeData';
import Joke from '../components/Joke';

class App extends React.Component {
  state = {
    joke: [],
  }

  componentDidMount() {
    jokeData.getJoke().then((resp) => {
      this.setState({
        joke: resp,
        show: false,
      });
    });
  }

  showJoke = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  }

  render() {
    const { joke } = this.state;

    return (
      <div className="App">
        <h2>Joke generator</h2>
        <button onClick={this.showJoke} className='btn btn-danger'>See Joke</button>
        <br /><br />
        {this.state.show && <Joke key={joke.id} joke={joke} />}
      </div>
    );
  }
}

export default App;

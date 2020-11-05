import React, { Component } from 'react';
import Punchline from '../Punchline';

class Joke extends Component {
  state = {
    punchline: [],
  }

  punchline = () => {
    this.setState({
      punchline: this.props.joke.punchline,
      show: false,
    });
  }

  showPunchLine = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  }

  render() {
    const { joke } = this.props;
    return (
      <div className=''>
        <div className='card-text joke'>{joke.setup}</div>
        <br /><br />
        <button onClick={this.showPunchLine} className=' btn btn-danger'>See Punchline</button>
        <br /><br />
        {this.state.show && <Punchline key={joke.id} joke={joke} />}
      </div>
    );
  }
}

export default Joke;

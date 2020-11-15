import React, { Component } from 'react';

class Punchline extends Component {
  render() {
    const { joke } = this.props;
    return (
      <div className=''>
        <div className='punchline card-text'>{joke.punchline}</div>
        <br /><br />
      </div>
    );
  }
}

export default Punchline;

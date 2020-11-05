import React, { Component } from 'react';

class Punchline extends Component {
  refreshPage = () => {
    window.location.reload(false);
  }

  render() {
    const { joke } = this.props;
    return (
      <div className=''>
        <div className='punchline card-text'>{joke.punchline}</div>
        <br/><br/>
        <button onClick={this.refreshPage} className='btn btn-danger'>See Another Joke</button>
      </div>
    );
  }
}

export default Punchline;

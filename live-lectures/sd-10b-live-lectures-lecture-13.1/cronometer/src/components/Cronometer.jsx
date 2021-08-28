import React, { Component } from 'react';

class Cronometer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    const ONE_SECOND = 100; // 1 second in miliseconds
    this.cronometerInterval = setInterval(() => {
      console.log('interval rodando');
      this.setState((state) => ({ seconds: state.seconds + 1 }));
    }, ONE_SECOND);
  }

  componentDidUpdate(prevProps, prevState) {
    const MAX_SECONDS = 30;
    if (prevState.seconds === MAX_SECONDS) {
      this.setState({ seconds: 0 });
    }
  }

  componentWillUnmount() {
    console.log('UNMOUNT');
    clearInterval(this.cronometerInterval);
  }

  render() {
    const { seconds } = this.state;

    return (
      <h2>
        {seconds}
      </h2>
    );
  }
}

export default Cronometer;

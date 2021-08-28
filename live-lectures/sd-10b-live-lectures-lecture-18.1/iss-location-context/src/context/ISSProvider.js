import React from 'react';
import ISSContext from './ISSContext';
import { getCurrentISSLocation } from '../services/issAPI';

class ISSProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      latitude: 75,
      longitude: 92,
      isFetching: false,
    };

    this.fetchISSLocation = this.fetchISSLocation.bind(this);
  }

  fetchISSLocation() {
    // setar o state isFetching para true
    // chamar a API
    // Armazenar o resultado da api no context

    this.setState({ isFetching: true }, async () => {
      const { iss_position: { latitude, longitude } } = await getCurrentISSLocation();
      this.setState({
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        isFetching: false,
      });
    });
  }

  render() {
    const { children } = this.props;
    return (
      <ISSContext.Provider
        value={ { ...this.state, fetchISSLocation: this.fetchISSLocation } }
      >
        {children}
      </ISSContext.Provider>
    );
  }
}

export default ISSProvider;

import React from 'react';
import ISSContext from '../context/ISSContext';

class ShowContext extends React.Component {
  render() {
    return (
      <ISSContext.Consumer>
        {({ name, lastName }) => (
          <span>
            Nome:
            {name}
            Last Name:
            {lastName}
          </span>
        )}
      </ISSContext.Consumer>
    );
  }
}

export default ShowContext;

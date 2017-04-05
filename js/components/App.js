import React from 'react';
import Relay from 'react-relay';

class App extends React.Component {
    render() {
      console.log(this.props);
        let headerText;
        return (
            <h1>hej</h1>
        );
    }
}

export default Relay.createContainer(App, {
  fragments: {
    transactions: () => Relay.QL`
      fragment on Transaction {
        amount,
        description
      }
    `
  }
});

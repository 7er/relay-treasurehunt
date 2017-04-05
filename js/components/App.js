import React from 'react';
import Relay from 'react-relay';

class App extends React.Component {
    render() {
        console.log("props", this.props);
        let headerText;
        return (
            <div>
                <h1>hej</h1>
                <p>{this.props.transactions.totalCount}</p>
            </div>
        );
    }
}

export default Relay.createContainer(App, {
    fragments: {
        transactions: () => Relay.QL`
      fragment on TransactionsConnection {
        totalCount      
      }
    `,
    }
});

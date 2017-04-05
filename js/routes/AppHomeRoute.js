import Relay from 'react-relay';

export default class extends Relay.Route {
    static queries = {
        transactions: (child) => {
            console.log("child", child);
            return Relay.QL`        
query AppQuery {
    allTransactions {
      ${child.getFragment('transactions')}
    }
}
`
        }
    };
    static routeName = 'AppHomeRoute';
}

import Relay from 'react-relay';

export default class extends Relay.Route {
  static queries = {
    transactions: () => Relay.QL`
      query {
        allTransactions
      }
    `,
  };
  static routeName = 'AppHomeRoute';
}

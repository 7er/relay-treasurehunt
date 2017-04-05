import Relay from 'react-relay';

export default class extends Relay.Route {
  static queries = {
    allTransactions: () => Relay.QL`
      query {
        allTransactions {
          totalCount
        }
      }
    `,
  };
  static routeName = 'AppHomeRoute';
}

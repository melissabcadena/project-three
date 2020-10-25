
import gql from 'graphql-tag';

export const QUERY_DRINKS = gql`
    query getDrinks() {
        drinks() {
            _id
            name
            description
            price
            quantity
            image
        }
    }
`;

export const QUERY_CHECKOUT = gql`
    query getCheckout($drinks: [ID]!) {
        checkout(drinks: $drinks) {
            session
        }
    }
`;

export const QUERY_ALL_DRINKS = gql`
  {
    drinks {
      _id
      name
      description
      price
      quantity
    }
  }
`;

export const QUERY_USER = gql`
{
  user {
    firstName
    lastName
    orders {
      _id
      purchaseDate
      drinks {
        _id
        name
        description
        price
        quantity
        image
      }
    }
  }
}
`;
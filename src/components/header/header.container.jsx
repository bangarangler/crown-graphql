import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import Header from './header.component.jsx'

const GET_CLIENT_PROPERTIES = gql`
  {
    cartHidden @client
    currentUser @client
  }
`;

const HeaderContainer = () => (
  <Query query={GET_CLIENT_PROPERTIES}>
    {
      ( data  ) => <Header hidden={data.cartHidden} currentUser={data.currentUser} />
    }
  </Query>
)

export default HeaderContainer;

const { gql } = require('apollo-boost');  // destructuring
// same as
//const gql = require('apollo-boost').gql;


module.exports = gql`
mutation createCountryMutation($name: String!, $cname: String!) {
    __typename
    createCountry(data: {name: $name, continent: {connect: {name: $cname}}}) {
      id
    }
  }
`;
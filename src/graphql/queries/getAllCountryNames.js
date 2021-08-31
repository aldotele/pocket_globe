const { gql } = require('apollo-boost');  // destructuring
// same as
//const gql = require('apollo-boost').gql;

module.exports = gql`
    query getAllCountryNames {
        countries(orderBy:name_ASC) {
            name
        }
    }
`;
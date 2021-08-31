const { gql } = require('apollo-boost');  // destructuring
// same as
//const gql = require('apollo-boost').gql;

module.exports = gql`
    query getAllContinents($first: Int = 10, $skip: Int = 0) {
        continents(orderBy:name_ASC, first: $first, skip: $skip) {
            name
            countries {
                name
            }
        }
    }
`;
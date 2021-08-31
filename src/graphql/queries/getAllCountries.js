const { gql } = require('apollo-boost');  // destructuring
// same as
//const gql = require('apollo-boost').gql;

module.exports = gql`
    query getAllCountries($skip: Int = 0) {
        countries(orderBy:name_ASC, skip: $skip) {
            name
            capital {
                name
            }
            continent {
                name
            }
        }
    }
`;
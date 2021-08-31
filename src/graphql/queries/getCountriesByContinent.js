const { gql } = require('apollo-boost');  // destructuring
// same as
//const gql = require('apollo-boost').gql;


module.exports = gql`
    query getAmericaCountries($name: String!) {
        continent(where: { name: $name}) {
            name
            countries(orderBy:name_ASC) {
                name
            }
        }
    }
`;
const { gql } = require('apollo-boost');  // destructuring
// same as
//const gql = require('apollo-boost').gql;


var countryName = "" 

module.exports = gql`
    query getCountryCapital($name: String!) {
        country(where: {name: $name}) {
            capital {
                name
            }
        }
    }
`;
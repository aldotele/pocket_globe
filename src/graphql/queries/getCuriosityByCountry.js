const { gql } = require('apollo-boost');  // destructuring
// same as
//const gql = require('apollo-boost').gql;


module.exports = gql`
    query getCuriosityByCountry($name: String!) {
        country(where: {name: $name}) {
            curiosity
        }
    }
`;



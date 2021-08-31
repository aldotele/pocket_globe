const inquirer = require('inquirer');
const graphql = require('./src/graphql');
const { gql } = require('apollo-boost');


async function main() {

    const {continent} = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'continent',
                message: 'Select Continent',
                choices: [
                    'Africa',
                    'America',
                    'Asia',
                    'Europe',
                    'Oceania'
                ]
            }
        ])

    //console.log(continent)
    const { data: continent_data } = await graphql.query({
        query: require(`./src/graphql/queries/getCountriesByContinent`),
        variables: {name: continent.toLowerCase()}
    })
    countries = continent_data.continent.countries.map(function(d) { return d["name"]; });
    //console.log(countries)

    const {country} = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'country',
                message: 'Select Country',
                choices: [
                    ...(
                        countries.map( a => a.charAt(0).toUpperCase() + a.substr(1) )
                    )
                ]
            }
        ])
    //console.log(country)

    const { data: capital_data } = await graphql.query({
        query: require(`./src/graphql/queries/getCountryCapital`),
        variables: {name: country.toLowerCase()}
    })

    console.log(capital_data.country.capital.name.toUpperCase())  // capital gets printed

}

main();





//console.log(process.env.NODE_ENV);
//console.log(process.env.GRAPHCMS_ENDPOINT);
//console.log(process.env.GRAPHCMS_TOKEN);

//console.log(process);

const ApolloClient = require('apollo-boost').default;
const fetch = require('node-fetch');
const dotenv = require('dotenv').config();

const client = new ApolloClient({
    uri: process.env.GRAPHCMS_ENDPOINT,
    fetch, // same as fetch: fetch the
    fetchOptions: {
        headers: {
            Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
        }
    }
});

module.exports = client;
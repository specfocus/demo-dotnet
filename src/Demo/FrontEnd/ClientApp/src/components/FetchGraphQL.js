import React from 'react';
import GraphiQL from 'graphiql';
import axios from 'axios';
import 'graphiql/graphiql.css';

function graphQLFetcher(graphQLParams) {
    return axios({
        method: 'POST',
        url: window.location.origin + '/api/graphql',
        data: graphQLParams
    }).then(resp => resp.data);
}

export const FetchGraphQL = () => (
    <GraphiQL fetcher={graphQLFetcher} />
);

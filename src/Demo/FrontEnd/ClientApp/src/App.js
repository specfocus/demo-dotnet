import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { FetchGraphQL } from './components/FetchGraphQL';
import { Counter } from './components/Counter';

export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/counter' component={Counter} />
                    <Route path='/fetch/data' component={FetchData} />
                    <Route path='/fetch/graphql' component={FetchGraphQL} />
                </Switch>
            </Layout>
        );
    }
}

import React from 'react';
import { Route, Switch } from 'react-router';
import { RepositoriesList } from '../components/repositories-list/repositories-list';
import { RepositoryInfo } from '../components/repository-info/repository-info';

export const RootRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={RepositoriesList} />
            <Route exact path="/:repoName" component={RepositoryInfo} />
        </Switch>
    );
};

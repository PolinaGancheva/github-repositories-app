import React, { useEffect, useState } from 'react';
import { getGithubRepositories } from '../../api/requests';
import { IGithubRepository } from '../../interfaces/interfaces';
import classes from './repositories-list.module.css';
import { Repository } from '../repository/repository';
import { Spinner } from '../../common-ui/spinner/spinner';

export const RepositoriesList = () => {
    const [githubRepositories, setGithubRepositories] = useState<IGithubRepository[]>();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await getGithubRepositories();
                setGithubRepositories(result);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {isError && <div>Something went wrong ...</div>}
            {isLoading ? (
                <Spinner />
            ) : (
                <div className={classes.wrapper}>
                    {githubRepositories && githubRepositories.map(repository => <Repository githubRepository={repository} key={repository.id} />)}
                </div>
            )}
        </>
    );
};

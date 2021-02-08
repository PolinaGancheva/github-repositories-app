import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRepositoryInfo } from '../../api/requests';
import { CalendarIcon, EyeIcon, ForkIcon, RepoIcon } from '../../common-ui/icons/icons';
import { IRepoInfo } from '../../interfaces/interfaces';
import classes from './repository-info.module.css';
import { Spinner } from '../../common-ui/spinner/spinner';

interface ParamTypes {
    repoName: string;
}

export const RepositoryInfo = () => {
    const [repositoryInfo, setRepositoryInfo] = useState<IRepoInfo>();
    const { repoName } = useParams<ParamTypes>();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await getRepositoryInfo(repoName);
                setRepositoryInfo(result);
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
                <Spinner/>
            ) : (
                <div className={classes.wrapper}>
                    <div className={classes.titleWrapper}>
                        <RepoIcon />
                        <span className={classes.title}>{repositoryInfo?.full_name}</span>
                    </div>
                    <div className={classes.info}>
                        <div className={classes.owner}>
                            <img className={classes.avatar} src={repositoryInfo?.owner.avatar_url} alt={`${repositoryInfo?.owner.id} avatar`} />
                            <span className={classes.name}>{repositoryInfo?.owner.login}</span>
                        </div>
                        <div className={classes.description}>
                            <div className={classes.row}>
                                <CalendarIcon />
                                created: {repositoryInfo?.created_at.replace('T', ' ').slice(0, -1)}
                            </div>
                            <div className={classes.row}>
                                <CalendarIcon />
                                pushed: {repositoryInfo?.pushed_at.replace('T', ' ').slice(0, -1)}
                            </div>
                            <div className={classes.row}>
                                <ForkIcon />
                                forks: {repositoryInfo?.forks_count}
                            </div>
                            <div className={classes.row}>
                                <EyeIcon />
                                watchers: {repositoryInfo?.watchers_count}
                            </div>
                        </div>
                    </div>
                    <div className={classes.info}>{repositoryInfo?.description}</div>
                </div>
            )}
        </>
    );
};


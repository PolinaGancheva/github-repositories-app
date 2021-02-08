import axios from 'axios';
import { IGithubRepository, IRepoInfo } from '../interfaces/interfaces';
import { GithubEndpoints } from './endpoints';

export const getGithubRepositories = async (): Promise<IGithubRepository[]> => {
    const res = await axios.get(process.env.REACT_APP_API_ENDPOINT + GithubEndpoints.reposList);
    return res.data;
};

export const getRepositoryInfo = async (repoName: string): Promise<IRepoInfo> => {
    const res = await axios.get(process.env.REACT_APP_API_ENDPOINT + GithubEndpoints.reposInfo(repoName));
    return res.data;
};

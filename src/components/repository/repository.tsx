import React from 'react';
import { Link } from 'react-router-dom';
import { RepoIcon } from '../../common-ui/icons/icons';
import { IGithubRepository } from '../../interfaces/interfaces';
import classes from './repository.module.css';

interface IRepository {
    githubRepository: IGithubRepository;
}

export const Repository = (props: IRepository) => {
    return (
        <div className={classes.repository}>
            <Link className={classes.text} to={`/${props.githubRepository.name}`}>
                <h2 className={classes.titleWrapper}>
                    <RepoIcon />
                    <span className={classes.title}>{props.githubRepository.name}</span>
                </h2>
            </Link>
            <div className={classes.owner}>
                <h6 className={classes.name}>
                    Built by:
                    <img className={classes.avatar} src={props.githubRepository.owner.avatar_url} alt={`${props.githubRepository.owner.id} avatar`} />
                    {props.githubRepository.owner.login}
                </h6>
            </div>
        </div>
    );
};

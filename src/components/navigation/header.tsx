import React from 'react';
import { Link } from 'react-router-dom';
import { GithubLogoIcon } from '../../common-ui/icons/icons';
import classes from './header.module.css';

export const Header = () => {
    return (
        <header className={classes.wrapper}>
            <h1 className={classes.header}>
                <Link to="/" className={classes.link}>
                    <GithubLogoIcon />
                    GitHub Repositories
                </Link>
            </h1>
        </header>
    );
};

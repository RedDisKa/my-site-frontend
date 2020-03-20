import React from 'react'
import s from './navbar.module.scss'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { routes } from '../../consts/routes'

export const NavBar = () => (
    <div className={s.navbar}>
        <div className={s.spacer} />
        <ul>
            <li>
                <Link to={routes.homepage()}>Home</Link>
            </li>
            <li>
                <Link to={routes.blog()}>Blog</Link>
            </li>
        </ul>
        <div className={classnames(s.spacer, s.socials_container)}>
            <a
                href="https://github.com/AnastasiaMineva"
                target="_blank"
                rel="noopener noreferrer"
                title="Go to GitHub profile"
            >
                <span className={s.github_icon} />
            </a>
            <a
                href="https://www.linkedin.com/in/anastasia-mineva-8388986a/"
                target="_blank"
                rel="noopener noreferrer"
                title="Go to LinkedIn profile"
            >
                <span className={s.linkedin_icon} />
            </a>
        </div>
    </div>
)

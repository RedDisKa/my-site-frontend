import React, { useState } from 'react'
import s from './project_card.module.scss'
import classnames from 'classnames'

export const ProjectCard = ({ project }) => {
    const [hover, setHover] = useState(false)

    return (
        <div
            className={classnames(s.card_container, hover && s.hover)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img
                className={s.project_image}
                src={project.image}
                alt={project.name}
            />
            <div className={s.project_info_container}>
                <p className={s.name}>{project.name}</p>
                <a
                    className={s.url}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Go to project site
                </a>
                <p className={s.description}>{project.description}</p>
            </div>
        </div>
    )
}

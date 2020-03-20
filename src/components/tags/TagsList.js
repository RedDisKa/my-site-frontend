import React from 'react'
import s from './tags_list.module.scss'

export const TagsList = ({ title, tags, onTagClick, className, showCount }) => {
    return (
        <p className={className ? className : s.article_tags_title}>
            <span>{title}: </span>
            {(tags || []).map((tag, key) => (
                <React.Fragment key={key}>
                    <span
                        className={s.article_tag}
                        onClick={() => onTagClick(tag)}
                    >
                        {tag.tag}
                        {showCount && tag.count && ` (${tag.count})`}
                    </span>
                    {key !== tags.length - 1 && (
                        <span
                            className={
                                className ? className : s.article_tags_title
                            }
                        >
                            ,{' '}
                        </span>
                    )}
                </React.Fragment>
            ))}
        </p>
    )
}

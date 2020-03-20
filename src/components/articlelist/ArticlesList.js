import React from 'react'
import s from './article_list.module.scss'
import { routes } from '../../consts/routes'
import { Link } from 'react-router-dom'
import { TagsList } from '../tags/TagsList'
import { Date } from '../date/Date'

export const ArticlesList = ({ articles, onTagClick }) => (
    <div className={s.articles_list}>
        {articles.map((article, key) => (
            <React.Fragment key={key}>
                <Link to={routes.article(article.name)}>
                    <h3 className={s.article_title}>{article.title}</h3>
                </Link>
                <Date date={article.createAt} />
                <p className={s.article_preview}>{article.previewText}</p>
                {article.tags && article.tags.length > 0 && (
                    <TagsList
                        title="Tags"
                        tags={article.tags.map((tag) => ({ tag, count: null }))}
                        onTagClick={onTagClick}
                        showCount={false}
                    />
                )}
                <div className={s.horisontal_divider} />
            </React.Fragment>
        ))}
    </div>
)

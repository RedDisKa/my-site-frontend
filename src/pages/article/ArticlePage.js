import React, { useState, useEffect } from 'react'
import s from './article_page.module.scss'
import Parser from 'html-react-parser'
import classnames from 'classnames'
import { ArticlesList } from '../../components/articlelist/ArticlesList'
import { CommentsList } from '../../components/comments/CommentsList'
import { AddCommentForm } from '../../components/comments/AddCommentForm'
import { Date } from '../../components/date/Date'
import { TagsList } from '../../components/tags/TagsList'
import { routes } from '../../consts/routes'

export const ArticlePage = ({ match, history }) => {
    const name = match.params.name

    const [articleInfo, setArticleInfo] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`)
            const body = await result.json()
            setArticleInfo(body)
        }
        fetchData()
    }, [name])

    if (!articleInfo) return <p>Loading.. .</p>

    const { title, content, relatedArticles, createdAt, tags } = articleInfo

    const onTagClick = tag => {
        history.push(routes.blog(tag))
    }

    return (
        <React.Fragment>
            <h1 className={classnames(s.page_title, s.margin_title)}>
                {title}
            </h1>
            <div className={s.article_info}>
                <Date date={createdAt} />
                <TagsList title="Tags" onTagClick={onTagClick} tags={tags} />
            </div>
            {content && (
                <div className={s.article_content}>{Parser(content)}</div>
            )}
            <CommentsList comments={articleInfo.comments} />
            <AddCommentForm
                articleName={name}
                setArticleInfo={setArticleInfo}
            />
            <h3 className={classnames(s.page_subtitle, s.margin_subtitle)}>
                Other Articles
            </h3>
            <ArticlesList
                articles={relatedArticles || []}
                onTagClick={onTagClick}
            />
        </React.Fragment>
    )
}

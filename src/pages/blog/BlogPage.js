import React, { useState, useEffect } from 'react'
import s from './blog_page.module.scss'
import { parse } from 'query-string'
import { ArticlesList } from '../../components/articlelist/ArticlesList'
import { TagsList } from '../../components/tags/TagsList'
import { routes } from '../../consts/routes'

export const BlogPage = ({ history, location }) => {
    const [articles, setArticles] = useState()
    const [tags, setTags] = useState()

    const pathTag = parse(location.search).tag

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articlesList`)
            const body = await result.json()
            setArticles(body)
        }
        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/tagsList`)
            const body = await result.json()
            setTags(body)
        }
        fetchData()
    }, [])

    if (!articles) return <p>Loading...</p>

    const onTagClick = (tag) => {
        history.push(routes.blog(tag.tag !== 'all' ? tag.tag : undefined))
    }

    return (
        <React.Fragment>
            <h1 className={s.page_title}>{pathTag ? `#${pathTag}` : 'Blog'}</h1>
            <div className={s.blog_container}>
                <ArticlesList
                    articles={
                        pathTag
                            ? articles.filter((article) =>
                                  article.tags.includes(pathTag)
                              )
                            : articles
                    }
                    onTagClick={onTagClick}
                />
                <div className={s.blog_menu}>
                    {tags && tags.length > 0 && (
                        <TagsList
                            title="Search by tags"
                            tags={[{ tag: 'all', count: null }].concat(tags)}
                            onTagClick={onTagClick}
                            className={s.tags_list_search}
                            showCount={true}
                        />
                    )}
                </div>
            </div>
        </React.Fragment>
    )
}

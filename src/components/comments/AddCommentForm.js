import React, { useState } from 'react'
import s from './add_comment_form.module.scss'

export const AddCommentForm = ({ articleName, setArticleInfo }) => {
    const [username, setUsername] = useState('')
    const [commentText, setCommentText] = useState('')

    const addComment = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comment`, {
            method: 'post',
            body: JSON.stringify({ username, text: commentText }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const body = await result.json()
        setArticleInfo(body)
        setUsername('')
        setCommentText('')
    }

    return (
        <div className={s.add_comment_container}>
            <h3>Add a Comment</h3>
            <label>
                Name:
                <input
                    className={s.input}
                    type="text"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                />
            </label>
            <label>
                Comment:
                <textarea
                    className={s.input}
                    rows="4"
                    cols="50"
                    value={commentText}
                    onChange={event => setCommentText(event.target.value)}
                />
            </label>
            <button onClick={() => addComment()}>Add Comment</button>
        </div>
    )
}

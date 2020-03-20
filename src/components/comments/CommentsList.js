import React from 'react'
import s from './comments_list.module.scss'
import classnames from 'classnames'

export const CommentsList = ({ comments }) => (
    <React.Fragment>
        <h3 className={classnames(s.page_subtitle, s.margin_subtitle)}>
            Comments
        </h3>
        {comments.map((comment, key) => (
            <div key={key} className="comment">
                <h4>{comment.username}</h4>
                <p>{comment.text}</p>
            </div>
        ))}
    </React.Fragment>
)

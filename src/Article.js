import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

export default class Article extends Component {

    static propTypes = {
      article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    }


    render() {
        const { article, isOpen, openArticle } = this.props

        const body = isOpen ? <section>{article.text}<CommentList comments = {article.comments}/></section> : null

        return (
            <div>
                <h3 onClick = {openArticle}>{article.title}</h3>
                {body}
            </div>
        )
    }
}

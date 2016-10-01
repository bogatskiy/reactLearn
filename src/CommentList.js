import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentList extends Component {

  state = {
    isOpen: false
  }

  render() {

    const { comments } = this.props
    const { isOpen } = this.state

    const buttonState = isOpen ? 'Закрыть' : 'Открыть'

    const commentComponents = isOpen ? comments.map(comment =>
      <li key={comment.id}><Comment comment = {comment}/></li>) : null

    const body = comments ? <div><button onClick = {this.toggleOpen}>{buttonState} комментарии</button><ul>{commentComponents}</ul></div> : <span>no comments</span>

    return (body)
  }

  toggleOpen = ev => {
      this.setState({
          isOpen: !this.state.isOpen
      })
  }
}

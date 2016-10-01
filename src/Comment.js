import React from 'react'
import CommentList from './CommentList'

export default (props) => {
    const { comment } = props

    console.log(comment);

    var divStyle = {
  color: 'red'
};



    return <div><p style={divStyle}>{comment.user}</p><p>{comment.text}</p></div>
}

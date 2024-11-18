import React, { useState } from 'react'
import useCommentTree from '../hooks/use-comments-tree';
import Comment from "./comment"
import "./style.css"
const NestedComment = ({
    comments = [],
    onSubmit = () => {},
    onEdit = () => {},
    onDelete = () => {},
}) => {

const [comment, setComment] = useState("");
const {
  comments: commentsData, 
  insertComment,
  deleteComment,
  editComment
} = useCommentTree(comments);

const handleReply = (commentId, content) => {
  insertComment(commentId, content);
  onSubmit(content);
}
const handleSubmit = () => {
  if(comment){
    handleReply(undefined, comment);
    setComment("");
  }
}
const handleEdit = (commentId, content) => {
  editComment(commentId, content);
  onEdit(content)
}
const handleDelete = (commentId) => {
    deleteComment(commentId);
    onDelete(commentId)
}
  return (
    <>
    <div className='add-comment'>
        <textarea 
           value={comment}
           onChange={(e) =>setComment(e.target.value)}
           rows={3}
           cols={50}
           className="comment-textarea"
           placeholder="Add a new comment..."
        />
        <button className='comment-button' onClick={handleSubmit}>Add Comment</button>
    </div>
    {commentsData.map((comment) => (
        <Comment
            key={comment.id}
            comment={comment}
            onSubmitContent = {handleReply}
            onEditComment = {handleEdit}
            onDeleteComment = {handleDelete}
        />
    ))}
    </>
  )
}

export default NestedComment
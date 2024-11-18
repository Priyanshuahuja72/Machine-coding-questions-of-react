import React, { useState } from 'react'

const Comment = ({
  comment = {}, 
  onSubmitContent = () => {},
  onEditComment = () => {},
  onDeleteComment = () => {}
}) => {
  const [expand, setExpand] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const [editMode, setEditMode] = useState(false);
  const toggleExpand = () => {
    setExpand(!expand);
  }
  const handleReplySubmit = () => {
    if(replyContent){
      onSubmitContent(comment.id, replyContent);
      setReplyContent("");
    }
  }
  return (
    <div className='comment'>
      <>
        <p>{comment.content}</p>
        <p className="comment-info">{comment.votes}</p>
        <p className="comment-info">{new Date(comment.timestamp).toLocaleString()}</p>
      </>
      <div className="comment-actions">
        <button className='comment-button' onClick={toggleExpand}>
          {expand ? "hide Replies": "Reply"}
        </button>
        <button className="comment-button" onClick={onEditComment}>Edit</button>
        <button className="comment-button" onClick={() => onDeleteComment(comment.id)}>Delete</button>
      </div>
    {expand && (
      <div className="comment-replies">
        <div className="add-comment">
          <textarea 
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            placeholder="Add a reply..."
            rows={3}
            cols={50}
            className="comment-textarea"
          />
          <button className='comment-button' onClick={handleReplySubmit} >
            Submit Reply
          </button>
        </div>
        {comment?.replies?.map((reply) => (
          <Comment
            key={reply.id}
            comment={reply}
            onSubmitContent={onSubmitContent}
            onEditComment={onEditComment}
            onDeleteComment={onDeleteComment}
          />
        ))}
      </div>
    )}
    </div>
  )
}

export default Comment
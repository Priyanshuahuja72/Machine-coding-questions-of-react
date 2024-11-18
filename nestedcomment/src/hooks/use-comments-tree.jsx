import React, { useState } from 'react'

const useCommentTree = (initialComments) => {
  const [comments, setComments] = useState(initialComments);

  const insertNode = (tree, commentId, content) => {
      return tree.map((comment) => {
        if(comment.id === commentId){
          return {
            ...comment,
            replies: [...comment.replies, content],
          }
        }else if(comment.replies && comment.replies.length > 0){
          return {
            ...comment,
            replies: insertNode(comment.replies, commentId, content),
          };
        }
        return comment;
      });
  }

  const insertComment = (commentId, content) => {
    const newComment = {
      id: Date.now(),
      content,
      votes: 0,
      timestamp: new Date().toISOString(),
      replies: [],
    }
    if(commentId){
      setComments((prevComment) => insertNode(prevComment, commentId, newComment));
    }else{ //this is adding new comment but not in replies array or not in replies, reply.
      setComments((prevComment) => [newComment, ...prevComment]);
    }
  }
//now the function of edit node 
const editNode = (tree, nodeId, content) => {
  return tree.map((node) => {
    if(node.id === nodeId){
      return {
        ...node,
        content: content,
        timestamp: new Date().toISOString(),
      }
    }else if(node.replies && node.replies.length > 0){
      return {
        ...node,
        replies: editNode(node.replies, nodeId, content)
      };
    }
    return node
  });
}
const editComment = (commentId, content) => {
  setComments((prevNode) => editNode(prevNode, commentId, content))
}

const deleteNode = (tree, nodeId) => {
  return tree.reduce((acc, node) => {
      if (node.id === nodeId){
        return acc;
      } else if(node.replies && node.replies.length > 0){
        node.replies = deleteNode(node.replies, nodeId);
      }
      return [...acc, node];
  }, []);
};      

const deleteComment = (commentId) => {
  setComments((prevComment) => deleteNode(prevComment, commentId))
}
  return{
    comments,
    insertComment,
    editComment,
    deleteComment
  }
}

export default useCommentTree;
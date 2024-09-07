import React from "react";

const Comments = ({comments}) => {
  
  


  return <div>
    {
        comments.map(comment => {
            return <div>
                <h1>{comment.name}</h1>
                <h3>{comment.comment}</h3>
                <div className="pl-5  border-l-2"><Comments comments={comment.replies}/></div>
            </div>
        })

    }

  </div>;
};

export default Comments;

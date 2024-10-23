// app/components/CommentList.tsx

const CommentList = ({ comments }: { comments: string[] }) => {
    return (
      <div>
        <h2>Comments</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CommentList;
  
// app/components/CommentForm.tsx

import { useState } from 'react';

const CommentForm = ({ onCommentSubmit }: { onCommentSubmit: (comment: string) => void }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      onCommentSubmit(comment);
      setComment(''); // Clear the input field after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Leave a comment..."
        required
      />
      <button type="submit">Post Comment</button>
    </form>
  );
};

export default CommentForm;

import React, { useState, useRef } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { commentPost } from '../../actions/posts';

export default function CommentSection({ post }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState('');

  const commentsRef = useRef();

  const user = JSON.parse(localStorage.getItem('profile'));

  const handleClick = async () => {
    const finalComment = `${user.result.name}: ${comment}`;
    const newComments = await dispatch(commentPost(finalComment, post._id));
    setComments(newComments);
    setComment('');

    commentsRef.current.scrollIntoView({ behavior:'smooth'});
  };

  return (
    <div className={classes.commentsOuterContainer}>
      <div style={{ width: '100%', marginRight:'10px'}}>
        <Typography gutterBottom variant="h6">Comments</Typography>
        <div className={classes.commentsInnerContainer}> 
          {
            comments.length > 0 ? comments.map((c, i) => (
              <Typography key={i} gutterBottom variant="subtitle1">
                <strong>{c.split(': ')[0]}</strong> {c.split(': ')[1]}
              </Typography>
            )) : <Typography variant="body2"> It's empty here....</Typography>
          }
          <div ref={commentsRef} />
        </div>
      </div>
      {user?.result?.name && (
        <div style={{ width:'100%' }}>
          <Typography gutterBottom variant="h6">Write a Comment</Typography>
          <TextField
            fullWidth
            minRows={4}
            variant="outlined"
            label="Comment"
            value={comment}
            multiline
            onChange={(e) => setComment(e.target.value)}
          />
          <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment} variant="contained" color="primary" onClick={handleClick}>Comment</Button>
        </div>
      )}
    </div>
  );
}

import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import CardActions from '@mui/material/CardActions';

export function Counter() {

  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);

  return (
    <CardActions>
      <div>
        <IconButton color='primary' onClick={() => setLike(like + 1)} aria-label="delete">
          <Badge badgeContent={like} color="primary">
            👍</Badge></IconButton>

        <IconButton color='error' onClick={() => setDisLike(dislike + 1)} aria-label="delete">
          <Badge badgeContent={dislike} color="error">
            👎</Badge></IconButton>
     

      </div>
    </CardActions>
  );
}

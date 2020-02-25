import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

type Props = {
  onClick: React.MouseEventHandler<HTMLElement>;
};

const AddButton: React.FC<Props> = ({ onClick }) => {
  const classes = useStyles();
  return (
    <Fab
      color="primary"
      aria-label="add"
      className={classes.fab}
      onClick={onClick}
    >
      <AddIcon />
    </Fab>
  );
};

export default AddButton;

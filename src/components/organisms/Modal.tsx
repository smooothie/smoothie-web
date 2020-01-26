import React from 'react';
import Container from '@material-ui/core/Container';
import MuiModal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 0,
    borderRadius: '6px',
  },
}));

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
  const classes = useStyles();
  return (
    <MuiModal open={isOpen} onClose={onClose}>
      <Container maxWidth="xs" className={classes.paper}>
        {children}
      </Container>
    </MuiModal>
  );
};

export default Modal;

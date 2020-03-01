import React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

const Loader: React.FC<CircularProgressProps> = props => (
  <Box display="flex" justifyContent="center" padding={4} width="100%">
    <CircularProgress {...props} />
  </Box>
);

export default Loader;

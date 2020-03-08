import React from 'react';

import ErrorIcon from '@material-ui/icons/Error';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const ErrorMessage: React.FC = ({ children }) => {
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding={4}
    >
      <Box paddingRight={1}>
        <ErrorIcon color="error" />
      </Box>
      <Typography color="error">{children}</Typography>
    </Box>
  );
};

ErrorMessage.defaultProps = {
  children: 'Щось пішло не так',
};

export default ErrorMessage;

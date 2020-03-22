import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

type Props = {
  onSuccess: () => void;
  goBack: () => void;
};

const Success: React.FC<Props> = ({ onSuccess, goBack }) => {
  return (
    <Box>
      <Typography component="h3" variant="h5" align="center">
        Транзакції імпортовано успішно!
      </Typography>
      <Box paddingBottom={2}>
        <Box paddingBottom={2} paddingTop={4}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => onSuccess()}
          >
            Дякую
          </Button>
        </Box>
        <Button
          fullWidth
          variant="contained"
          color="default"
          onClick={() => goBack()}
        >
          Назад
        </Button>
      </Box>
    </Box>
  );
};

export default Success;

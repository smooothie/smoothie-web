import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

export type AddMethod = 'accountForm' | 'monobankImport';

type Props = {
  onSubmit: (method: AddMethod) => void;
};

const AddMethodChoice: React.FC<Props> = ({ onSubmit }) => {
  const [value, setValue] = useState<AddMethod>('accountForm');
  return (
    <Box>
      <FormControl component="fieldset">
        <FormLabel component="legend">Виберіть спосіб додавання</FormLabel>
        <RadioGroup
          aria-label="addMethodChoices"
          name="addMethodChoices"
          value={value}
          onChange={e => setValue(e.target.value as AddMethod)}
        >
          <FormControlLabel
            value="accountForm"
            control={<Radio />}
            label="Ручне додавання"
          />
          <FormControlLabel
            value="monobankImport"
            control={<Radio />}
            label="Імпорт з Monobank"
          />
        </RadioGroup>
      </FormControl>
      <Box paddingBottom={2} paddingTop={4}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => onSubmit(value)}
        >
          Далі
        </Button>
      </Box>
    </Box>
  );
};

export default AddMethodChoice;

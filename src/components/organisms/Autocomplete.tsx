import React from 'react';
import TextField from '@material-ui/core/TextField';
import MuiAutocomplete from '@material-ui/lab/Autocomplete';
import { ApiResponse } from 'apisauce';

import api from 'api';

type Option = Record<string, string>;

type Props = {
  fetchEndpoint: string;
  label: string;
  onChange: (value: Option | null) => void;
  onInputChange: (input: string) => void;
  getOptionLabel: (option: Option) => string;
  required?: boolean;
};

// TODO: add fetching memoization
// TODO: add input debouncing

const Autocomplete: React.FC<Props> = ({
  fetchEndpoint,
  label,
  onChange,
  onInputChange,
  getOptionLabel,
  required,
}) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<Option[]>([]);
  const [input, setInput] = React.useState('');

  const fetchOptions = React.useCallback(
    async (search: string) => {
      const response: ApiResponse<Option[], any> = await api.get(
        fetchEndpoint,
        {
          search: search || undefined,
          limit: search ? undefined : 10,
        }
      );
      if (response.ok && Array.isArray(response.data)) {
        setOptions(response.data);
      }
    },
    [fetchEndpoint]
  );

  React.useEffect(() => {
    if (open) {
      fetchOptions(input);
    }
    return () => {
      setOptions([]);
    };
  }, [fetchOptions, open, input]);

  return (
    <MuiAutocomplete
      onChange={(event: any, value: Option | null) => onChange(value)}
      getOptionLabel={getOptionLabel}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      options={options}
      inputValue={input}
      onInputChange={(event, value) => {
        setInput(value);
        onInputChange(value);
      }}
      freeSolo={true}
      renderInput={params => (
        <TextField {...params} label={label} required={required} />
      )}
    />
  );
};

export default Autocomplete;

import { useCallback, useState } from 'react';

export default (initialState = false): [boolean, () => void, () => void] => {
  const [value, setValue] = useState(initialState);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  return [value, setTrue, setFalse];
};

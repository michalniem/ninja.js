import {FormEvent, useState} from 'react';

function useInput(initialValue = '') {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (event: FormEvent<HTMLInputElement>): void => {
    setValue(event.currentTarget.value);
  };

  const reset = () => {
    setValue('');
  };

  return [value, onChange, reset];
}

export default useInput;

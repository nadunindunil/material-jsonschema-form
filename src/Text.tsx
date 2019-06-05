import * as React from 'react';
import TextField from '@material-ui/core/TextField';

export type MaterialTextFieldProps = {
  meta: any;
  input: any;
  label: string;
};

function MaterialTextField({ input, label, meta: { touched, error, warning }, ...custom }: MaterialTextFieldProps) {
  // not touched but error should be
  if (error === 'Must be 0 or larger number' || error === 'Must be 1 or larger number') {
    return <TextField label={label} {...input} {...custom} error={true} helperText={error} fullWidth />;
  }
  if (touched && error) {
    return <TextField label={label} {...input} {...custom} error={true} helperText={error} fullWidth />;
  } else if (warning) {
    return (
      <TextField
        label={label}
        {...input}
        {...custom}
        helperText={warning}
        FormHelperTextProps={{
          style: {
            color: 'green'
          }
        }}
        fullWidth
      />
    );
  } else {
    return <TextField label={label} {...input} {...custom} fullWidth />;
  }
}

export default MaterialTextField;

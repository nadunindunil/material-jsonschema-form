import * as React from 'react';
import TextField from '@material-ui/core/TextField';

export type MaterialSelectFieldProps = {
  instantError: boolean;
  meta: any;
  input: any;
  label: string;
  children: any;
};

// Must be 0 or larger number Must be 1 or larger number
// deleted index
function MaterialSelectField({
  input,
  label,
  meta: { touched, error, warning },
  children,
  instantError,
  ...custom
}: MaterialSelectFieldProps) {
  if ((touched || instantError) && error) {
    return (
      <TextField
        label={label}
        {...input}
        onChange={(event: any) => input.onChange(event.target.value)}
        children={children}
        {...custom}
        select
        error={true}
        helperText={error}
        fullWidth
      />
    );
  } else if (warning) {
    return (
      <TextField
        label={label}
        {...input}
        onChange={(event: any) => input.onChange(event.target.value)}
        children={children}
        {...custom}
        select
        helperText={warning}
        fullWidth
        FormHelperTextProps={{
          style: {
            color: 'green'
          }
        }}
      />
    );
  } else {
    return (
      <TextField
        label={label}
        {...input}
        onChange={(event: any) => input.onChange(event.target.value)}
        children={children}
        {...custom}
        select
        fullWidth
      />
    );
  }
}

export default MaterialSelectField;

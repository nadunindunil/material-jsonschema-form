import * as React from 'react';
import { Field, FieldArray, InjectedFormProps } from 'redux-form';
import Text from './Text';
import { Card, Typography, Grid, CardContent, Button, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import FormTable from './FormTable';
import Select from './Select';

export const styles: any = (theme: any) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginTop: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 4,
    width: '100%'
  },
  longTextField: {
    marginLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 4
  },
  menu: {
    width: 400
  },
  table: {
    minWidth: 300,
    marginBottom: theme.spacing.unit * 2
  },
  textAlignCenter: {
    textAlign: 'center',
    margin: 'auto'
  },
  topMargin: {
    marginBottom: theme.spacing.unit * 3
  },
  topMarginButton: {
    marginTop: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 1
  },
  header: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    padding: 15
  },
  headerContacts: {
    marginTop: theme.spacing.unit * 5,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    padding: 15,
    marginBottom: 0
  }
});

export type MaterialFormProps = {
  classes?: any;
  handleSubmit?: any;
  pristine?: any;
  submitting?: any;
  schema?: any;
  previousPage?: any;
  isFirst?: boolean;
};

class MaterialForm extends React.Component<MaterialFormProps & InjectedFormProps> {
  render() {
    const { classes, handleSubmit, pristine, submitting, schema, previousPage, isFirst } = this.props;

    let ParentComp;

    if (typeof schema.isCard === 'boolean' && !schema.isCard) {
      ParentComp = React.Fragment;
    } else {
      ParentComp = Card;
    }

    return (
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <ParentComp>
          {schema.title ? (
            <Typography className={classes.header} variant="h6" gutterBottom>
              {schema.title}
            </Typography>
          ) : null}

          <CardContent>
            <Grid container spacing={8} style={{ flex: 1 }} justify="center">
              {schema.properties.map((item: any, index: number) => {
                if (item.component === 'text') {
                  return (
                    <Grid item xs={4} key={index}>
                      <Field
                        name={item.name}
                        component={Text}
                        label={item.label}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                  );
                }
                if (item.component === 'select') {
                  return (
                    <Grid item xs={4} key={index}>
                      <Field
                        name={item.name}
                        component={Select}
                        label={item.label}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                      >
                        {item.elements.map((option: any) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Field>
                    </Grid>
                  );
                }
                if (item.component === 'table') {
                  return (
                    <Grid item xs={10} key={index}>
                      <FieldArray
                        name={item.name}
                        title={item.title}
                        component={FormTable as any}
                        rows={item.rows}
                        key={index}
                      />
                    </Grid>
                  );
                }
                return null;
              })}
            </Grid>
          </CardContent>
        </ParentComp>

        {!isFirst ? (
          <Button
            className={classes.topMarginButton}
            variant="contained"
            disabled={pristine || submitting}
            onClick={previousPage}
          >
            Previous
          </Button>
        ) : null}

        <Button
          className={classes.topMarginButton}
          variant="contained"
          color="primary"
          type="submit"
          disabled={pristine || submitting}
        >
          Next
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(MaterialForm);

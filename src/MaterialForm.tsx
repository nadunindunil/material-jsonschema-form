import * as React from 'react';
import { Field, FieldArray } from 'formik';
import { TextField } from 'formik-material-ui';
import { Card, Typography, Grid, CardContent, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
// import FormTable from './FormTable';
import Wizard from './Wizard';
import FormTable from './FormTable';

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
  values?: any;
};

class MaterialForm extends React.Component<any> {
  render() {
    const { classes, schema, values } = this.props;
    let ParentComp; // parent component can be any other react component

    if (typeof schema.isCard === 'boolean' && !schema.isCard) {
      ParentComp = React.Fragment;
    } else {
      ParentComp = Card;
    }

    return (
      <Wizard.Page>
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
                        component={TextField}
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
                        component={TextField}
                        label={item.label}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        select
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
                        render={arrayHelpers => (
                          <FormTable
                            arrayHelpers={arrayHelpers}
                            title={item.title}
                            rows={item.rows}
                            name={item.name}
                            values={values}
                          />
                        )}
                      />
                    </Grid>
                  );
                }
                return null;
              })}
            </Grid>
          </CardContent>
        </ParentComp>
      </Wizard.Page>
    );
  }
}

export default withStyles(styles)(MaterialForm);

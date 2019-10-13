import * as React from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MaterialForm from './MaterialForm';
import Wizard from './Wizard';

const styles: any = {
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  root: {
    flexGrow: 1,
    textAlign: 'center' // TODO
  },
  marginBottomButton: {
    marginTop: 15
  }
};

export type FormProps = {
  classes: any;
  schema: {
    formName: string;
    forms: any;
  };
  onSubmit: Function;
  initialValues: object;
};

export class Form extends React.Component<FormProps> {
  getSteps() {
    let nameList = this.props.schema.forms.map((form: any) => form.title);
    nameList.push('Preview');
    return nameList;
  }

  render() {
    const steps = this.getSteps();
    const { classes, schema, initialValues, onSubmit } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Wizard
              formSchema={schema}
              steps={steps}
              initialValues={initialValues}
              onSubmit={(values: any, actions: any) => {
                onSubmit(values, actions);
                actions.setSubmitting(false);
              }}
            >
              {this.props.schema.forms.map((form: object, index: number) => {
                return <MaterialForm schema={form} key={index} />;
              })}
            </Wizard>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Form);

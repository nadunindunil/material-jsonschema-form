import * as React from 'react';

import { Stepper, Step, StepLabel, Grid,Card, CardContent, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { reduxForm } from 'redux-form';
import Preview from './Preview';
import MaterialForm from './MaterialForm';

const styles: any = {
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  root: {
    flexGrow: 1
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
};

export type FormState = { activeStep: number };

export class Form extends React.Component<any,any> {
  constructor(props: FormProps, context?: any) {
    super(props,context);
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.state = {
      activeStep: 1
    };
  }

  submit = (values: any) => {
    console.log(values);
    // this.props.actions.sumbitForm(data);
  };

  getStepContent(stepIndex: number) {
    const formJson: any = this.props.schema;

    const MForm: any = reduxForm({
      form: formJson.formName,
      destroyOnUnmount: false,
      forceUnregisterOnUnmount: true
    })(MaterialForm as any);

    let stepForm;

    formJson.forms.forEach((form: object, index: number) => {
      if (formJson.forms.length + 1 < stepIndex) {
        stepForm = 'Unknown stepIndex';
      }
      if (index + 1 === stepIndex) {
        stepForm = (
          <MForm onSubmit={this.handleNext} previousPage={this.handleBack} schema={form} isFirst={index + 1 === 1} />
        );
      }
    });
    return stepForm;
  }

  getSteps() {
    let nameList = this.props.schema.forms.map((form: any) => form.title);
    nameList.push('Preview');
    return nameList;
  }

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 1
    });
  };

  render() {
    const steps = this.getSteps();
    const { activeStep } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Stepper activeStep={activeStep - 1} alternativeLabel>
              {steps.map((label: string, index: number) => (
                <Step key={index}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
          <Grid item xs={12}>
            <div>
              {this.state.activeStep === steps.length ? (
                <div>
                  <Preview
                    handleReset={this.handleReset}
                    previousPage={this.handleBack}
                    formSchema={this.props.schema}
                  />
                </div>
              ) : (
                <div>
                  
                  {this.getStepContent(activeStep)}
                    {process.env.REACT_APP_ENV === 'qa' || process.env.NODE_ENV === 'development' ? (
                    <Card className={classes.marginBottomButton}>
                      <CardContent>
                        {'buttons are for testing purposes'}
                        <Button disabled={activeStep === 1} onClick={this.handleBack}>
                          Back
                        </Button>
                        <Button variant="raised" color="primary" onClick={this.handleNext}>
                          {activeStep === steps.length ? 'Preview' : 'Next'}
                        </Button>
                      </CardContent>
                    </Card>
                  ) : null}            
               
                </div>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Form);

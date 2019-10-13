import * as React from 'react';
import { Formik } from 'formik';
import { Button, Stepper, Step, StepLabel } from '@material-ui/core';
import Preview from './Preview';

type WizardProps = Readonly<{
  children: any;
  // any forced props goes here
}> &
  Partial<IDefaultProps>;

interface IDefaultProps {
  steps: any;
  initialValues: any;
  onSubmit: any;
  formSchema: any;
  // any other non-required props here
}

export default class Wizard extends React.Component<WizardProps, any> {
  static Page = ({ children }: WizardProps) => children;

  constructor(props: any) {
    super(props);
    this.state = {
      page: 0,
      initValues: props.initialValues
    };
  }

  next = (values: any) => {
    if (this.props.children) {
      this.setState((state: any) => ({
        page: Math.min(state.page + 1, this.props.children!.length),
        values
      }));
    }
  };

  previous = () =>
    this.setState((state: any) => ({
      page: Math.max(state.page - 1, 0)
    }));

  validate = (values: any) => {
    const activePage = React.Children.toArray(this.props.children)[this.state.page];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = (values: any, bag: any) => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children);
    if (isLastPage) {
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      bag.setSubmitting(false);
      this.next(values);
    }
  };

  render() {
    const { children, steps, formSchema } = this.props;
    const { page, initValues } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children);
    return (
      <>
        <Stepper activeStep={page} alternativeLabel>
          {steps.map((label: string, index: number) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Formik
          initialValues={initValues}
          enableReinitialize={false}
          validate={this.validate}
          onSubmit={this.handleSubmit}
          render={({ values, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              {/* might need to optimize next line */}
              {activePage && React.cloneElement(activePage, { values })}
              {isLastPage && <Preview values={values} formSchema={formSchema} />}
              <div className="buttons">
                {page > 0 && (
                  <Button variant="contained" color="primary" onClick={this.previous}>
                    Previous
                  </Button>
                )}

                {!isLastPage && (
                  <Button variant="contained" color="primary" type="submit">
                    Next
                  </Button>
                )}
                {isLastPage && (
                  <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>
                )}
              </div>
            </form>
          )}
        />
      </>
    );
  }
}

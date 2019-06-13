import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import Form from 'material-jsonschema-form';

import JSONInput from 'react-json-editor-ajrm/index';
import locale from 'react-json-editor-ajrm/locale/en';

import ErrorBoundary from '../components/ErrorBoundary';

const styles = theme => ({
  root: {
    flexGrow: 1
    // paddingTop: theme.spacing.unit * 20
  },
  formContainer: {
    textAlign: 'left',
    padding: theme.spacing.unit * 4
  }
});

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: true,
      formJson: {
        formName: 'test',
        forms: [
          {
            title: 'A registration form1',
            description: 'A simple form example1.',
            properties: [
              { name: 'projectId', component: 'text', label: 'Team Name' },
              { name: 'appName', component: 'text', label: 'Application Name' }
            ]
          },
          {
            title: 'A table form',
            description: 'A simple form example2.',
            isCard: false,
            properties: [
              {
                title: 'table 1',
                name: 'testTable',
                component: 'table',
                rows: [
                  {
                    name: 'sel3',
                    label: 'Dummy Select',
                    component: 'select',
                    elements: [{ label: 'label1', value: 'value1' }, { label: 'label2', value: 'value2' }]
                  },
                  { name: 'title1', component: 'text', label: 'Team 1' },
                  { name: 'title2', component: 'text', label: 'Team 2' }
                ]
              },
              {
                title: 'table 2',
                name: 'testTable2',
                component: 'table',
                rows: [
                  {
                    name: 'projNam',
                    label: 'select',
                    component: 'select',
                    elements: [{ label: 'label1', value: 'value1' }, { label: 'label2', value: 'value2' }]
                  },
                  { name: 'title3', component: 'text', label: 'Title 1' },
                  { name: 'title4', component: 'text', label: 'Title 2' }
                ]
              }
            ]
          }
        ]
      },
      realJson: {
        formName: 'test',
        forms: [
          {
            title: 'A registration form1',
            description: 'A simple form example1.',
            properties: [
              { name: 'projectId', component: 'text', label: 'Team Name' },
              { name: 'appName', component: 'text', label: 'Application Name' }
            ]
          },
          {
            title: 'A table form',
            description: 'A simple form example2.',
            isCard: false,
            properties: [
              {
                title: 'table 1',
                name: 'testTable',
                component: 'table',
                rows: [
                  {
                    name: 'sel3',
                    label: 'Dummy Select',
                    component: 'select',
                    elements: [{ label: 'label1', value: 'value1' }, { label: 'label2', value: 'value2' }]
                  },
                  { name: 'title1', component: 'text', label: 'Team 1' },
                  { name: 'title2', component: 'text', label: 'Team 2' }
                ]
              },
              {
                title: 'table 2',
                name: 'testTable2',
                component: 'table',
                rows: [
                  {
                    name: 'projNam',
                    label: 'select',
                    component: 'select',
                    elements: [{ label: 'label1', value: 'value1' }, { label: 'label2', value: 'value2' }]
                  },
                  { name: 'title3', component: 'text', label: 'Title 1' },
                  { name: 'title4', component: 'text', label: 'Title 2' }
                ]
              }
            ]
          }
        ]
      }
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = values => {
    console.log(values);
  };

  render() {
    const { classes } = this.props;
    const { isValid, formJson, realJson } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
              JSON Schema
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ maxWidth: '1400px', maxHeight: '100%' }}>
          <JSONInput
            placeholder={formJson} // data to display
            theme="light_mitsuketa_tribute"
            locale={locale}
            onChange={code => {
              if (code.jsObject) {
                this.setState({ isValid: true });
                this.setState({ formJson: code.jsObject });
              } else {
                this.setState({ isValid: false });
              }
            }}
            colors={{
              string: '#DAA520' // overrides theme colors with whatever color value you want
            }}
            height="550px"
          />
        </div>
        <Button disabled={!isValid} color="primary" onClick={() => this.setState({ realJson: formJson })}>
          Update Code
        </Button>
        <div className={classes.formContainer}>
          <ErrorBoundary>
            <Form schema={realJson} onSubmit={this.onSubmit} />
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(withRoot(Index));

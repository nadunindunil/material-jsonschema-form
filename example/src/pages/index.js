import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import Form from 'material-json-schema';

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center'
    // paddingTop: theme.spacing.unit * 20
  },
  formContainer:{
    padding: theme.spacing.unit * 4
  }
});

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
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
            title: 'A registration form2',
            description: 'A simple form example2.',
            properties: [
              { name: 'teamName', component: 'text', label: 'Team Name' },
              { name: 'division', component: 'text', label: 'Division' },
              {
                name: 'pay',
                component: 'select',
                label: 'Pay Method',
                elements: [{ label: 'label1', value: 'value1' }, { label: 'label2', value: 'value2' }]
              }
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
  }
  
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
              JSON Schema
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.formContainer}>
          <Form schema={this.state.formJson}/>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(withRoot(Index));

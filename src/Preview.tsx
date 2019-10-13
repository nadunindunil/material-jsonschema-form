import * as React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles: any = (theme: any) => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0
  },
  previewItemHeading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    textAlign: 'right',
    fontWeight: 500
  },
  previewItem: {
    textAlign: 'left'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  topMarginButton: {
    marginTop: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 1
  },
  tableRoot: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
});

export type PreviewProps = {
  classes?: any;
  formSchema?: any;
  values?: any;
};

class Preview extends React.Component<PreviewProps> {
  state = {
    expanded: null
  };

  handleChange = (panel: number) => (_event: React.ChangeEvent<{}>, expanded: boolean) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes, formSchema, values } = this.props;
    const { expanded } = this.state;

    return (
      <Grid container spacing={8} direction="column">
        <Grid item xs={12}>
          <div className={classes.root}>
            {formSchema.forms.map((form: any, index: number) => (
              <ExpansionPanel key={index} expanded={expanded === index} onChange={this.handleChange(index)}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>{form.title}</Typography>
                  <Typography className={classes.secondaryHeading}>{form.description}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Grid container spacing={8}>
                    {form.properties.map((property: any, index: number) => {
                      if (property.component === 'text' || property.component === 'select') {
                        return (
                          <React.Fragment key={index}>
                            <Grid item xs={3}>
                              <Typography className={classes.previewItemHeading}>{property.label}:</Typography>
                            </Grid>
                            <Grid item xs={9} className={classes.previewItem}>
                              <Typography>{values[property.name]}</Typography>
                            </Grid>
                          </React.Fragment>
                        );
                      } else if (property.component === 'table') {
                        return (
                          <Paper className={classes.tableRoot} key={index}>
                            <Table className={classes.table}>
                              <TableHead>
                                <TableRow>
                                  {property.rows.map((col: any, index: number) => (
                                    <TableCell key={index}>{col.label}</TableCell>
                                  ))}
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {values[property.name] &&
                                  values[property.name].map((cell: any, i: number) => (
                                    <TableRow key={i}>
                                      {property.rows.map((col: any, index: number) => (
                                        <TableCell key={index}>{cell[col.name]}</TableCell>
                                      ))}
                                    </TableRow>
                                  ))}
                              </TableBody>
                            </Table>
                          </Paper>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </Grid>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ))}
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Preview);

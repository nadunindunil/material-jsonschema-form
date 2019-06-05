import * as React from 'react';
import { Field } from 'redux-form';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  MenuItem,
  IconButton,
  Typography,
  Grid,
  Card,
  CardContent
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Add from '@material-ui/icons/AddCircle';
import Select from './Select';
import Text from './Text';

const styles: any = (theme: any) => ({
  table: {
    marginBottom: theme.spacing.unit * 2,
    minWidth: 340
  },
  tableWrapper: {
    maxWidth: '100%',
    overflowX: 'auto'
  },
  textAlignCenter: {
    textAlign: 'center',
    paddingTop: 10
  },
  tableHeadSmall: {
    textAlign: 'center',
    padding: 0,
    width: '5%'
  },
  tableTextField: {
    marginLeft: theme.spacing.unit * 0,
    marginRight: theme.spacing.unit * 0,
    padding: 0,
    marginTop: theme.spacing.unit * 0
  },
  tableTextField2: {
    // width: '8rem',
    marginLeft: theme.spacing.unit * 0,
    marginRight: theme.spacing.unit * 0,
    padding: 0,
    marginTop: theme.spacing.unit * 0
  },
  tableTextField3: {
    width: '4rem',
    marginLeft: theme.spacing.unit * 0,
    marginRight: theme.spacing.unit * 0,
    padding: 0,
    marginTop: theme.spacing.unit * 0
  },
  title: {
    flex: '0 0 auto'
  },

  heading: {
    marginTop: theme.spacing.unit * 3,
    fontSize: '18px'
  },
  heading2: {
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    fontSize: '16px'
  },

  header: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    padding: 15,
    marginBottom: 0,
    textAlign: 'left'
  },
  topMargin: {
    marginTop: theme.spacing.unit * 3
  },
  resize: {
    fontSize: 12
  },
  addText: {
    margin: theme.spacing.unit * 3,
    cursor: 'pointer'
  },
  icon: {
    fontSize: 30,
    marginBottom: -10,
    paddingRight: 5,
    paddingLeft: 5,
    cursor: 'pointer'
  }
});

const CustomTableCell: any = withStyles({
  head: {
    fontSize: 13,
    padding: '0.8rem',
    textAlign: 'center'
  },
  body: {
    fontSize: 12,
    padding: '0.5rem',
    textAlign: 'center',
    verticalAlign: 'top'
  }
})(TableCell);

export type FormTableProps = {
  fields?: any;
  classes?: any;
  rows?: any;
  title?: string;
};

// prev { fields, meta: { error, submitFailed }, classes, rows, title }
function FormTable({ fields, classes, rows, title }: any) {
  return (
    <Card style={{ flex: 1 }}>
      <Typography className={classes.header} variant="h6" gutterBottom>
        {title}
      </Typography>
      <CardContent>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                {rows.map((row: any) => (
                  <CustomTableCell className={classes.textAlignCenter} key={row.label}>
                    {row.label}
                  </CustomTableCell>
                ))}
                <CustomTableCell className={classes.textAlignCenter}>Action</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fields.map((request: any, index: number) => (
                <TableRow key={index}>
                  {rows.map((row: any, index: number) => {
                    if (row.component === 'text') {
                      return (
                        <CustomTableCell key={index}>
                          <Field
                            name={`${request}.${row.name}`}
                            component={Text}
                            className={classes.tableTextField}
                            type="text"
                            margin="dense"
                            variant="outlined"
                            InputProps={{
                              classes: {
                                input: classes.resize
                              },
                              inputProps: {
                                maxLength: 50
                              }
                            }}
                          />
                        </CustomTableCell>
                      );
                    }
                    if (row.component === 'select') {
                      return (
                        <CustomTableCell key={index}>
                          <Field
                            name={`${request}.${row.name}`}
                            component={Select}
                            className={classes.tableTextField2}
                            margin="dense"
                            variant="outlined"
                            InputProps={{
                              classes: {
                                input: classes.resize
                              }
                            }}
                          >
                            {row.elements.map((option: any) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </Field>
                        </CustomTableCell>
                      );
                    } else return null;
                  })}

                  <CustomTableCell>
                    <IconButton aria-label="Delete" id={`${request}-deleteBtn`} onClick={() => fields.remove(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </CustomTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Grid container>
          <Grid>
            <Typography
              className={classes.addText}
              variant="body2"
              id={`${fields.name}-addBtn`}
              color="primary"
              onClick={() => fields.push()}
            >
              <Add className={classes.icon} /> Add Row
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
export default withStyles(styles)(FormTable);

# material-jsonschema-form

> material-ui form generated from json

[![NPM](https://img.shields.io/npm/v/material-jsonschema-form.svg)](https://www.npmjs.com/package/material-jsonschema-form) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save material-jsonschema-form
```

## Usage

```jsx
import * as React from 'react';

import Form from 'material-jsonschema-form';

class Example extends React.Component {
  constructor(props) {
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
  
  onSubmit = values => {
    window.alert(JSON.stringify(values, null, 2));
  };

  render() {
    return <Form schema={this.state.formJson} onSubmit={this.onSubmit} initialValues={{}}/>;
  }
}
```

## How to contribute 

Inside the project folder, you can run some built-in commands:

### `npm start` or `yarn start`

Runs the library in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test` or `yarn run test`

Runs the test watcher in an interactive mode.

### `npm run build` or `yarn build`

Builds the library for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## Todo

- [x] Basic Implementation
- [ ] Validations
- [ ] Auto suggest
- [ ] File uploads
- [ ] Custom styles

## License

MIT © [nadunindunil](https://github.com/nadunindunil)

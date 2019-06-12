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
  render() {
    return <Form schema={this.state.formJson} />;
  }
}
```

## Todo

- [x] Basic Implementation
- [ ] Validations
- [ ] Auto suggest
- [ ] File uploads
- [ ] Custom styles

## Issues

- https://github.com/reduxjs/react-redux/issues/1166

## License

MIT © [nadunindunil](https://github.com/nadunindunil)

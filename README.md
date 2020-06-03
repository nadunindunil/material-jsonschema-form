# material-jsonschema-form

> This project contains a material-ui form generated from JSON. 

[![NPM](https://img.shields.io/npm/v/material-jsonschema-form.svg)](https://www.npmjs.com/package/material-jsonschema-form) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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

## Getting Started

These instructions will get the copy of the project up and running on your local machine for development and testing purposes.
A step by step series of examples that tell you how to get a development environment running

### Installing

First run the following command in the root folder

```
npm install
```

Then cd into the /example directory and run this command again.

### Development

Local development has been broken into two parts.
First run the command in the root folder then in another tab cd into the example folder and run the command.

```
npm start
```
or

```
yarn start
```

This runs the library in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Running the tests

Runs the test watcher in an interactive mode.

```
npm run test
```
or

```
yarn run test
```

### Build

Builds the library for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

```
npm run build
```
or

```
yarn build
```

## Contributing

Please read [CONTRIBUTING.md](https://github.com/nadunindunil/material-jsonschema-form) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [Git](https://git-scm.com/) for versioning. For the versions available, see the [tags on this repository](https://github.com/nadunindunil/material-jsonschema-form/tags). 

## Authors

* **Nadun Indunil** - *Initial work* - [(https://github.com/nadunindunil)

See also the list of [contributors](https://github.com/nadunindunil/material-jsonschema-form/graphs/contributors) who participated in this project.

## Todo

- [x] Basic Implementation
- [ ] Validations
- [ ] Auto suggest
- [ ] File uploads
- [ ] Custom styles

## License

MIT © [nadunindunil](https://github.com/nadunindunil)
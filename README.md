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
        formName: 'sampleForm',
        forms: [
          {
            title: 'A registration form1',
            description: 'A simple form example1.',
            properties: [
              { name: 'projectId', component: 'text', label: 'Team Name' },
              { name: 'appName', component: 'text', label: 'Application Name' }
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

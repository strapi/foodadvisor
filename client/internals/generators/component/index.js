/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Stateless Function',
      choices: () => [
        'Stateless Function',
        'React.PureComponent',
        'React.Component'
      ]
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component with this name already exists'
            : true;
        }

        return 'The name is required';
      }
    }
  ],
  actions: data => {
    // Generate {{properCase name}}.js index.js and {{properCase name}}.test.js
    let componentTemplate;

    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = './component/stateless.js.hbs';
        break;
      }
      default: {
        componentTemplate = './component/class.js.hbs';
      }
    }

    const actions = [
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/index.js',
        templateFile: componentTemplate,
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/tests/index.test.js',
        templateFile: './component/test.js.hbs',
        abortOnFail: true
      }
    ];

    actions.push({
      type: 'prettify',
      path: '/components/'
    });

    return actions;
  }
};

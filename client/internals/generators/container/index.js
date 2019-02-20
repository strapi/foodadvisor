/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a container',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of container',
      default: 'Stateless Function',
      choices: () => [
        'Stateless Function',
        'React.PureComponent',
        'React.Component',
      ],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'HomePage',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: data => {
    // Generate {{properCase name}}.js index.js and {{properCase name}}.test.js
    let containerTemplate;

    switch (data.type) {
      case 'Stateless Function': {
        containerTemplate = './container/stateless.js.hbs';
        break;
      }
      default: {
        containerTemplate = './container/class.js.hbs';
      }
    }

    const actions = [
      {
        type: 'add',
        path: '../../src/containers/{{properCase name}}/index.js',
        templateFile: containerTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/containers/{{properCase name}}/tests/{{properCase name}}.test.js',
        templateFile: './container/test.js.hbs',
        abortOnFail: true,
      },
    ];

    actions.push({
      type: 'prettify',
      path: '/containers/',
    });

    return actions;
  },
};

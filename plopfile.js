module.exports = function(plop) {
  /**
   * REACT NATIVE
   */
  plop.setGenerator('component', {
    description: 'Stateless component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile: 'plop-templates/component.js',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}Style.js',
        templateFile: 'plop-templates/style.js',
        abortOnFail: true,
      },
    ],
  });

  // container generator
  plop.setGenerator('container', {
    description: 'React container',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
      {
        type: 'input',
        name: 'path',
        message: 'Set path',
      },
    ],
    actions: [
      {
        type: 'add',
        path:
          'src/containers/{{pathCase path}}/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile: 'plop-templates/container.js',
        abortOnFail: true,
      },
      {
        type: 'add',
        path:
          'src/containers/{{pathCase path}}/{{pascalCase name}}/{{pascalCase name}}Style.js',
        templateFile: 'plop-templates/style.js',
        abortOnFail: true,
      },
    ],
  });

  // screen generator
  plop.setGenerator('screen', {
    description: 'React screen',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
      {
        type: 'input',
        name: 'path',
        message: 'Set path',
      },
    ],
    actions: [
      {
        type: 'add',
        path:
          'src/screens/{{pathCase path}}/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile: 'plop-templates/screen.js',
        abortOnFail: true,
      },
      {
        type: 'add',
        path:
          'src/screens/{{pathCase path}}/{{pascalCase name}}/{{pascalCase name}}Style.js',
        templateFile: 'plop-templates/style.js',
        abortOnFail: true,
      },
    ],
  });

  /**
   * REDUX
   */
  // Action generator
  plop.setGenerator('action', {
    description: 'Redux action',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'action name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/store/actions/{{pascalCase name}}.js',
        templateFile: 'plop-templates/action.js',
        abortOnFail: true,
      },
    ],
  });

  // Action generator
  plop.setGenerator('reducer', {
    description: 'Redux reducer',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'reducer name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/store/reducers/{{pascalCase name}}.js',
        templateFile: 'plop-templates/action.js',
        abortOnFail: true,
      },
    ],
  });

  /**
   * API
   */

  // controller generator
  plop.setGenerator('controller', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'controller name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/controllers/{{pascalCase name}}Controller.js',
        templateFile: 'plop-templates/controller.js',
        abortOnFail: true,
      },
    ],
  });

  plop.setGenerator('route', {
    description: 'API route',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'route name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/routes/{{camelCase name}}.js',
        templateFile: 'plop-templates/route.js',
        abortOnFail: true,
      },
    ],
  });
};

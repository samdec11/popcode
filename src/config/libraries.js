import fs from 'fs';
import path from 'path';

const libraries = {
  jquery: {
    name: 'jQuery',
    javascript: fs.readFileSync(
      path.join(__dirname, '../../bower_components/jquery/dist/jquery.min.js')
    ),
    predefined: ['$', 'jQuery'],
  },
  lodash: {
    name: 'lodash',
    javascript: fs.readFileSync(
      path.join(__dirname, '../../bower_components/lodash/dist/lodash.min.js')
    ),
    predefined: ['_'],
  },
  underscore: {
    name: 'Underscore.js',
    javascript: fs.readFileSync(
      path.join(
        __dirname,
        '../../bower_components/underscore/underscore-min.js'
      )
    ),
    predefined: ['_'],
  },
  mustache: {
    name: 'Mustache.js',
    javascript: fs.readFileSync(
      path.join(
        __dirname,
        '../../bower_components/mustache.js/mustache.js'
      )
    ),
    predefined: ['Mustache'],
  },
  handlebars: {
    name: 'Handlebars.js',
    javascript: fs.readFileSync(
      path.join(
        __dirname,
        '../../bower_components/handlebars/handlebars.js'
      )
    ),
    predefined: ['Handlebars'],
  },
  angular: {
    name: 'AngularJS',
    javascript: fs.readFileSync(
      path.join(__dirname, '../../bower_components/angular/angular.min.js')
    ),
    predefined: ['angular'],
  },
  react: {
    name: 'React',
    javascript: [
      fs.readFileSync(
        path.join(__dirname, '../../bower_components/react/react.min.js')
      ),
      fs.readFileSync(
        path.join(__dirname, '../../bower_components/react/react-dom.min.js')
      ),
    ],
    predefined: ['React'],
  },
  ember: {
    name: 'Ember.js',
    javascript: fs.readFileSync(
      path.join(__dirname, '../../bower_components/ember/ember.min.js')
    ),
    predefined: ['Ember'],
  },
  bootstrap: {
    name: 'Bootstrap',
    css: fs.readFileSync(
      path.join(
        __dirname,
        '../../bower_components/bootstrap/dist/css/bootstrap.min.css'
      )
    ),
    javascript: fs.readFileSync(
      path.join(
        __dirname,
        '../../bower_components/bootstrap/dist/js/bootstrap.min.js'
      )
    ),
  },
  foundation: {
    name: 'Foundation',
    css: fs.readFileSync(
      path.join(
        __dirname,
        '../../bower_components/foundation/css/foundation.min.css'
      )
    ),
    javascript: fs.readFileSync(
      path.join(
        __dirname,
        '../../bower_components/foundation/js/foundation.js'
      )
    ),
  },
  normalize: {
    name: 'normalize.css',
    css: fs.readFileSync(
      path.join(
        __dirname,
        '../../bower_components/normalize-css/normalize.css'
      )
    ),
  },
};

export default libraries;

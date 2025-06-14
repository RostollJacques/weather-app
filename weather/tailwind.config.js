const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'apps/weather/src/**/*.{html,ts,scss}'),
    join(__dirname, 'libs/**/*.{html,ts,scss}'),
    ...createGlobPatternsForDependencies(join(__dirname, 'apps/weather')),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

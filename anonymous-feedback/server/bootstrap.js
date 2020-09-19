process.env.NODE_ENV = 'production';

require('ignore-styles');

require('@babel/register')({
    presets: [
      "@babel/preset-env",
      "@babel/preset-react"
    ],
    plugins: [
      "@babel/plugin-transform-modules-commonjs",
      "@babel/plugin-proposal-class-properties"
    ],
    ignore: [ /(node_modules)/ ]
});

require('./index');

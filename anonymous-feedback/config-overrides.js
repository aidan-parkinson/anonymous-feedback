module.exports = function override(config, env) {
  console.log('override!');

  let loaders = config.module.rules[2].oneOf;
  loaders.splice(loaders.length - 1, 0, {
      test: /\.(js|jsx)$/,
       include: "/home/aidanparkinson/anonymous-feedback/anonymous-feedback/node_modules/mqtt/",
      use: [
          {
              loader: 'shebang-loader',
          }
      ]
  });

  config.module.rules[2].oneOf[2].exclude = "/home/aidanparkinson/anonymous-feedback/anonymous-feedback/node_modules/mqtt/",

  config.target = 'node';

  config.externals = [
    /node_modules/,
    'bufferutil',
    'utf-8-validate'
  ]

  return config;
}

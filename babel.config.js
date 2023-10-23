/** @format */

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: { '~': './src', __mocks__: './__mocks__' },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};

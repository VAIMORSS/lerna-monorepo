/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

// react-native >= 0.57

const extraNodeModules = {
  api: path.resolve(__dirname + '/../api'),
  redux: path.resolve(__dirname + '/../redux'),
};
const watchFolders = [
  path.resolve(__dirname + '/../api/'),
  path.resolve(__dirname + '/../redux/'),
];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules,
  },
  watchFolders,
};

const pack = require('./package.json');

module.exports = {
  coverageDirectory: 'coverage',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.[tj]sx?$': 'babel-jest',
    '^(?!.*\\.([tj]sx?|css|json)$)': './fileTransform.js',
  },
  testTimeout: 30000,
  displayName: pack.name,
  name: pack.name,
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
};

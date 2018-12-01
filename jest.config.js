module.exports = {
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)': '<rootDir>/src/config/fileTransform.js',
  },
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components$1',
    '^containers(.*)$': '<rootDir>/src/containers$1',
    '^hoc(.*)$': '<rootDir>/src/hoc$1',
    '^style(.*)$': '<rootDir>/src/style$1',
    '^libs(.*)$': '<rootDir>/src/libs$1',
    '^assets(.*)$': '<rootDir>/src/assets$1',
    '^vendor(.*)$': '<rootDir>/src/vendor$1',
  },
}

module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'max-len': ['error', {
      code: 100,
      ignorePattern: '<[a-zA-Z0-9]*>',
    }],
  },
};

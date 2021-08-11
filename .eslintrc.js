/** @format */

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    'import/extensions': 'off',
    'no-use-before-define': 'off',
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': [2, { forbid: ['any', 'array'] }],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'no-shadow': 'off',
    'no-template-curly-in-string': 'off',
    'react/no-array-index-key': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'comma-dangle': 'off',
    'react/jsx-wrap-multilines': 'off',
    'import/newline-after-import': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-curly-newline': 'off',
    'no-unused-expressions': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'object-curly-newline': 'off'
  },
  settings: {
    webpack: {
      config: 'config/webpack.config.js' // 这是你设置alias的配置文件路径
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};

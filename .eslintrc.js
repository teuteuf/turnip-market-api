module.exports = {
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'project': './tsconfig.json',
    'tsconfigRootDir': './'
  },
  'extends': [
    'plugin:@typescript-eslint/recommended',
    'standard'
  ],
  'plugins': [
    '@typescript-eslint'
  ],
  'rules': {
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
    }]
  }
}

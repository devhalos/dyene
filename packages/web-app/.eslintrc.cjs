module.exports = {
  extends: ['../../.eslintrc.react.cjs'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.tsx', '*.ts'],
    },
  ],
};

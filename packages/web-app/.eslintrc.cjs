module.exports = {
  extends: ['../../.eslintrc.react.cjs'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src', '.storybook'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.tsx', '*.ts', '*.cjs', '*.js'],
    },
  ],
};

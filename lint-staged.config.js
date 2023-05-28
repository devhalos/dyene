module.exports = {
  'packages/**/*.{ts,tsx}': (files) => `nx affected -t type-check --files=${files.join(',')}`,
  'packages/**/*.{js,ts,jsx,tsx,json}': (files) =>
    `nx affected:lint --fix --files=${files.join(',')}`,
  '**/*.{js,ts,jsx,tsx,json,cjs,html,css}': (files) => `nx format:write --files=${files.join(',')}`,
};

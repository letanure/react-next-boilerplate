module.exports = {
  // Lint & Prettify TS and JS files
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `eslint ${filenames.join(' ')} --max-warnings=0 --fix`,
    `pnpm test -- --findRelatedTests ${filenames.join(' ')}`,
  ],
}

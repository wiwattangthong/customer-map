/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

/*
 * Tailwind configuration for the customer map project.  The `content`
 * array specifies which files Tailwind should scan for class names.
 * Here we include the HTML file and any local JavaScript files.  The
 * configuration can be extended to customize the design system as
 * needed.
 */
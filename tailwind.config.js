module.exports = {
    prefix: '',
    purge: {
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    // darkMode: 'class', // or 'media' or 'class'
    theme: {
      spacing: {
        sidebar: '240px',
        navbar: '64px'
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
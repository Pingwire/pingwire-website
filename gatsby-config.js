module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Pingwire',
        short_name: 'Pingwire',
        start_url: '/',
        icon: 'src/favicon.svg',
      },
    },
  ],
};

module.exports = {
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp', // Needed for dynamic images
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet-async',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Pingwire',
        short_name: 'Pingwire',
        start_url: '/',
        icon: 'src/favicon.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-PLRW7S6',
      },
    },
  ],
};

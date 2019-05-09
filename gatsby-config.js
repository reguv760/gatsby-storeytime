module.exports = {
  siteMetadata: {
    siteUrl: `https://storeytime.netlify.com`,
    title: `Storeytime Online`,
    description:
      'Storeytime is a 5-voice group centered around Patrick Storey, an autistic singer with an incredible musical gift. The group shows what is possible for people with autism and other learning differences. Audiences are treated to an incredible, interactive performance where they can experience how Patrick communicates and thrives through his love for music.',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'assets',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              //maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Storeytime',
        short_name: 'Storeytime',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#FFFFFF',
        display: 'minimal-ui',
        icon: 'src/assets/images/logos/storeytime-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets`,
        name: 'assets',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-6371690-27`,
        // Puts tracking script in the head instead of the body
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        htmlTitle: 'StoreyTime CMS',
        publicPath: 'admin',
      },
    },
    'gatsby-plugin-sitemap',
  ],
}

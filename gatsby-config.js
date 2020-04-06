module.exports = {
  siteMetadata: {
    title: 'Evgeny Ponomarev',
    description: "Evgeny Ponomarev, Deep Learning Researcher",
    url: 'https://evgps.com',
    twitterUsername: '@evgps',
    social: [
      {
        title: 'GitHub',
        link: 'https://github.com/evgps',
      },
      {
        title: 'CodePen',
        link: 'http://codepen.io/evgps',
      },
      {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/evgps',
      },
    ],
    projects: [
      {
        title: 'Latency Modeling',
        description: 'Predict latency of neural network on end device',
        image: '/ink-volt-link.jpg',
        video: '/ink-volt-link.mp4',
      },
      {
        title: 'MUSCO',
        description: 'MUlti-Stage COmpression of neural networks',
        image: '/ink-volt-link.jpg',
        video: '/ink-volt-link.mp4',
      },
      {
        title: 'Using Reinforcement Learning in the Algorithmic Trading',
        description: 'Use A3C to trade MOEX:RTSI',
        image: '/ink-volt-link.jpg',
        video: '/ink-volt-link.mp4',
      },
      {
        title: 'YOLACT Video',
        description: 'Running single-stage instance segmentation algorithm on Cityscapes',
        image: '/ink-volt-link.jpg',
      },

    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-smoothscroll',
    'gatsby-plugin-transition-link',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: `${__dirname}/src/templates/Default.js`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'evg.jpg',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1400,
              linkImagesToOriginal: false,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'evgps',
        short_name: 'evgps',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    // 'gatsby-plugin-offline',
  ],
}

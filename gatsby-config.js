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
        title: 'Telegram',
        link: 'http://tele.gg/evgps',
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
        image: '/latency-link.png',
        video: '/latency-link.mp4',
      },
      {
        title: 'MUSCO',
        description: 'MUlti-Stage COmpression of neural networks',
        image: '/musco-link.png',
        video: '/musco-link.mp4',
      },
      {
        title: 'Using Reinforcement Learning in the Algorithmic Trading',
        description: 'Use A3C to trade MOEX:RTSI',
        image: '/rl-link.jpg',
        video: '/rl-link.mp4',
      },
      {
        title: 'YOLACT Video',
        description: 'Running single-stage instance segmentation algorithm on Cityscapes',
        image: '/yolact-link.png',
        video: '/yolact-link.mp4',
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

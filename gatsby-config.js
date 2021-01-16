module.exports = {
  //pathPrefix: "/blog",
  siteMetadata: {
    title: `The Solberg Project`,
    author: {
      name: `Torstein Solberg`,
      summary: `I am a student that studies geo-informatics in Trondheim. I also write some code in my spare time. `,
    },
    description: `A blog showcasing some work of a software engineer specializing in geoinformatics. With some other unrelated stuff. `,
    siteUrl: `https://blog.solberg.ws`,
    social: {
      twitter: `torsteinsolberg`,
      github: `torsol`,
      linkedin: `torstein-solberg-402996140`
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-175789050-1`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {	
      resolve: `gatsby-plugin-manifest`,	
      options: {	
        icon: `content/assets/icon.jpg`,	
      },	
    },
  ]
}

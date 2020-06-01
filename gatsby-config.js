module.exports = {
    siteMetadata: {
        title: `Conseguiremos Tu Mejor Versión`,
        description: `Test Imc, cursos y apoyo para ayudarte a adelgazar y estar en forma`,
        author: `Dylia`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/src/assets`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `OhStyle.me`,
                short_name: `ohstyle`,
                start_url: `/`,
                background_color: `gradient(40deg,#ff6ec4,#7873f5)`,
                theme_color: `gradient(40deg,#ff6ec4,#7873f5)`,
                display: `minimal-ui`,
                icon: `${__dirname}/src/assets/images/logo.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
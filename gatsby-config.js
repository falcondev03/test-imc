module.exports = {
    siteMetadata: {
        title: `Oh-Style.me`,
        description: `Test Imc, cursos y apoyo para ayudarte a adelgazar y estar en forma`,
        author: `Dylia`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         name: `images`,
        //         path: `${__dirname}/src/images`,
        //     },
        // },
        // `gatsby-transformer-sharp`,
        // `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `OhStyle.me`,
                short_name: `ohstyle`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `${__dirname}/src/components/images/logo.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
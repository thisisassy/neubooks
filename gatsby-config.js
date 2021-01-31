module.exports = {
  siteMetadata: {
    title: "Neubooks | ニューブックス",
    description: "Neubooksは店舗を持たない本屋であり、新しいをつくる、これからの本屋さんを目指したいブックレーベルです。",
    lang: "ja",
    siteUrl: "https://neubooks.jp",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-FPRKHHPQ5G",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-less",
  ],
};

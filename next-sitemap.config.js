module.exports = {
  siteUrl: "https://www.dirane.me",
  generateRobotsTxt: true,
  additionalPaths: async (config) => [
    `${config.siteUrl}/#projets`,
    `${config.siteUrl}/#projets`,
    `${config.siteUrl}/#competences`
    `${config.siteUrl}/#gallery`
    `${config.siteUrl}/#stats`
    `${config.siteUrl}/#contact`
  ]
};

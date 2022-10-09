const withNextra = require("nextra")({
  i18n: {
    locales: ["it"],
    defaultLocale: "it",
  },
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true,
});

module.exports = withNextra({
  // reactStrictMode: true,
  experiments: {
    esmExternals: true,
  },
  images: {
    path: "/",
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/lezioni',
        permanent: true,
      },
    ]
  },
});

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ja", "ko"],
    defaultLocale: "ja"
  },
  webpack: (config, { isServer }) => {
    if (!isServer) config.resolve.fallback.fs = false;
    if (!isServer) config.resolve.fallback.child_process = false;
    if (!isServer) config.resolve.fallback.net = false;
    if (!isServer) config.resolve.fallback.dns = false;
    if (!isServer) config.resolve.fallback.tls = false;
    return config;
  },
  env: {
    REACT_APP_SPREADSHEET_ID : process.env.REACT_APP_SPREADSHEET_ID,
    REACT_APP_SHEET_ID: process.env.REACT_APP_SHEET_ID,
    REACT_APP_GOOGLE_CLIENT_EMAIL: process.env.REACT_APP_GOOGLE_CLIENT_EMAIL,
    REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY: process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY,
  },
}

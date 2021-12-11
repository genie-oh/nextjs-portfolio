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
}

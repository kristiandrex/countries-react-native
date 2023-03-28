const MODULE_RESOLVER = [
  "module-resolver",
  {
    root: ["."],
    extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
    alias: {
      "~": "./src",
    },
  },
];

module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [MODULE_RESOLVER],
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
  };
};

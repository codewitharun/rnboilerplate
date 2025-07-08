module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@components": "./src/components",
            "@hooks": "./src/hooks",
            "@utils": "./src/utils",
            "@api": "./src/api",
            "@assets": "./src/assets",
            "@styles": "./src/styles",
            "@src": "./src",
            "@redux": "./src/redux",
            "@navigation": "./src/navigation",
            "@services/*": ["./src/services"],
          },
        },
      ],
    ],
  };
};

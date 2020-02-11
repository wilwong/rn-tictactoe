module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      [
        "module-resolver",
        {
          "root": ["./"],
          "alias": {
            "@assets": "./assets",
            "@actions": "./src/actions",
            "@reducers": "./src/reducers",
            "@components": "./src/components",
            "@contexts": "./src/contexts",
            "@constants": "./src/constants",
            "@screens": "./src/screens",
          }
        },
      ],
    ],
  };
};

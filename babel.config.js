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
	          "@components": "./src/components",
	          "@contexts": "./src/contexts",
	          "@constants": "./src/constants",
            "@screens": "./src/screens",
            "@utils": "./src/utils",
	        }
	      },
	    ],
	  ],
  };
};

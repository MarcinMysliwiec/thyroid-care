module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: [["inline-dotenv", {
          path: '.env.prod'
        }]]
      },
      development: {
        plugins: [["inline-dotenv", {
          path: '.env.dev'
        }]]
      }
    }
  };
};

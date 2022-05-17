module.exports = {
    name: 'client',
    displayName: 'client',
  
    // NOTE: if you don't set this correctly then when you reference
    // it later in a path string you'll get a confusing error message.
    // It says something like' Module <rootDir>/config/polyfills.js in
    // the setupFiles option was not found.'
    rootDir: '.',
  
    testEnvironment: "jsdom",

    "moduleDirectories": [
        "node_modules",
        "src"
      ],
      "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
      },
      "transform": {
        "^.+\\.(js|jsx)$": "babel-jest"
      }
  };
/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: "http://localhost",
      show: false,
      browser: 'chromium',desiredCapabilities: {
        chromeiumOptions: {
          args: ["--headless", "--disable-gpu", "--no-sandbox"]
        }
      }
    },

  },
  include: {
    I: './steps_file.js',

    tefoPage: "./pages/tefoPage.js",

    tefoPage2: "./pages/tefoPage2.js",

    createAccountPage: "./pages/createAccount.js",

    navbarFragment: "./fragments/navbar.js",

    loginPage: "./pages/login.js",

    watchlistPage: "./pages/watchlist.js",
  },
  name: 'imdb'
}
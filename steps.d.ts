/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type tefoPage = typeof import('./pages/tefoPage.js');
type tefoPage2 = typeof import('./pages/tefoPage2.js');
type createAccountPage = typeof import('./pages/createAccount.js');
type navbarFragment = typeof import('./fragments/navbar.js');
type loginPage = typeof import('./pages/login.js');
type watchlistPage = typeof import('./pages/watchlist.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, tefoPage: tefoPage, tefoPage2: tefoPage2, createAccountPage: createAccountPage, navbarFragment: navbarFragment, loginPage: loginPage, watchlistPage: watchlistPage }
  interface Methods extends Puppeteer {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}

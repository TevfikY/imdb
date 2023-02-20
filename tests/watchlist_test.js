Feature('watchlist');

Before(({I,tefoPage}) => {
    tefoPage.connectAndCheck();
});

Scenario('Shoul able to add a film to watchlist',  ({ I,watchlistPage }) => {
    watchlistPage.loginToAccount();
    watchlistPage.searchForMovieAndPressEnter("jhon whick");
    watchlistPage.clickOnFirstElement();
    watchlistPage.addFilmToWatchList();
});

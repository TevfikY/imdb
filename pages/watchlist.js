const { I } = inject();
const navbarFragment = require("../fragments/navbar");
const login = require("../pages/login");

let _MovieName = "";

module.exports = {

  buttons:{
    signInButton:"//*[@class='list-group-item ']",
    secondSignInButton:"#signInSubmit",
    addToWatchlistButton:"//*[@data-testid='tm-box-wl-button']/div",
    
  },

  fields:{
    emailField: "#ap_email",
    passwordField: "#ap_password",
    searchField:"#suggestion-search",
    firstElementAfterSearch:"//*[@class='ipc-metadata-list-summary-item__t']",
    movieTitle:"//*[@data-testid='hero-title-block__title']",
  },

  Account:{
    email:"yazgunoglu2@gmail.com",
    password:".Tefo123",
  },

  loginToAccount(){
    navbarFragment.clickOnSignInButton();
    login.clickSignInButton();
    login.fillLoginPage(this.Account.email,this.Account.password);
    login.clickSecondSignInButton();
    navbarFragment.checkAmILoggedIn();
  },
  searchForMovieAndPressEnter(movieName){
    I.waitForElement(this.fields.searchField);

    I.fillField(this.fields.searchField,movieName);

    I.pressKey("Enter");

    
  },

  clickOnFirstElement(){

    I.waitForNavigation();

    I.waitForElement(this.fields.firstElementAfterSearch,3);

    I.click(this.fields.firstElementAfterSearch);
    
  },

  addFilmToWatchList(){

    I.waitForNavigation();

    I.waitForElement(this.fields.movieTitle,3);

    I.waitForElement(this.buttons.addToWatchlistButton,3);
    
    I.dontSee('In Watchlist');
    
    I.click(this.buttons.addToWatchlistButton);
      
  }

}

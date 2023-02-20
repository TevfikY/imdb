const { I } = inject();

module.exports = {

  button:{
    signInButton: "//*[@class='ipc-btn ipc-btn--single-padding ipc-btn--center-align-content ipc-btn--default-height ipc-btn--core-baseAlt ipc-btn--theme-baseAlt ipc-btn--on-textPrimary ipc-text-button imdb-header__signin-text']",
  },

  clickOnSignInButton(){
    I.waitForElement(this.button.signInButton,3);
    I.click(this.button.signInButton);
    
  },

  checkAmILoggedIn(){
    I.waitForNavigation();
    I.seeCurrentUrlEquals("https://www.imdb.com/?ref_=login");
  },
  checkAmInotLoggedIn(){
    I.waitForNavigation();
    I.dontSeeCurrentUrlEquals("https://www.imdb.com/?ref_=login");
  },
}

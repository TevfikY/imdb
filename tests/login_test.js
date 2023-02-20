const login = require("../pages/login");

Feature('login');

Before(({ I , tefoPage}) => { 
    tefoPage.connectAndCheck();
  });

Scenario('Should not be able to login with wrong password',  ({ I,navbarFragment, loginPage }) => {
    navbarFragment.clickOnSignInButton();
    loginPage.clickSignInButton();
    login.fillLoginPage("yazgunoglu2@gmail.com","12312312");
    login.clickSecondSignInButton();
    navbarFragment.checkAmInotLoggedIn();
    
});

Scenario('Should not be able to login with wrong email',  ({ I,navbarFragment, loginPage }) => {
    navbarFragment.clickOnSignInButton();
    loginPage.clickSignInButton();
    login.fillLoginPage("karakartal@gmail.com",".Tefo123");
    login.clickSecondSignInButton();
    navbarFragment.checkAmInotLoggedIn();
});

Scenario('Should be able to login',  ({ I, navbarFragment,loginPage }) => {
    navbarFragment.clickOnSignInButton();
    loginPage.clickSignInButton();
    login.fillLoginPage("yazgunoglu2@gmail.com",".Tefo123");
    login.clickSecondSignInButton();
    navbarFragment.checkAmILoggedIn();
});



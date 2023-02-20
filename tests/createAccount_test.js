Feature('createAccount');

Before(({ I , tefoPage}) => { 
    tefoPage.connectAndCheck();
  });

Scenario('Should able to create a new account',  ({ I, createAccountPage, navbarFragment }) => {
  I.wait(3);
  
    navbarFragment.clickOnSignInButton();
    createAccountPage.clickOnFirstCreateANewAccountButton();
    createAccountPage.fillCreateAcountPage("TevfikYazgunoglu","yazgunoglu2@gmail.com",".Tefo123");
    createAccountPage.clickOnSecondCreateAcountButton();
    
});

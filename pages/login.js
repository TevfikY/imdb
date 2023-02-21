const navbar = require("../fragments/navbar");

const { I } = inject();

module.exports = {
  buttons:{
    signInButton:"//*[@class='list-group-item ']",
    secondSignInButton:"#signInSubmit",
    
  },

  fields:{
    emailField: "#ap_email",
    passwordField: "#ap_password",
  },

  texts:{
    signInText: ""
  },
  clickSignInButton(){
    I.waitForNavigation();
    I.waitForElement(this.buttons.signInButton,3);
    I.click(this.buttons.signInButton);
  },
  fillLoginPage(email,password){
    //I.waitForNavigation();

    I.waitForElement(this.fields.emailField,3);
    I.fillField(this.fields.emailField,email),

    I.waitForElement(this.fields.passwordField,3);
    I.fillField(this.fields.passwordField,password);

  },
  clickSecondSignInButton(){
    I.waitForElement(this.buttons.secondSignInButton,3);
    I.click(this.buttons.secondSignInButton);
  },
  dontSeeSignInText(){
    I.waitForElement(this.buttons.secondSignInButton,3);
    I.click(this.buttons.secondSignInButton);
  },
  checkIShouldNotLogin(){
    I.waitForElement(this.buttons.secondSignInButton,3);
    I.url(this.buttons.secondSignInButton);
  }
  
}

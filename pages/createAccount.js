const { I } = inject();

module.exports = {
  button:{
    firstCreateANewAccount: "//*[@class='list-group-item create-account ']",
    secondCreateANewAccount: "#continue",
  },

  fields: {
     nameField:"#ap_customer_name",
     emailField:"#ap_email",
     passwordField:"#ap_password",
     reEnterPasswordField:"#ap_password_check",  



  },

  clickOnFirstCreateANewAccountButton(){
    I.waitForNavigation();
    I.waitForElement(this.button.firstCreateANewAccount,3);
    I.click(this.button.firstCreateANewAccount);
  },

  fillCreateAcountPage(name,email,password){
    //I.waitForNavigation();

    I.waitForElement(this.fields.nameField,3);
    I.fillField(this.fields.nameField,name);

    I.waitForElement(this.fields.emailField,3);
    I.fillField(this.fields.emailField,email);

    I.waitForElement(this.fields.passwordField,3);
    I.fillField(this.fields.passwordField,password);

    I.waitForElement(this.fields.reEnterPasswordField,3);
    I.fillField(this.fields.reEnterPasswordField,password);

  },

  clickOnSecondCreateAcountButton(){
    I.waitForElement(this.button.secondCreateANewAccount,3);
    I.click(this.button.secondCreateANewAccount);
    
  }
  
}

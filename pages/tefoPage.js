const { I } = inject();
const assert = require("assert");


module.exports = {

  fields: {
    searchBarField: "#suggestion-search",
    theMovie: '*[@a="The Flash"]',
    clickTarget: "//*[contains(text(),'The Flash')]",
    keyEnter: "Enter",
    buttonMenu: ".ipc-responsive-button__text",
    firstStarName: "//*[contains(text(),'Stars')]/following-sibling::div/ul/li/a",
    firstActorName: "//*[@data-testid='title-cast-item__actor']",
    targetWebsite: 'https://www.trendyol.com/',


  },
  connectAndCheck() {
    I.amOnPage(this.fields.targetWebsite);
    I.see('Menu', this.fields.buttonMenu);

  },


  fillFieldAndEnter(search) {
    I.waitForElement(this.fields.searchBarField, 5);
    I.fillField(this.fields.searchBarField, search);
    I.pressKey(this.fields.keyEnter);
  },
  clickOnFirstRecord() {
    I.waitForNavigation();
    I.waitForElement(this.fields.clickTarget, 5);
    I.click(this.fields.clickTarget);
    I.waitForNavigation(); // çokomelli
  },

  async getRequiredNamesAndCheck() {

    I.waitForElement(this.fields.firstStarName, 5);
    var result1 = await I.grabTextFrom(this.fields.firstStarName);

    I.waitForElement(this.fields.firstActorName, 9);
    var result2 = await I.grabTextFrom(this.fields.firstActorName);
    console.log(result1);
    console.log(result2);
    assert.equal(result1, result2, "Values don't match");


  }

}

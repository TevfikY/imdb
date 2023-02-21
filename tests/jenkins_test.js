Feature('jenkins');

Before(({I})=> {

        I.amOnPage("https://www.trendyol.com/");
})

Scenario('test something',  ({ I }) => {
        I.seeCurrentUrlEquals("https://www.trendyol.com/");
        I.waitForElement("//*[@class='tab-link']/following-sibling::*[3]");
        I.click("//*[@class='tab-link']/following-sibling::*[3]");
});

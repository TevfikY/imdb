Feature('jenkins');

Before(({I})=> {

        I.amOnPage("https://www.trendyol.com/");
})

Scenario('test something',  ({ I }) => {
        I.seeCurrentUrlEquals("https://www.trendyol.com/");
});

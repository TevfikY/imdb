Feature('jenkins');

Before(({I})=> {

        I.amOnPage("https://www.facebook.com/");
})

Scenario('test something',  ({ I }) => {
        I.seeCurrentUrlEquals("https://www.facebook.com/");
});

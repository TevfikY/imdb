Feature('jenkins');

Before(({I})=> {

        I.amOnPage("https://www.facebook.com/");
})

Scenario('test something',  ({ I }) => {
        I.click("u_0_0_JA");
});

Feature('imdb');

Before(({ I }) => {

});

Scenario('Should see first star name and first top cast name are same', ({ I, tefoPage }) => {

    tefoPage.connectAndCheck();
    tefoPage.fillFieldAndEnter("Flash");
    tefoPage.clickOnFirstRecord();
    tefoPage.getRequiredNamesAndCheck();
    
   
});

Scenario('Should open imdb and search for Arrow', ({ I, tefoPage }) => {

    tefoPage.connectAndCheck();
    tefoPage.fillFieldAndEnter("Arrow");
    
    
   
});


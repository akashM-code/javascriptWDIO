describe("Sorting mechanism,", async () => {

    //Sorting elements from the table

    /*
    1. Retrieve the elements from the list
    2. Save in array and perform sorting on it.
    3. Save it in 3rd array.
    */



    it('sorting', async () => {
        browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers');
        var arrange = await $('thead > tr > th:nth-child(1)');
        let itemsLocator = await $$('div > table > tbody >tr >td:nth-child(1)');

    //   console.log(itemsLocator);
      let itemsArrayBefore = itemsLocator.map(itemsName => itemsName.getText());
    //   confirm
    console.log(itemsArrayBefore);
    
    // console.assert()
    // console.trace('show me')





    })
})
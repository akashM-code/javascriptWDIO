describe("Sorting mechanism,", async () => {

    //Sorting elements from the table

    /*
    1. Retrieve the elements from the list
    2. Save in array and perform sorting on it.
    3. Save it in 3rd array.
    */



    // it('sorting', async () => {
    //     await browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers');
    //     var arrange = await $('tr > th:nth-child(1)');
    //     // await arrange.click();
    //     let itemsLocator = await $$('tr td:nth-child(1)');

    //     //   console.log(itemsLocator);
    //     const itemsArrayBefore = await itemsLocator.map(async itemVeg => await itemVeg.getText());
    //     //   confirm
    //     console.log(itemsArrayBefore);

    //     // console.assert()
    //     // console.trace('show me')

    //     //Sort elements
    //     const veggies = await itemsArrayBefore.slice();
    //     console.log('----------------------' + veggies);
        
    //     const elementsAfterSort = await veggies.sort();
    //     console.log('----------------------' + elementsAfterSort);
    //     expect(itemsArrayBefore).toStrictEqual(elementsAfterSort);



    // })

    it('search keyword and check', async() => {
        await browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers');
        browser.pause(3000);
        var search = $$('#search-field')
        await search[0].setValue('Tomato');
        browser.pause(3000);
        var rows = $$('table > tbody > tr > td:nth-child(1)');
        expect(rows[0]).toBeElementsArrayOfSize({eq:2});
        console.log(rows[0].getText());
        expect(rows[0]).toHaveTextContaining('Tomato');




    })
})
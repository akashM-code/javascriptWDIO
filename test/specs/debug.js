describe("Sorting mechanism,", async () => {

    //Sorting elements from the table

    /*
    1. Retrieve the elements from the list
    2. Save in array and perform sorting on it.
    3. Save it in 3rd array.
    */



    it('sorting', async () => {
        await browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers');
        // const arrange = (await $('thead > tr > th:nth-child(1)')).click();
        browser.pause(3000);
        const itemsLocator = $$('div > table > tbody >tr >td:nth-child(1)');

        //   console.log(itemsLocator);
        let itemsArrayBefore = itemsLocator.map(itemVeg => itemVeg.getText());
        console.log(itemsArrayBefore);

        
        //Sort elements
        var veggies = itemsArrayBefore.slice();
        var elementsAfterSort = veggies.sort();
        console.log(elementsAfterSort);
        expect(itemsArrayBefore).toStrictEqual(elementsAfterSort);



    })
})
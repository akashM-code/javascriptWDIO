describe("This is to check Static Dropdown", async () => {


    it('Login success page', async () => {
        browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        console.log('Test page: ' + browser.getTitle());

        const drop = await $('select.form-control');
        drop.selectByAttribute

    })
})
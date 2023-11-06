describe("This is to check Static Dropdown", async () => {


    // it('Login success page', async () => {
    //     browser.url('https://rahulshettyacademy.com/loginpagePractise/');
    //     console.log('Test page: ' + browser.getTitle());

    //     const drop = await $('select.form-control');
    //     // drop.selectByAttribute
    //     browser.saveScreenshot("screenshot.png")

    // })

    it('alert popup', async() =>{
        browser.url('http://only-testing-blog.blogspot.com/');
        (await $('#post-body-7297556448793668582 > div:nth-child(1) > button')).scrollIntoView();
        (await $('#post-body-7297556448793668582 > div:nth-child(1) > button')).doubleClick();
        
    })
})
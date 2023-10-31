describe("This is an ecommerce application", async () => {


    // it('Login fail page', async function () {
    //     //webdriverIO
    //     browser.url('https://rahulshettyacademy.com/loginpagePractise/');
    //     console.log('Test page: ' + browser.getTitle());
    //     await $('#username').setValue("rahulshettyacademy")
    //     await $('#password').setValue("learning")
    //     await $('#signInBtn').click();
    //     browser.pause(10000);

    //     //wait
    //     browser.waitUntil(async () => await $('#signInBtn').getAttribute('value') === 'Sign In',
    //         {
    //             timeout: 5000,
    //             timeoutMsg: "Error message not displayed"
    //         })
    //     await console.log($$('.alert.alert-danger').getText());
    // })

    it('Login success page', async () => {
        browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        console.log('Test page: ' + browser.getTitle());
        await $('#username').setValue("rahulshettyacademy")
        await $('#password').setValue("learning")
        await $('#signInBtn').click();

        //waitUntil checkout button is displayed
        // browser.waitUntil(async () => await $('.nav-link.btn.btn-primary'),
        // {
        //     timeout:1000,
        //     timeoutMsg:"Checkout button not displayed"
        // })
        await $('.nav-link.btn.btn-primary').waitForExist();
        await expect(browser).toHaveUrlContaining('angularpractice');
    })
})
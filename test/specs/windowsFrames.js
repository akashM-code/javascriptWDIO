describe('window frames', async () => {

    //window gets opened in the new tab and operation is performed on that
    // it('windowss frames', async function () {
    //     await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
    //     await $('.blinkingText').click();
    //     const handles = await browser.getWindowHandles();
    //     console.log('handles-------------------' + handles.length);
    //     // await browser.pause(5000)
    //     await browser.switchToWindow(handles[1]);
    //     console.log((await $('h1')).getText());
    //     console.log(await browser.getTitle());

    //     await browser.switchToWindow(handles[0]);
    //     browser.closeWindow();
    //     console.log(await browser.getTitle());
    // })

    //Open new browser or new window
    it('windowss frames', async function () {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        await $('.blinkingText').click();
        const handles = await browser.getWindowHandles();
        console.log('handles-------------------' + handles.length);
        await browser.pause(5000)
        await browser.switchToWindow(handles[1]);
        console.log((await $('h1')).getText());
        console.log(await browser.getTitle());
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
        console.log(await browser.getTitle());
        await browser.pause(5000)
        await browser.newWindow('https://www.google.com/maps');
        console.log('New Title:' + await browser.getTitle());
        await browser.pause(5000)
        await browser.switchWindow('https://www.google.com/')
        console.log('New Title2:' + await browser.getTitle());
    })
})
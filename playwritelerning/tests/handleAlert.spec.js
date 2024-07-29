const{ test, expect } = require('@playwright/test')
const exp = require('constants')

test("Handle Alert",async({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    //await page.locator("//button[text()='Click for JS Alert']").click()
    page.on('dialog',async(dialogueWindow)=>
    {
        expect(dialogueWindow.type()).toContain("alert")

        expect(dialogueWindow.message()).toContain("I am a JS Alert")

        await dialogueWindow.accept()




    })
    await page.locator("//button[text()='Click for JS Alert']").click()

    await page.waitForTimeout(5000)
})

test("Handle confirm alert",async({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    //await page.locator("//button[text()='Click for JS Alert']").click()
    page.on('dialog',async(dialogueWindow)=>
    {
        expect(dialogueWindow.type()).toContain("confirm")

        expect(dialogueWindow.message()).toContain("I am a JS Confirm")

        //await dialogueWindow.accept()

        await dialogueWindow.dismiss()




    })
    await page.locator("//button[text()='Click for JS Confirm']").click()

    await page.waitForTimeout(5000)
})

test("Handle Prompt",async({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    //await page.locator("//button[text()='Click for JS Alert']").click()
    page.on('dialog',async(dialogueWindow)=>
    {
        expect(dialogueWindow.type()).toContain("prompt")

        expect(dialogueWindow.message()).toContain("I am a JS prompt")

        await dialogueWindow.accept("Jeevesh")




    })
    await page.locator("//button[text()='Click for JS Prompt']").click()


    await page.waitForTimeout(5000)
})
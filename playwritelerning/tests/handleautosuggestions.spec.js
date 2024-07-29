const{test,expect}=require("@playwright/test")

// test("verify application title",async({page})=>{
//     await page.goto("https://www.google.com/")
    
//     await page.locator("textarea[name='q']").type("Mukesh Otwani")

//     await page.waitForSelector("//li[@role='presentation']")
    
//     await page.keyboard.press("ArrowDown")

//     await page.keyboard.press("ArrowDown")

//     await page.keyboard.press("Enter")

//     await page.waitForTimeout(2000)


// })



test("verify application title",async({page})=>{
    await page.goto("https://www.google.com/")
    
    await page.locator("textarea[name='q']").type("Mukesh Otwani")

    await page.waitForSelector("//li[@role='presentation']")
    
    const element = await page.$$("//li[@role='presentation']")

    for(let i= 0;i<element ; i++){
        const text = await element[i].textContent()

        if(text.includes('youtube'))
        {
            await element[i].click()
            bre
        }
    }
    await page.waitForTimeout(2000)

    
})
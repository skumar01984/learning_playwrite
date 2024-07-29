const{test,expect}=require("@playwright/test")

test("Practice form",async function({page}){
    await page.goto("https://demoqa.com/automation-practice-form")

    await page.getByPlaceholder("First Name").type("Jeevesh")
    await page.getByPlaceholder("name@example.com").type("jbcjbdj@hbs")
    await page.locator("//label[@for='gender-radio-1']").check()
    await page.getByPlaceholder("Mobile Number").type("0987654321")
    await page.locator("//input[@id='dateOfBirthInput']").fill("14-03-2003")
    await page.locator("//div[@class='subjects-auto-complete__control css-yk16xz-control']").type("Tum")
    //await page.locator("//label[@for='hobbies-checkbox-1']").check()
    await page.getByPlaceholder("Current Address").type("nvjosbv voiisvhounod hvodvoubviuwbv howbvw ibiwivbiwuvbiuwbviuw viwbvbwv")

   c

    await page.close()
    

   // await page.locator("//button[@aria-label='Close button']").click()

    

})
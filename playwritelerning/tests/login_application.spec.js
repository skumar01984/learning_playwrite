const{test,expect}=require("@playwright/test")

test("LogIn in the application",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/#")
    
    await page.locator("//input[@name='username']").type("rahulshettyacademy")
    
    await page.locator("//input[@name='password']").type("learning")

    await page.locator("//input[@name='signin']").click()
    
    await page.locator("//input[@name='terms']").click()
    const newPage = await page.context().newPage();
    await page.locator("//a[text()='iphone X']").click()

    await page.locator("//input[@minlength='2']").type("Jeevesh_Mudgal")

    await page.locator("//input[@name='email']").type("jeevesh@mudgal.com")

    await page.getByPlaceholder("Password").type("hii")

    await page.locator("//input[@id='exampleCheck1']").click()

    await page.locator("//input[@id='inlineRadio1']").click()

    await page.locator("//input[@name='bday']").type("23/2/2002")

    await page.locator("//input[@type='submit']").click

    await page.goBack()

    await page.locator("(//button[text()='Add '])[1]").click()

    await page.locator("//a[text()='iphone X']").click()

    await page.locator("//a[text()='Home']").click()

    await page.waitForTimeout(2000)
    
})

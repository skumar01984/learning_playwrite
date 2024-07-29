const{test,expect}=require("@playwright/test")

test("Login application",async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").type("Admin")

    await page.getByPlaceholder("Password").type("admin123")

    await page.locator("//button[@type='submit']").click()

    //await page.waitForTimeout(5000)

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

   await page.getByAltText("profile picture").click()

   await page.getByText("Logout").click()

   await page.waitForTimeout(2000)

   await expect(page).toHaveURL(/login/)




})
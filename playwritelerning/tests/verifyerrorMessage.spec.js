const{test,expect}=require("@playwright/test")

test("verify message",async function({page}){
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

   await page.viewportSize().width()

   await page.getByPlaceholder("Username").type("Admin")

   await page.getByPlaceholder("Password").type("admin13")

   await page.locator("//button[@type='submit']").click()

  const errorMessage= await page.locator("//p[contains(@class,'oxd-alert-content-text')]").textContent()

  console.log("Error Message :" +errorMessage);

  expect(errorMessage.includes("Invalid")).toBeTruthy()

})
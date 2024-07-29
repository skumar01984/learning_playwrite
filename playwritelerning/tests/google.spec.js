const{test,expect}=require ('@playwright/test')

test("Verify application title",async function({page}){
   await page.goto("https://www.google.com/")
   const url = await page.url()
   console.log("title is url: " +url);

   const title = await page.title()

   console.log("Title is : " +title);

   await expect(page).toHaveTitle("Google")
})
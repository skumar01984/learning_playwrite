const {test, expect}= require('@playwright/test')

test("select values from dropdown",async function({page}){

 await page.goto("https://formstone.it/components/dropdown/demo/")

 await page.locator("//button[@id='demo_basic-dropdown-selected']").selectText("Two")




})
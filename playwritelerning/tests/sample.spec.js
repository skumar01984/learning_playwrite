const{test,expect}=require ('@playwright/test')

test("my first test",async function({page}){
    expect(12).toBe(12)
})
test.skip("my second test",async function({page}){
    expect(12).toBe(13)

})
test("my third test",async function({page}){
    expect(100).toBe(100)

})
test("my fourth test",async function({page}){
    expect("Jeevesh Mudgal").toContain("Jeevesh")

})
test("my fifth test",async function({page}){
    expect(true).toBeTruthy()

})
test("my sixth test",async function({page}){
    expect(false).toBeFalsy()

})
test("my seventh test",async function({page}){
    expect("Jeevesh Mudgal".includes("Mudgal")).toBeTruthy()

})


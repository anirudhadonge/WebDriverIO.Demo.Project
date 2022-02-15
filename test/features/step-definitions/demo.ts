import {Given,When,Then} from "@wdio/cucumber-framework"
import chai from "chai"

Given(/^Google page is opened$/, async function(){
    console.log("Before opening browser")
    await browser.maximizeWindow()
    await browser.url("https://www.google.com")
    console.log("After opening browser")
    })


When(/^Search with (.*)$/, async function(searchItem){
    console.log("Before opening browser")
    let textBox = $('[name=q]')
    await textBox.setValue(searchItem)
    await (await textBox).keys("Enter")
})

Then(/^Click on the first search result$/, async function(){
    let link = $('<h3>')
    await link.click()
    await browser.pause(3000)
})

Then(/^URL should match (.*)$/, async function(expectedUrl){
    console.log('>>>> expectedURl :" ${expectedUrl}')
    let currentUrl = await browser.getUrl()
    chai.expect(currentUrl).to.equals(expectedUrl)
})

When(/^A web page is open$/, async function(){
    console.log("Before opening browser")
    await browser.maximizeWindow()
    await browser.url("")
    console.log("After opening browser")
})

Then(/^Perform web Interactions$/,async function(){
    await browser.url('/inputs')
    await browser.pause(5000)
})
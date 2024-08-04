import { Given, When, Then } from '@wdio/cucumber-framework'
import { browser, expect, $ } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import RegisterPage from '../pageobjects/register.page.js'

Given('user already on home page', async () => {
    await LoginPage.open()
})

When('user navigates to the registration page', async () => {
    await LoginPage.clickRegister()
})

When(
    'user input valid registration details with name {string}, email {string}, and password {string}',
    async (store, email, password) => {
        await RegisterPage.registration(store, email, password)
    },
)

Then('user should be registered successfully', async () => {
    await RegisterPage.validateRegisterSuccess()
    await LoginPage.validateOnLoginPage()
    // await browser.debug()
    // await browser.pause(3000)
})

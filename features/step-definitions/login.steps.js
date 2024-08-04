import { Given, When, Then } from '@wdio/cucumber-framework'
import { browser, expect, $ } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import DashboardPage from '../pageobjects/dashboard.page.js'

Given('user already on login page', async () => {
    await LoginPage.open()
})

// When(
//     'user input login credentials with email {string} and password {string}',
//     async (email, password) => {
//         await LoginPage.login(email, password)
//     },
// )

When(
    /^user input login credentials with email "([^"]*)" and password "([^"]*)"$/,
    async (email, password) => {
        await LoginPage.login(email, password)
    },
)

Then(
    'user is successfully logged in and redirected to the dashboard page',
    async () => {
        await DashboardPage.validateOnDashboardPage()
        // await browser.debug()
        // await browser.pause(3000)
    },
)

Then(
    `user sees a popup with the error message "Kredensial yang Anda berikan salah"`,
    async () => {
        const errorMessage = 'Kredensial yang Anda berikan salah'
        await LoginPage.validateErrorPopupMessage(errorMessage)
    },
)

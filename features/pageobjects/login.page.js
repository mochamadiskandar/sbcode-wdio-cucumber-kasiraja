import { $ } from '@wdio/globals'
import Page from './page.js'

class LoginPage extends Page {
    open(path) {
        return super.open('login')
    }

    get inputEmail() {
        return $("//input[@id= 'email']")
    }

    get inputPassword() {
        return $("//input[@id= 'password']")
    }

    get loginButton() {
        return $("//button[@type= 'submit'][text()='login']")
    }

    get linkRegister() {
        return $("//a[contains(text(), 'daftar')]")
    }

    async login(email, password) {
        await this.inputEmail.setValue(email)
        await this.inputPassword.setValue(password)

        const loginButtonValue = await this.loginButton.getValue()
        console.log(
            '🚀 ~ LoginPage ~ login ~ loginButtonValue:',
            loginButtonValue,
        )

        await this.loginButton.click()
    }

    async clickRegister() {
        await this.linkRegister.waitForDisplayed({ timeout: 3000 })
        const linkRegisterText = await this.linkRegister.getText()
        console.log(
            '🚀 ~ LoginPage ~ clickRegister ~ textRegister:',
            linkRegisterText,
        )
        await this.linkRegister.click()
    }

    async validateOnLoginPage() {
        const currentUrl = await browser.getUrl()
        console.log('🚀  ~ currentUrl:', currentUrl)
        expect(currentUrl[0]).toContain('login')
    }
}
export default new LoginPage()

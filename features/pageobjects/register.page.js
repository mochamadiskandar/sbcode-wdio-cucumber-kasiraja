import { $ } from '@wdio/globals'
import Page from './page.js'

class RegisterPage extends Page {
    open(path) {
        return super.open('register')
    }

    get inputStoreName() {
        return $("//input[@id='name'][@type='text']")
    }

    get inputEmail() {
        return $("//input[@id='email'][@type='email']")
    }

    get inputPassword() {
        return $("//input[@id='password'][@type='password']")
    }

    get registerButton() {
        return $("//button[@type='submit'][contains(text(), 'daftar')]")
    }

    get alertRegister() {
        /* 
        sample get manual element alert
        <div id="toast-5-title" class="chakra-alert__title css-tidvy5">Toko berhasil didaftarkan</div>

        <div id="toast-7-title" class="chakra-alert__title css-tidvy5">Toko berhasil didaftarkan</div>
        */

        // karena id selalu dinamis, baiknya pakai contains pada class atau text
        return $(
            "//div[contains(@class, 'chakra-alert__title')][contains(text(), 'Toko berhasil didaftarkan')]",
        )
    }

    async registration(store, email, password) {
        await (await this.inputStoreName).setValue(store)
        await (await this.inputEmail).setValue(email)
        await (await this.inputPassword).setValue(password)
        await this.registerButton.click()
    }

    async validateRegisterSuccess() {
        await this.alertRegister.waitForDisplayed({ timeout: 5000 })
        const alertText = await this.alertRegister.getText()
        console.log('🚀 ~ alertText bro:', alertText)
        await expect(alertText).toContain('Toko berhasil didaftarkan')
    }
}

export default new RegisterPage()

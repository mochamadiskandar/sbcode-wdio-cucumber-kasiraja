import { $ } from '@wdio/globals'
import Page from './page.js'

class DashboardPage extends Page {
    open(path) {
        return super.open('dashboard')
    }

    get titleDashboard() {
        return $("//div[contains(text(),'dashboard')]")
    }

    async validateOnDashboardPage() {
        await expect(await this.titleDashboard.isDisplayed())
    }
}

export default new DashboardPage()

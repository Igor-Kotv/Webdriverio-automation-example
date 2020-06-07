class careersPage {

    get openpos() {
        return $('/html/body/div[4]/main/div[2]/div/div[1]/div/p[2]/a[1]')
    }
    SetOpenPos() {
        this.openpos.click()
    }

    get Labels() {
        return $('/html/body/div[4]/main/div[2]/div/div[3]')
    }
    SetLbs() {
        this.Labels.getText()
    }

}
module.exports = new careersPage()
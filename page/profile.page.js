class profilePage {

    get Hlink() {
        return $('.details-overlay.details-reset.js-feature-preview-indicator-container [role="button"]')
    }
    SetHlink() {
        this.Hlink.click()

    }

    get Profile() {
        return $('/html/body/div[1]/header/div[7]/details/details-menu/div[1]/a')
    }
    SetProfile() {
        this.Profile.click()
        this.Profile.getText()
    }

    get signout() {
        return $('/html/body/div[1]/header/div[7]/details/details-menu/form/button')
    }
    SetSgnt() {
        this.signout.click()
    }

}
module.exports = new profilePage()
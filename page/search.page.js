class searchPage {

    get Typescrpt() {
        return $('//*[@id="js-pjax-container"]/div/div[2]/div[1]/ul/li[2]/a')
    }
    SetTypescrpt() {
        this.Typescrpt.click()
    }
    get reslt() {
        return $('//*[@id="js-pjax-container"]/div/div[3]/div/ul/li[1]/div[2]/div[1]/a')
    }
    SetReslt() {
        this.reslt.click()
    }
}
module.exports = new searchPage()
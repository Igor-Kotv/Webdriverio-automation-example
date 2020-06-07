class entPage {

    get Entcld() {
        return $('//*[@id="js-pjax-container"]/div/div[2]/div/div/div/div[1]/div/div[1]/a')
    }
    setEntcld() {
        this.Entcld.click()
    }

    get Entsrv() {
        return $('//*[@id="js-pjax-container"]/div/div[2]/div/div/div/div[2]/div[1]/a')
    }
    SetEntsrv() {
        this.Entsrv.click()
    }

   


}
module.exports = new entPage()
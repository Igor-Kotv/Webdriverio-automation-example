class pricingPage {



      get Free() {
        return $('/html/body/div[4]/main/div[1]/div[4]/div/div[1]/div[2]/a')
    }
    SetFree() {
        this.Free.click()
    }
}
module.exports = new pricingPage()
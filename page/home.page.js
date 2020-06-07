class homePage {

    get login() {
        return $('.form-group.mt-0 [id="user[login]"]')
    }
    SetLogin(val1) {
        this.login.setValue(val1)
    }
    get email() {
        return $('.form-group [id="user[email]"]')
    }

    SetEmail(val2) {
        this.email.setValue(val2)
    }

    get pass() {
        return $('.form-group [id="user[password]"]')
    }
    SetPass(val3) {
        this.pass.setValue(val3)
    }

    get signButton() {
        return $('[type="submit"]')
    }
    SetSing() {
        this.signButton.click()
    }

    get Whygithub() {
        return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[1]/details/summary')
    }
    SetWhy() {
        this.Whygithub.isDisplayed()
        this.Whygithub.moveTo()
    }
    get Explore() {
        return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[4]/details/summary')
    }
    SetExplore() {
        this.Explore.isDisplayed()
        this.Explore.moveTo()
        this.Explore.click()
    }
    get Pricing() {
        return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[6]/details/summary')
    }
    SetPricing() {
        this.Pricing.isDisplayed()
        this.Pricing.moveTo()
        this.Pricing.click()
    }
    get Plans() {
        return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[6]/details/div/a')
    }
    SetPlans() {
        this.Plans.waitForClickable();
        this.Plans.click()
        this.Plans.moveTo()
    }
    get ExpGH(){
        return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[4]/details/div/ul[1]/li/a')
    }
    SetExpGH(){
        this.ExpGH.click()
    }

    get search(){
        return $('/html/body/div[1]/header/div/div[2]/div[2]/div/div/div/form/label/input[1]')
    }
    SetSearch(val){
        this.search.setValue(val)
    }
    get Enterprs(){
        return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[3]/a')
    }
    SetEnt(){
        this.Enterprs.click()
    }

    get strtfr() {
        return $('/html/body/div[4]/main/div[1]/div/div/div/div[1]/div/div[1]/div/a')
    }
    SetSf() {
        this.strtfr.click()
    }

    get careers(){
        return $('/html/body/footer/div[1]/div/div[5]/ul/li[3]/a')
    }
SetCareers(){
    this.careers.click()
    this.careers.scrollIntoView()
}


}
module.exports = new homePage()
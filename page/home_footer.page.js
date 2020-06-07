class homefPage {

    get login(){
    return $('.m-0 [id="user[login]-footer"]')
    }
    SetLogin (val1) {
        this.login.setValue(val1)
    }
    get email(){
    return $('.m-0 [id="user[email]-footer"]')
    }

    SetEmail (val2) {
        this.email.setValue(val2)
    }

    get pass(){
    return $('.form-group.col-12.col-sm-8.col-lg-3.mx-auto.mt-0.mx-lg-0.mb-3.mb-lg-0.px-3 [id="user[password]-footer"]')
    }
    SetPass (val3) {
        this.pass.setValue(val3)
    }

    get signButton(){
    return $('.col-12.col-sm-8.col-lg-3.mx-auto.mx-lg-0.mb-3.mb-lg-0.px-3.mt-4 [type="submit"]')
    }
    SetSing () {
        this.signButton.click()
    }
}
module.exports = new homefPage()
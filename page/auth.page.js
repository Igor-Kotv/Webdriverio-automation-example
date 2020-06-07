class authorisePage {

    get redir() {
        return $('.d-lg-flex.flex-items-center.px-3.px-lg-0.text-center.text-lg-left [href="/login"]')
    }
    SetRedir() {
        this.redir.click()
    }

    get forgot() {
        return $('.auth-form-body.mt-3 [href="/password_reset"]')
    }
    SetForgot() {
        this.forgot.click()
    }

    get login() {
        return $('.auth-form-body.mt-3 [id="login_field"]')
    }
    SetLogin(val1) {
        this.login.setValue(val1)
    }


    get pass() {
        return $('.auth-form-body.mt-3 [id="password"]')
    }
    SetPass(val2) {
        this.pass.setValue(val2)
    }


    get signButton() {
        return $('.auth-form-body.mt-3 [type="submit"]')
    }
    SetSing() {
        this.signButton.click()
    }

    get verify(){
        return $('/html/body/div[4]/main/div/div[2]/div/form/div/h2')
    }
    SetVerify(){
        this.verify.getText()
    }
}
module.exports = new authorisePage()
class entcldPage {



    get login() {
        return $('#user_login')
    }
    SetLogin(val1) {
        this.login.setValue(val1)
    }

    get email() {
        return $('#user_email')
    }

    SetEmail(val2) {
        this.email.setValue(val2)
    }

    get pass() {
        return $('#user_password')
    }
    SetPass(val3) {
        this.pass.setValue(val3)
    }


}
module.exports = new entcldPage()
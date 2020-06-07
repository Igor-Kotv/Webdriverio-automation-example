class resetPage {

    get redir() {
        return $('.d-lg-flex.flex-items-center.px-3.px-lg-0.text-center.text-lg-left [href="/login"]')
    }
    SetRedir() {
        this.redir.click()
    }

    get forgot() {
        return $('.auth-form-body.mt-3 [href="/password_reset"]')
    }
    SetRedir() {
        this.forgot.click()
    }

    get email() {
        return $('.auth-form-body.mt-3 [id="email_field"]')
    }
    SetEmail(val1) {
        this.email.setValue(val1)
    }

    get resetButton() {
        return $('.auth-form-body.mt-3 [type="submit"]')
    }
    SetSing() {
        this.resetButton.click()
    }
}
module.exports = new resetPage()
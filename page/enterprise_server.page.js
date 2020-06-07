class entsrvPage {



    get login() {
        return $('#contact_request_name')
    }
    SetLogin(val1) {
        this.login.setValue(val1)
    }

    get org() {
        return $('#contact_request_organization_name')
    }
    SetOrg(vorg) {
        this.org.setValue(vorg)
    }

    get email() {
        return $('#contact_request_email')
    }
    SetEmail(val2) {
        this.email.setValue(val2)
    }

    get phn() {
        return $('#contact_request_phone')
    }
    SetPhn(pn) {
        this.phn.setValue(pn)
    }



    get instrb() {
        return $('#contact_request_instance_type_onprem')
    }
    SetInstrb() {
        this.instrb.click()
    }

    get yn() {
        return $('#questions_yes')
    }
    SetYN() {
        this.yn.click()
    }

    get qst() {
        return $('#questions-list')
    }
    SetQ(val3) {
        this.qst.setValue(val3)
    }

    get accpt() {
        return $('#contact_request_agreed_to_terms')
    }
    SetAccpt() {
        this.accpt.click()
    }

}
module.exports = new entsrvPage()
const homePage = require('../page/home.page.js');
const homefPage = require('../page/home_footer.page.js');
const authorisePage = require('../page/auth.page.js');
const authorisePlan = require('../page/auth_plan.page.js');
const resetPage = require('../page/reset.page.js');
const pricingPage = require('../page/pricing.page.js');
const explorePage = require('../page/explore.page.js');
const searchPage = require('../page/search.page.js');
const entPage = require('../page/enterprise_plan_select.page.js');
const entcldPage = require('../page/enterprise_cloud.page.js');
const entsrvPage = require('../page/enterprise_server.page.js');
const careerPage = require('../page/careers.page.js');
const profilePage = require('../page/profile.page.js');
const assert = require('assert');
function enter() {
browser.keys("Enter");
};
// random input generator
var n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var ch = ["Jacka", "Opr", "ABC", "Com", "lOl"];
var sym = ["-", "+", "@", "_", "$"];
var rA = Math.floor(Math.random() * n.length);
var rB = Math.floor(Math.random() * ch.length);
var rC = Math.floor(Math.random() * sym.length);
var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
var nums = '1234567890'
var str = '';
var nstr = '';
for (var ii = 0; ii < 7; ii++) {
    str += chars[Math.floor(Math.random() * chars.length)];
}
for (var ii = 0; ii < 7; ii++) {
    nstr += nums[Math.floor(Math.random() * nums.length)];
}
var pn = nstr;
var eml = str + "@" + ch[rB] + "." + ch[rB];
var usr = ch[rB] + str;
var pss = str + ch[rB] + sym[rC] + n[rA];

console.time('Time_run'); 

//if running all tests, console.log might miss some outputs

describe.only('Creating a new account', () => {
    //04/24/20 (added check if form is displayed)
    it('Should sign up', () => {
        browser.deleteAllCookies()
        browser.url('https://github.com')
        browser.pause(2000);
        while (homePage.login.isDisplayed() == false) {
            browser.deleteAllCookies();
            browser.refresh();
            if (homePage.login.isDisplayed() == true) break;
        }
        homePage.login.setValue(usr);
        homePage.email.setValue(eml);
        homePage.pass.setValue(pss);
        if (homePage.signButton.isClickable() == true) {
            homePage.signButton.click();
            
        }
        else {
            enter();
        }
        browser.pause(2000);
        const value = browser.getUrl();
        assert(value === 'https://github.com/join')
    })

})



describe('Creating a new account', () => {

    it('Should sign up', () => {
        browser.deleteAllCookies()
        browser.url('https://github.com')
        browser.pause(3000);
        homefPage.login.scrollIntoView()
        homefPage.login.setValue(usr);
        homefPage.email.setValue(eml);
        homefPage.pass.setValue(pss);
        homefPage.signButton.click()
        browser.pause(4000);
    })

})


describe.skip('Authorising account', () => {

    it('should authorise', () => {
        browser.deleteAllCookies()
        browser.url('https://github.com')
        browser.pause(2000);
        authorisePage.redir.click()
        browser.pause(4000);
        authorisePage.login.setValue('Testy-123');
        browser.pause(1000);
        authorisePage.pass.setValue('blaaBla23_t');
        browser.pause(1000);
        authorisePage.signButton.click()
        browser.pause(3000);

    })
    it('should check profile', () => {
        profilePage.Hlink.click()
        pr = profilePage.Profile.getText()
        var chk = new RegExp("Testy-123");
        var reslt = chk.test(pr);
        console.log('Profile has login name: ' + reslt)
        browser.pause(3000);
        profilePage.Profile.click() //must redirect in authorised
        browser.pause(3000);

    });
    it('should signout', () => {

        profilePage.Hlink.click()
        browser.pause(1000);
        profilePage.signout.click() //must sign out
        browser.pause(3000);
    });
})


describe('Negative reset password', () => {

    it('should not reset password', () => {
        browser.deleteAllCookies()
        browser.url('https://github.com')
        browser.pause(2000);
        resetPage.redir.click()
        browser.pause(2000);
        resetPage.forgot.click()
        browser.pause(2000);
        resetPage.resetButton.click()
        browser.pause(1000);
        resetPage.email.setValue("blabla") //no host
        browser.pause(1000);
        resetPage.resetButton.click()
        resetPage.email.setValue("testmail@testss.ku") // That address is not a verified primary
        browser.pause(1000);
        resetPage.resetButton.click()
        browser.pause(1000);

    })

})

describe.skip('Positive reset password', () => {

    it('should reset password', () => {
        browser.deleteAllCookies()
        browser.url('https://github.com')
        browser.pause(2000);
        resetPage.redir.click()
        browser.pause(2000);
        resetPage.forgot.click()
        browser.pause(2000);
        resetPage.email.setValue("rock_kat@mail.ru")
        resetPage.resetButton.click()
        browser.pause(1000);

    })

    it('should check', () => {
        const Mess = $('.auth-form-body.mt-3 [class="mt-0"]')
        console.log("Successful reset text: " + Mess.getText());
        
    });

})


describe('Header buttons check', () => {

    it('should check Why GitHub', () => {
        browser.deleteAllCookies()
        browser.url('https://github.com')
        browser.pause(1000);
        homePage.Whygithub.moveTo();
        browser.pause(1000);
    })


    it('should check Explore', () => {
        browser.refresh();
        browser.pause(1000);
        homePage.Explore.moveTo();
        browser.pause(1000);
    })

    it('should check Pricing', () => {
        browser.refresh();
        browser.pause(1000);
        homePage.Pricing.moveTo();
        browser.pause(1000);
    })


    it('should print results', () => {
        let dispw = homePage.Whygithub.isDisplayed();
        let dispe = homePage.Explore.isDisplayed();
        let dispp = homePage.Pricing.isDisplayed();
        console.log("Why GitHub is displayed? " + dispw + "\nExplore is displayed? " + dispe, 
         "\nPricing is displayed? " + dispp);
        
    })
})
describe('Choosing a free plan', () => {

    it('should choose free plan', () => {
        browser.deleteAllCookies()
        browser.url('https://github.com')
        browser.pause(2000);
        while (homePage.Plans.isDisplayed() == false) {
            homePage.Pricing.moveTo();
            browser.pause(500);
            if(homePage.Plans.isDisplayed() == true) break;
        }
        homePage.Plans.click();
        browser.pause(2000);
        pricingPage.Free.click();
        authorisePlan.login.setValue(usr);
        authorisePlan.email.setValue(eml);
        authorisePlan.pass.setValue(pss);
        browser.pause(3000);
    })

})

describe('Explore page opens with highlighted text', () => {

    it('should check explore page', () => {
        browser.deleteAllCookies()
        browser.url('https://github.com')
        browser.pause(2000);
        while (homePage.ExpGH.isDisplayed() == false) {
            homePage.Explore.moveTo();
            browser.pause(500);
            if(homePage.ExpGH.isDisplayed() == true) break;
        }
        homePage.ExpGH.click();
        browser.pause(2000);
        explorePage.topics.click()
        browser.pause(2000);

    })

    it('should check topics highlighted text', () => {
        let DispTpx = explorePage.topicsText.isDisplayed();
        let TextTpx = explorePage.topicsText.getText();
        console.log("Topics is displayed? " + DispTpx + "; text is: " + TextTpx);
    });

})


describe('Search', () => {

    it('should check search', () => {
        browser.deleteAllCookies()
        browser.url('https://github.com')
        browser.pause(2000);
        homePage.search.setValue('webdriverio');
        browser.keys("Enter");
        browser.pause(3000);
        searchPage.Typescrpt.click();
        browser.pause(2000);
        searchPage.reslt.click()
        browser.pause(1000);
    })

    it('should check URL', () => {
        DispURL = browser.getUrl()
        var wbdrv = new RegExp("webdriverio");
        var reslt = wbdrv.test(DispURL);
        console.log('URL has webdriverio: ' + reslt)
    });
})

describe('Enterprise plans check', () => {

    it('should check Enterprise cloud plan', () => {
        browser.deleteAllCookies()
        browser.url('https://github.com')
        browser.pause(2000);
        homePage.Enterprs.click();
        browser.pause(1000);
        homePage.strtfr.click();
        browser.pause(1000);
        entPage.Entcld.click();
        entcldPage.login.setValue(usr);
        entcldPage.email.setValue(eml);
        entcldPage.pass.setValue(pss);
        browser.pause(2000);


    })

    it('should check Enterprise server plan', () => {

        browser.back();
        browser.pause(2000);
        entPage.Entsrv.click();
        browser.pause(1000);
        entsrvPage.login.setValue(usr);
        entsrvPage.org.setValue(usr);
        entsrvPage.email.setValue(eml);
        entsrvPage.phn.setValue(pn);
        entsrvPage.instrb.click();
        entsrvPage.yn.click();
        entsrvPage.qst.setValue('Ok, I did this test! Best regards, Igor Kotvytskyi');
        browser.pause(2000);
        entsrvPage.accpt.click();
        browser.pause(2000);
    })

})

describe('Careers list into log', () => {

    it('should open careers list', () => {
        browser.deleteAllCookies()
        browser.url('https://github.com')
        browser.pause(2000);
        homePage.careers.scrollIntoView();
        browser.pause(1000);
        homePage.careers.click()
        browser.pause(2000);
        careerPage.openpos.click();
        browser.pause(5000);
    })
    it('should log list', () => {

        text = careerPage.Labels.getText();
        console.log('Open positions are in: ' + text);
        browser.pause(2000);
        console.timeEnd('Time_run');
    })

})











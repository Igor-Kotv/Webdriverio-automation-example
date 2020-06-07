class authorisePage {


    get topics() {
        return $('/html/body/div[4]/main/div[1]/nav/div/a[2]')
    }
    SetTopics() {
        this.topics.click()
    }
    get topicsText() {
        return $('/html/body/div[4]/main/div[2]/div/h1')
    }
    SetTopicsTx() {
        this.topicsText.isDisplayed();
        this.topicsText.getText();
    }

    
}
module.exports = new authorisePage()
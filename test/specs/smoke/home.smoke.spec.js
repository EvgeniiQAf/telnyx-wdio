const HomePage = require('../../../src/pages/HomePage');
const HeroSection = require('../../../src/components/home/HeroSection.component');
const transcription = require('../../../src/fixtures/transcription.json');
const DevelopersSection = require('../../../src/components/home/DeveloperSection.component');
const codeSnippet = require('../../../src/fixtures/codeSnippet.json');


describe('Telnyx – Smoke (WebdriverIO)', () => {

    it('TC-01: Verify Home Page Loads Successfully', async () => {
        await HomePage.openHome();
        await HomePage.shouldBeLoaded();
    });

    it('TC-02: Verify clicking Telnyx logo redirects to Home page', async () => {
        await HomePage.openHome();
        await HomePage.logo.waitForClickable({ timeout: 5000 });
        await HomePage.clickLogo();
    });

    it('TC-03: Verify audio file upload and transcription starts successfully', async () => {
        await HomePage.openHome();
        await HeroSection.openSpeechToText();
        await HeroSection.uploadAudioFile();
        await HeroSection.shouldSeeTranscription(transcription.expectedText);
    });

    it('TC-04: Verify code snippet updates for "Send a message" tab', async () => {

        await HomePage.openHome();

        await DevelopersSection.openSection();
        await DevelopersSection.openSendMessageTab();
        await DevelopersSection.shouldSeeCodeSnippetParts(codeSnippet.sendMessage);

    });

});

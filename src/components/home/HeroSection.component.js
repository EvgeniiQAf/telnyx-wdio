const path = require('path');

class HeroSection {

    speechToTextSelector = '//*[text()="Speech to text"]';
    uploadButtonSelector = '//*[text()="UPLOAD FILE"]';
    fileInputSelector = 'input[type="file"]';
    transcriptionSelector = '#speech-to-text-conversation';

    get speechToTextTab() {
        return $(this.speechToTextSelector);
    }

    get uploadButton() {
        return $(this.uploadButtonSelector);
    }

    get fileInput() {
        return $(this.fileInputSelector);
    }

    get transcriptionField() {
        return $(this.transcriptionSelector);
    }

    async openSpeechToText() {
        await this.speechToTextTab.waitForDisplayed({ timeout: 10000 });
        await this.speechToTextTab.scrollIntoView();
        await this.speechToTextTab.click();
    }

    async uploadAudioFile() {
        const filePath = path.resolve('./src/fixtures/voice.m4a');
        const remoteFilePath = await browser.uploadFile(filePath);

        const input = await this.fileInput;

        await input.waitForExist({ timeout: 5000 });

        await browser.execute((el) => {
            el.classList.remove('hidden');
            el.style.display = 'block';
            el.style.visibility = 'visible';
            el.style.opacity = '1';
        }, input);

        await input.setValue(remoteFilePath);
    }

    async shouldSeeTranscription(expectedText) {
        await this.transcriptionField.waitForDisplayed({ timeout: 3000 });

        await browser.waitUntil(async () => {
            const text = await this.transcriptionField.getText();
            return text.includes(expectedText);
        }, {
            timeout: 30000,
            timeoutMsg: 'Transcription did not appear'
        });
    }

}

module.exports = new HeroSection();

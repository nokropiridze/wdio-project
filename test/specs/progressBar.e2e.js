const { expect } = require('chai');

describe('Task 2: Progress Bar in Incognito', () => {
  it('should start progress bar and verify reset button behavior', async () => {
    // Go directly to Progress Bar page
    await browser.url('https://demoqa.com/progress-bar');

    const startButton = await $('#startStopButton');
    await startButton.waitForDisplayed({ timeout: 10000 });
    await startButton.click();

    const resetButton = await $('#resetButton');
    await resetButton.waitForDisplayed({ timeout: 15000 });
    expect(await resetButton.isDisplayed()).to.be.true;

    
    await browser.refresh();

    
    const resetBtnAfterRefresh = await $('#resetButton');
    const isResetDisplayed = await resetBtnAfterRefresh.isDisplayed();
    expect(isResetDisplayed).to.be.false;
  });
});

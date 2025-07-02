describe('Nested Frames Test', () => {
  it('should get text from left and middle frames', async () => {
    await browser.url('https://the-internet.herokuapp.com/nested_frames');

    
    const frameTop = await $('frame[name="frame-top"]');
    await frameTop.waitForExist({ timeout: 30000 });
    await browser.switchToFrame(frameTop);

   
    const frameLeft = await $('frame[name="frame-left"]');
    await frameLeft.waitForExist({ timeout: 30000 });
    await browser.switchToFrame(frameLeft);

   
    const leftText = await $('body').getText();
    console.log('Left frame text:', leftText);
    expect(leftText.trim()).toBe('LEFT');

    
    await browser.switchToParentFrame();

   
    const frameMiddle = await $('frame[name="frame-middle"]');
    await frameMiddle.waitForExist({ timeout: 30000 });
    await browser.switchToFrame(frameMiddle);

    
    const middleText = await $('#content').getText();
    console.log('Middle frame text:', middleText);
    expect(middleText.trim()).toBe('MIDDLE');

    
    await browser.switchToParentFrame(); 
    await browser.switchToParentFrame(); 
  });
});

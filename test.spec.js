require('babel-register');
require('babel-polyfill');
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://www.baidu.com');
    await driver.findElement(By.name('wd')).sendKeys('Jerry', Key.RETURN);
    await driver.wait(until.titleIs('Jerry_百度搜索'), 1000);
  } finally {
    await driver.quit();
  }
})();
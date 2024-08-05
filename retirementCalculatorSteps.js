const { Given, When, Then } = require('cucumber');
const CalculatorPage = require('../pages/calculatorPage');
const data = require('../testData/retirementData.json');
const assert = require('chai').assert;

Given('I am on the retirement calculator page', () => {
    browser.url('https://www.securian.com/insights-tools/retirement-calculator.html');
});

When('I fill the form with valid data', () => {
    CalculatorPage.fillRetirementForm(data);
});

When('I submit the form', () => {
    CalculatorPage.submitForm();
});

Then('I should see the retirement calculation result', () => {
    const result = $('#result').getText();
    assert.isNotEmpty(result, 'Result is empty');
});

const { Given, When, Then,And } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page');
const preretcal=require('../pageobjects/PreRetirementCalculatorPage');
const { default: preretirementCalculatorPage } = require('../pageobjects/preretirementCalculator.page');
const{currentAge,retirementAge,currentAnnualIncome,spousesAnnualIncome,currentRetirementSavings,currentRetirementContribution,annualRetirementContributionIncrease,socialSecurityOverride}=require('../testdata/preRetirementCalculator-data.js')


const pages = {
    login: LoginPage
}



Given('I am on the Retirement Savings Calculator page', async() => {
	await preretirementCalculatorPage.browserLaunch();
});

When('I fill in all the required fields with valid data', async() => {
	await preretirementCalculatorPage.enterCurrentAge(currentAge);
	await preretirementCalculatorPage.enterAgePlanToRetire(retirementAge);
	await preretirementCalculatorPage.enterSpouseAnnualIncome(currentAnnualIncome);
	await preretirementCalculatorPage.enterSpouseAnnualIncome(spousesAnnualIncome);
	await preretirementCalculatorPage.enterCurrentRetirementSavingsBalance(currentRetirementSavings);
	await preretirementCalculatorPage.currentSavingsEachYear(currentRetirementContribution);
	await preretirementCalculatorPage.enterRateOfIncreaseSavingsEachYear(annualRetirementContributionIncrease);
	await preretirementCalculatorPage.selectSocialSecurityIncome('Yes');
	await preretirementCalculatorPage.selectMaritalStatus('Married');
	await preretirementCalculatorPage.enterSocialSecurityOverideAmount(socialSecurityOverride);
	
});

When('I submit the form', async(page) => {
	await preretirementCalculatorPage.clickOnSubmitBtn();

});

Then('I should see the form submitted successfully', async() => {
	await preretirementCalculatorPage.resultsChartValidation();
});

When('I toggle the Social Security benefits to Yes', async() => {
	await preretirementCalculatorPage.enterCurrentAge(currentAge);
	await preretirementCalculatorPage.enterAgePlanToRetire(retirementAge);
	await preretirementCalculatorPage.enterSpouseAnnualIncome(currentAnnualIncome);
	await preretirementCalculatorPage.enterSpouseAnnualIncome(spousesAnnualIncome);
	await preretirementCalculatorPage.enterCurrentRetirementSavingsBalance(currentRetirementSavings);
	await preretirementCalculatorPage.currentSavingsEachYear(currentRetirementContribution);
	await preretirementCalculatorPage.enterRateOfIncreaseSavingsEachYear(annualRetirementContributionIncrease);
	await preretirementCalculatorPage.selectSocialSecurityIncome('Yes');
});

Then('I should see additional Social Security fields displayed', async() => {
	await preretirementCalculatorPage.maritalStatusSectionValidation();
	await preretirementCalculatorPage.securityOverideAmtSectionValidation();
});

Then('when I toggle the Social Security benefits to No', async() => {
	await preretirementCalculatorPage.selectSocialSecurityIncome('No');
});

Then('I should see the additional fields hidden', async() => {
	await preretirementCalculatorPage.selectNOSecurityIncome();
});


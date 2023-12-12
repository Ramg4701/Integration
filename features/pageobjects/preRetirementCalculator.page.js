const { $ } = require('@wdio/globals')
const Page = require('./page.js');
const commonActions = require('./commonActions.js');
//const{currentAge,retirementAge,currentAnnualIncome,spousesAnnualIncome,currentRetirementSavings,currentRetirementContribution,annualRetirementContributionIncrease,socialSecurityOverride}=require('../testdata/preRetirementCalculator-data.js')

class PreRetirementCalculatorPage extends Page {
constructor(){
    
    this.Page=page;
    super(page)
    this.testInfo=this.testInfo;
    this.age='(//input[@class="required age"])[1]',
    this.retireAge= '//input[@id="retirement-age"]',
    this.currentAnnualIncome='//input[@id="current-income"]',
    this.spouseAnnualIncome='//input[@id="spouse-income"]',
    this.retirementSavingsIncome='//input[@id="current-total-savings"]',
    this.currentlySavingEachYearForRetirementPercent='//input[@id="current-annual-savings"]',
    this.savingIncreaseRatePerYear='//input[@id="savings-increase-rate"]',
    this.socialSecurityIncomeYesRadioButton='//label[@for="yes-social-benefits"]',
    this.socialSecurityIncomeNoRadioButton='//label[@for="no-social-benefits"]',
    this.calculateBtn='//button[@data-tag-id="submit"]',
    this.clearFormBtn='//button[text()="Clear form"]',
    this.maritalStatusRadioBtn_Single='//label[@for="single"]',
    this.maritalStatusRadioBtn_Married='//label[@for="married"]',
    this.socialSecurityOverrideAmt='//input[@id="social-security-override"]',
    this.chart='//canvas[@id="results-chart"]',
    this.maritalStatusSection='//*[@id="marital-status-toggle-group"]',
    this.socialSecurityOverrideAmountSection='(//*[@class="row social-security-field"])[2]'
    }
    async  browserLaunch(){
            const browser = await remote({
              // Define your WebDriverIO options here
              capabilities: {
                browserName: 'chrome', // You can choose your preferred browser
              },
            });
          
            try {
              await browser.url('https://www.securian.com/insights-tools/retirement-calculator.html');
              console.log('Browser launched and navigated to the URL successfully');
            } catch (error) {
              console.error('Error:', error);
            } finally {
              await browser.deleteSession(); // Close the browser after execution
            }
          
    }
    async enterCurrentAge(currentAge){
        const common=new commonActions();
        await commonActions.enterText(this.age,currentAge);
    }

    async enterAgePlanToRetire(retirementAge){
        const common=new commonActions();
        await commonActions.enterText(this.retireAge,retirementAge);
    }

    async enterCurrentAnnualIncome(currentAnnualIncome){
        const common=new commonActions();
        commonActions.enterAmount(this.currentAnnualIncome,currentAnnualIncome);
    }
    
    async enterSpouseAnnualIncome(spousesAnnualIncome){
        const common=new commonActions();
        commonActions.enterAmount(this.spouseAnnualIncome,spousesAnnualIncome);
    }

    async enterCurrentRetirementSavingsBalance(currentRetirementSavings){
        const common=new commonActions();
        commonActions.enterAmount(this.retirementSavingsIncome,currentRetirementSavings);
    }

    async currentSavingsEachYear(currentRetirementContribution){
        const common=new commonActions();
        commonActions.enterText(this.currentlySavingEachYearForRetirementPercent,currentRetirementContribution);
    }

    async enterRateOfIncreaseSavingsEachYear(annualRetirementContributionIncrease){
        const common=new commonActions();
        commonActions.enterText(this.savingIncreaseRatePerYear,annualRetirementContributionIncrease);
    }

    async selectSocialSecurityIncome(inputYesorNo){
        if (inputYesorNo.toLowerCase() === 'yes') {
            this.socialSecurityIncomeYesRadioButton.click();
            console.log('Clicked on Yes radio button');
        } else if (inputYesorNo.toLowerCase() === 'no') {
            this.socialSecurityIncomeNoRadioButton.click();
            console.log('Clicked on No radio button');
        } else {
            console.log('Invalid input. Please enter "Yes" or "No".');
        }
    
    }

    async selectMaritalStatus(inputSingleorMarried){
        if (inputSingleorMarried.toLowerCase() === 'single') {
            this.maritalStatusRadioBtn_Single.click();
            console.log('Selected marital status is  Single');
        } else if (inputSingleorMarried.toLowerCase() === 'married') {
            this.maritalStatusRadioBtn_Married.click();
            console.log('Selected marital status is  Married');
        } else {
            console.log('Invalid input. Please enter "Yes" or "No".');
        }
    }

    async enterSocialSecurityOverideAmount(socialSecurityOverride){
        const common=new commonActions();
        commonActions.enterAmount(this.socialSecurityOverrideAmt,socialSecurityOverride);
    }

    async clickOnSubmitBtn(){
        this.calculateBtn.click();
    }

    async clickOnClearFormBtn(){
        this.clearFormBtn.click();
    }
    async resultsChartValidation(){
       try{ const resultschart=this.chart
        await expect(resultschart).toBeDisplayed();
        console.log('Results chart is displayed');
       }
        catch(error){
            console.log('Please re check your inputs')
        }
    }
     
    async maritalStatusSectionValidation(){
        try{ const marritalStat=this.maritalStatusSection
            await expect(marritalStat).toBeDisplayed();
            console.log('Marrital Section is displayed');
           }
            catch(error){
                console.log('Please re check your inputs')
            }
    }
    async securityOverideAmtSectionValidation(){
        try{ const overrideamt=this.socialSecurityOverrideAmountSection
            await expect(overrideamt).toBeDisplayed();
            console.log('Additional overrien amount section is displayed');
           }
            catch(error){
                console.log('Please re check your inputs')
            }
    }

    async selectNOSecurityIncome(){
        const No_btn=this.socialSecurityIncomeNoRadioButton;
        if(No_btn.click()){
            this.maritalStatusSection.not.toBeDisplayed();
            this.socialSecurityOverrideAmountSection.not.toBeDisplayed();
        }else('please recheck the selection in Social Security Income');

    }
}
    
module.exports = new PreRetirementCalculatorPage();
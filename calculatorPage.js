class CalculatorPage {
    get currentAge() { return $('#current-age'); }
    get retirementAge() { return $('#retirement-age'); }
    get currentAnnualIncome() { return $('#current-annual-income'); }
    get spouseAnnualIncome() { return $('#spouse-annual-income'); }
    get currentRetirementSavings() { return $('#current-retirement-savings'); }
    get currentRetirementContribution() { return $('#current-retirement-contribution'); }
    get annualRetirementContributionIncrease() { return $('#annual-retirement-contribution-increase'); }
    get socialSecurityToggle() { return $('#social-security-toggle'); }
    get socialSecurityOverride() { return $('#social-security-override'); }
    get additionalIncome() { return $('#additional-income'); }
    get retirementYears() { return $('#retirement-years'); }
    get inflationToggle() { return $('#inflation-toggle'); }
    get finalAnnualIncomeDesired() { return $('#final-annual-income-desired'); }
    get preRetirementInvestmentReturn() { return $('#pre-retirement-investment-return'); }
    get postRetirementInvestmentReturn() { return $('#post-retirement-investment-return'); }
    get submitButton() { return $('#submit-button'); }

    fillRetirementForm(data) {
        this.currentAge.setValue(data.currentAge);
        this.retirementAge.setValue(data.retirementAge);
        this.currentAnnualIncome.setValue(data.currentAnnualIncome);
        this.spouseAnnualIncome.setValue(data.spouseAnnualIncome);
        this.currentRetirementSavings.setValue(data.currentRetirementSavings);
        this.currentRetirementContribution.setValue(data.currentRetirementContribution);
        this.annualRetirementContributionIncrease.setValue(data.annualRetirementContributionIncrease);
        if (data.socialSecurityIncome) {
            this.socialSecurityToggle.click();
            this.socialSecurityOverride.setValue(data.socialSecurityOverride);
        }
        this.additionalIncome.setValue(data.additionalIncome);
        this.retirementYears.setValue(data.retirementYears);
        this.inflationToggle.click();
        this.finalAnnualIncomeDesired.setValue(data.finalAnnualIncomeDesired);
        this.preRetirementInvestmentReturn.setValue(data.preRetirementInvestmentReturn);
        this.postRetirementInvestmentReturn.setValue(data.postRetirementInvestmentReturn);
    }

    submitForm() {
        this.submitButton.click();
    }
}

module.exports = new CalculatorPage();

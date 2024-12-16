const questions = [
    {
        // Question 1
        question: "Which of the following options BEST describes a budget?",
        choices: ["A qualitative expression of the objectives and goals of a business",
        "A detailed undertaking that is best suited to large enterprises",
        "An expression of strategies and goals that an enterprise should follow",
        "A quantitative expression of the goals and objectives of an enterprise"],
        correct: 3
    },
    {
        // Question 2
        question: "Which of the following BEST defines a capital budget?",
        choices: ["A budget prepared as a part of long-term planning to provide for capital expenditures (which will occur from time to time) to offset economic obsolescence",
        "An annual budget that continues to delete one month or period and add one month or period",
        "A budget that is prepared for one fiscal period and is based on one level of activity",
        "A budget created to cover the cost of a major project, such as a seismic upgrade"],
        correct: 0
    },
    {
        // Question 3
        question: "A strata corporation is required by the Strata Property Act to prepare which type of budget?",
        choices: ["Continuous budget",
        "Long-range budget",
        "Annual operating budget",
        "Annual project budget"],
        correct: 2
    },
    {
        // Question 4
        question: "Joe Smith, from Unit 22, has not paid his strata fees for the month of June, which were due 10 days ago. As a strata manager, you would typically report this to the strata council by way of which document?",
        choices: ["Strata Fee Status Report",
        "Strata Unit Lien",
        "Statement of Strata Fee Assessment",
        "Statement of Strata Fee Delinquency"],
        correct: 3
    },
    {
        // Question 5
        question: "According to the Strata Property Act, which of the following statements regarding the budget vote is TRUE?",
        choices: ["The budget for the next fiscal year must only be approved by a majority vote at the strata council meeting.",
        "The budget for the next fiscal year must be approved by a majority vote at the annual general meeting.",
        "The budget for the next fiscal year must only be approved by the strata manager of the strata corporation.",
        "The budget for the next fiscal year must only be approved by a ¾ vote at a strata council meeting."],
        correct: 1
    },
    {
        // Question 6
        question: "Which of the following statements regarding budget surpluses and deficits is TRUE?",
        choices: ["A budget deficit occurs when the actual expenditures are less than the contributions to the operating fund for the previous fiscal year.",
        "A budget surplus cannot be used to reduce strata fees in the following year.",
        "A budget surplus occurs when the contributions to the operating fund for the previous year exceed the actual expenditures.",
        "A budget deficit can be eliminated during the next fiscal year in a new budget by obtaining a short-term bank loan for that purpose."],
        correct: 2
    },
    {
        // Question 7
        question: "Which of the following statements regarding the strata fee assessment is/are TRUE?",
        choices: ["Strata lots are assessed strata fees based on the proposed annual budget drafted by the strata manager.",
        "A strata lot's strata fees are usually based on its unit entitlement.",
        "Strata fees may be calculated by using a formula other than unit entitlement, by passing a ¾ vote at a special strata council meeting.",
        "All of the statements are true."],
        correct: 1
    },
    {
        // Question 8
        question: "Which of the following statements regarding the Contingency Reserve Fund (CRF) is FALSE?",
        choices: ["Strata corporations are required by legislation to have a CRF to pay for common expenses that occur more than once a year.",
        "Expenditures from the CRF must be consistent with the purpose of the CRF and approved by a ¾ vote at an annual or special general meeting.",
        "Surplus funds from a special levy can be added to the CRF, as long as the surplus funds owing to each strata lot is $100 or less.",
        "Contributions to the CRF are approved in the annual budget and collected through strata fees."],
        correct: 0
    },
    {
        // Question 9
        question: "Since an annual general meeting (AGM) will usually be held before the financial statements for the year just ending have been finalized, it is common to do which of the following?",
        choices: ["Prepare a statement showing the actual results for the first eight months of the current year.",
        "Notify the strata corporation that they will not receive financial statements until everything has been finalized.",
        "Prepare a statement showing the actual results for the first ten months of the current year, often with a projection or forecast to the end of the year.",
        "Prepare what is known as a flexible budget, which is handed out at the AGM."],
        correct: 2
    },
    {
        // Question 10
        question: "Which of the following statements regarding a major repair is TRUE?",
        choices: ["Emergency repairs can be paid for by money in the contingency reserve fund without approval from the owners.",
        "The strata corporation can borrow money to pay for major repairs; however, this requires approval by a unanimous vote.",
        "The strata corporation can levy a special assessment against each strata unit owner if there is unanimous approval from the strata council.",
        "Beyond emergency repairs, owners must give their approval for the use of contingency reserve funds through a unanimous vote at a general meeting."],
        correct: 0
    },
    {
        // Question 11
        question: "Tamarack Inc. has prepared a budget forecast that covers three fiscal years. It has chosen this model to guide its long-term growth and to help plan for future expansion. What type of budget is Tamarack Inc. using?",
        choices: ["Long-range budget",
        "Continuous budget",
        "Annual operating budget",
        "Fixed (static) budget"],
        correct: 0
    },
    {
        // Question 12
        question: "Which of the following is NOT one of the basic components of an operating budget?",
        choices: ["Revenue",
        "Opening balance",
        "Assets",
        "Expenses"],
        correct: 2
    },
    {
        // Question 13
        question: "Linh owns unit #2302 of a multifamily condominium building, with a unit entitlement of 816. The total unit entitlements for this building is 55,400. The building is estimated to require $220,000 in revenue from annual maintenance fees. Calculate Linh’s monthly maintenance fee, rounded up to the closest dollar.",
        choices: ["$3,245",
        "$1,470",
        "$816",
        "$270"],
        correct: 3
    },
    {
        // Question 14
        question: "When dealing with obsolescence, which of the following options is typically the LEAST expensive alternative to undertake?",
        choices: ["Conversion",
        "Modernization",
        "Redevelopment",
        "Renovation"],
        correct: 3
    },
    {
        // Question 15
        question: "Raul is preparing the budget for a strata corporation. He is presently at the point where he must estimate utility costs for the upcoming year. What approach should Raul take to obtain a reasonable estimate?",
        choices: ["Raul should locate the figures of actual utilities costs over the past five years and average these numbers to get this year’s estimate.",
        "Raul must review the budgets of the past three years and determine which year had the closest match between the budgeted utilities costs and the actual utilities cost. He will then use the budgeted amount of this best match for the present year’s estimate.",
        "Raul must look at utility costs from previous years and adjust for any expected changes in consumption and any expected rate changes from utilities providers.",
        "Raul should ignore the budgets from previous years and map out a plan for each month of the upcoming year, along with the estimated utilities expense for each month. The sum of the monthly estimates will give the annual estimate to be used."],
        correct: 2
    },
    {
        // Question 16
        question: "Which of the following is calculated by taking the opening balance of the operating budget, adding the budgeted revenues, and subtracting the budgeted expenses?",
        choices: ["The total balance of the contingency reserve fund",
        "The ending balance of the operating fund",
        "The total strata fees for the year",
        "The total unit entitlement for the building"],
        correct: 1
    },
    {
        // Question 17
        question: "What is the name of the document that includes a physical and financial appraisal of a strata property, designed to facilitate planning for the long-term funding and the maintenance of a strata corporation’s common elements?",
        choices: ["Strata corporation official plan",
        "Capital budget",
        "Contingency reserve fund",
        "Depreciation report"],
        correct: 3
    },
    {
        // Question 18
        question: "If, at the end of the year, a strata corporation has a deficit in its operating fund, which of the following actions could be taken in accordance with the Strata Property Act?",
        choices: ["The strata corporation could borrow money from a bank equal to the amount of the deficit.",
        "The strata corporation could increase the strata fees in order to cover the costs of the following year plus the deficit from the previous year.",
        "The strata corporation could apply for an exemption from the Act.",
        "The strata corporation could choose to do nothing, as operating at a deficit is fairly common and requires no action."],
        correct: 1
    },
    {
        // Question 19
        question: "Replacing worn and outdated carpeting in the lobby area of a rental property is best classified under which of the following?",
        choices: ["Redevelopment",
        "Renovation",
        "Conversion",
        "Modernization"],
        correct: 1
    },
    {
        // Question 20
        question: "Which of the following is LEAST likely to be included as a typical budgeted expense item in the operating budget?",
        choices: ["The cost of garbage disposal, including container rental and dumping charges",
        "The cost of janitorial services provided under contract",
        "The cost of chemicals to treat water in a hot water heating system",
        "The cost of replacing the roof with an estimated life of 15 years"],
        correct: 3
    }
];
const questions = [
    {
        // Question 1
        question: "Which of the following is NOT a characteristic of the contingency reserve fund (CRF)?",
        choices: ["Contributions to the CRF are usually based on the unit entitlement of each strata lot in the strata corporation.",
        "The CRF is intended for expenditures that occur less frequently than once per year.",
        "Expenditures from the CRF are only allowed if the expenditure is for the purpose of paying an insurance deductible, if it is required to ensure safety, or if it prevents loss or damage.",
        "Surplus funds from a special levy that are below a set amount may be added to the CRF."],
        correct: 2
    },
    {
        // Question 2
        question: "What is the main source of revenue to the CRF?",
        choices: ["The portion of the strata fees designated to be contributed to the CRF",
        "Interest earned through investments of the CRF",
        "Surplus funds from special levies",
        "The recovery of expenditures charged to the CRF"],
        correct: 0
    },
    {
        // Question 3
        question: "Strata Corporation VRX123 just finished its third fiscal year. The amount of money in the contingency reserve fund (“CRF”) at the end of the third fiscal year was $24,000. The total budgeted contribution to the operating fund in the third year was $31,000. The total budgeted contribution to the operating fund for the current fiscal year is $40,000. What is the minimum mandatory contribution to the CRF that the Strata Corporation must make for the current fiscal year?",
        choices: ["The strata corporation is not required to make a mandatory contribution to the CRF.",
        "The strata corporation is required to make a mandatory contribution to the CRF of at least $2,400.",
        "The strata corporation is required to make a mandatory contribution to the CRF of at least $3,100.",
        "The strata corporation is required to make a mandatory contribution to the CRF of at least $4,000."],
        correct: 3
    },
    {
        // Question 4
        question: "Which of the following regarding funds for special levies is FALSE?",
        choices: ["Special levies require approval by a ¾ vote at an annual or special general meeting of the strata corporation.",
        "Typical uses for a special levy include repairs to the building envelope, seismic upgrading, or a roof replacement.",
        "Depending on the amount of surplus funds, if there are surplus funds from a special levy, these funds can either can be contributed to the CRF or returned to the owners in the same proportion in which they were collected.",
        "If a unit is sold and a special levy has been approved prior to the sale, the seller is liable for the full payment towards the levy."],
        correct: 3
    },
    {
        // Question 5
        question: "You are a strata manager and are reviewing your client strata corporation’s Contingency Reserve Fund Statement in preparation of next year’s budget. The CRF balance at the beginning of the next fiscal year will be $12,958, and you have determined that the CRF balance at the end of the year must be greater or equal to $20,320. The only two areas of revenue that you have budgeted for are a transfer of strata fees during the next year of $9,500 and interest income of $550. You have forecasted that your expenditures from the CRF for the year will be $7,500. What amount of strata fees will you have to transfer from last year’s surplus so that the CRF balance at the end of the year will be $20,320? Hint: See Figure 24.8 from Chapter 24: “Budgeting: The Operating Budget and Fund” for guidance.",
        choices: ["$4,812",
        "$14,412",
        "$5,138",
        "$2,908"],
        correct: 0
    },
    {
        // Question 6
        question: "Which of the following could explain why a strata corporation does not have to obtain a depreciation report in a given year?",
        choices: ["The strata corporation has fewer than 5 strata units.",
        "The strata council has determined that a depreciation report is not necessary.",
        "The strata corporation has decided through a 2/3 vote not to obtain a depreciation report.",
        "The building is less than 10 years old."],
        correct: 0
    },
    {
        // Question 7
        question: "Consider a residential strata property where the strata corporation determines that its funding model will place more weight on maintaining affordability than maintaining adequacy. Furthermore, the corporation charged a special levy four years ago and another one two years ago. Which funding model is this strata corporation most likely using?",
        choices: ["Minimum Reserve Model",
        "Zero Balance Model",
        "Affordable Fund Model",
        "Both (1) and (2) are equally likely funding models of this strata corporation"],
        correct: 1
    },
    {
        // Question 8
        question: "What is the primary purpose of a depreciation report for a residential strata property?",
        choices: ["To project the anticipated replacement costs of common expenses that only occur less than every five years",
        "To ensure that the amount of funds in the CRF does not surpass the level of funding set out in the Zero Balance Model",
        "To determine whether or not a strata property requires a CRF",
        "To evaluate common building elements and ensure budgeted funding is sufficient to meet the goals of the strata corporation"],
        correct: 3
    },
    {
        // Question 9
        question: "Which of the following statements regarding a “qualified person” who is hired to prepare a depreciation report for a strata corporation is TRUE?",
        choices: ["Only one person can be hired to perform a depreciation report.",
        "A member of the Real Estate Institute of Canada is considered a qualified person.",
        "A member of the Canadian Institute of Quantity Surveyors who holds the designation of professional quantity surveyor is considered a qualified person.",
        "A member of a strata corporation may not perform the strata corporation’s own depreciation report."],
        correct: 2
    },
    {
        // Question 10
        question: "When completing the financial analysis of the depreciation report, the practitioner completing the report should do which of the following?",
        choices: ["Use the annual reserve fund assessment (ARFA) to determine the future reserve fund requirement (FRFR).",
        "Project the future value of the CRF by applying market interest rates earned on high-risk investments.",
        "Apply an inflationary factor to the current cost of replacement components to project the future costs of those components.",
        "Take the lesser of the future reserve fund accumulation (FRFA) and the future replacement cost (FRC) to determine the future reserve fund requirement (FRFR)."],
        correct: 2
    },
    {
        // Question 11
        question: "Which of the following statements pertaining to depreciation reports is FALSE?",
        choices: ["Depreciation reports help condominium corporations take a proactive approach in the maintenance and repair of their common property and assets.",
        "Depreciation reports should help reduce the need for unexpected special assessments or special levies.",
        "Current owners and prospective purchasers can use the depreciation report to learn more about the health of the condominium corporation’s financial situation.",
        "The biggest downside to ordering a depreciation report is that it will likely take several years to prepare."],
        correct: 3
    },
    {
        // Question 12
        question: "A condominium corporation using a 100% Funded Model strategy generally appeals MOST to which of the following parties?",
        choices: ["Short-term tenants",
        "Short-term investors",
        "The strata manager",
        "Long-term owners"],
        correct: 3
    },
    {
        // Question 13
        question: "Which of following is NOT an element of a sinking fund?",
        choices: ["Adding funds regularly through unitholder contributions",
        "Adding funds regularly through interest accrual on invested funds",
        "Withdrawing funds regularly for ongoing repair and replacement expenses",
        "Adding funds only when repairs and replacements arise"],
        correct: 3
    },
    {
        // Question 14
        question: "“For the financial health of a strata, the money must either be in the property or in the bank.” Which of the following options does NOT correctly address an implication of this statement?",
        choices: ["A contingency reserve fund may have a zero balance and still be healthy, if all major anticipated repairs have recently been accomplished.",
        "A strata that is in poor physical condition and that has no substantial reserves would be viewed negatively by purchasers.",
        "There is an ongoing pattern of investment and expenditure that leads to ebbs and flows in a reserve fund balance.",
        "The net reserve contribution in each year must always be positive, or the contingency reserve fund will eventually be in default and the strata corporation will be bankrupt."],
        correct: 3
    },
    {
        // Question 15
        question: "Under which of the following circumstances would a strata corporation of 10 units be permitted to waive the requirement to obtain a depreciation report every 5 years?",
        choices: ["If they pass a resolution by a unanimous vote at an annual or special general meeting",
        "Under no circumstances is a strata corporation of 10 units able to waive the requirement to obtain a depreciation report every 5 years",
        "If they pass a resolution by a 2/3 vote at an annual or special general meeting",
        "If they pass a resolution by a 3/4 vote at an annual or special general meeting"],
        correct: 1
    },
    {
        // Question 16
        question: "Which of the following BEST defines an Information Certificate (Form B)?",
        choices: ["A form that discloses key information about the strata corporation as a whole, as well as the specific strata lot to which it relates",
        "An optional, non-binding financial plan that is intended to demonstrate alternative ways for a strata corporation to fund its CRF over a 30-year period",
        "A report that evaluates whether the amount of money currently in a contingency reserve fund and the money to be collected for it will be sufficient to cover the anticipated costs relating to the repair and replacement of a strata corporation’s common property and assets",
        "An approach to the contingency reserve fund that sets a minimum reserve cash balance while aiming to avoid the need for special levies"],
        correct: 0
    },
    {
        // Question 17
        question: "Which step of preparing a depreciation report involves establishing the purpose of the analysis, developing the work plan, and conducting preliminary research and documentation review?",
        choices: ["Step 1 (Problem Identification)",
        "Step 2 (Property Identification and Evaluation)",
        "Step 3 (Lifecycle Analysis)",
        "Step 4 (Cost Analysis)"],
        correct: 0
    },
    {
        // Question 18
        question: "What are the two competing factors that a strata council must consider in determining which funding model is most appropriate for its contingency reserve fund?",
        choices: ["Ensuring quality while abiding by the budget",
        "The strata manager’s opinion and the strata corporation’s opinion",
        "Maintaining adequacy while maintaining affordability",
        "Investing versus saving"],
        correct: 2
    },
    {
        // Question 19
        question: "What is the term used for the chronological age of the building or site component, expressed in years?",
        choices: ["Normal lifespan",
        "Actual age",
        "Effective age",
        "Remaining lifespan"],
        correct: 1
    },
    {
        // Question 20
        question: `Sandy’s condominium recently had a depreciation report completed. The consultant outlined three funding options. Match each statement with its appropriate reserve strategy: Zero-Balance Model, Minimum Reserve Model, or 100% Funded Model.
<br>
<br>A. Pay $50 per month toward the contingency reserve fund, plus a special levy of $3,000 in Year 8 and $6,000 in Year 14 to coincide with major repairs.
<br>B. Pay $100 per month toward the contingency reserve fund, increasing by 2% per year over 30 years, with no special levies needed and all future repairs accounted for.
<br>C. Pay $75 per month toward the contingency reserve fund, such that no special levies are necessary to keep the reserve fund above $100,000 at all times.
`,
        choices: ["A: minimum reserve model; B: zero-balance model; C: 100% funded model",
        "A: 100% funded model; B: minimum reserve fund; C: zero-balance model",
        "A: zero-balance model; B: 100% funded; C: minimum reserve fund",
        "A: 100% funded model; B: zero-balance model; C: minimum reserve fund"],
        correct: 2
    }
];
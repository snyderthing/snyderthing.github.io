const questions = [
    {
        // Question 1
        question: "According to the cost principle, which of the following statements is TRUE?",
        choices: ["The balance sheet must reflect the current market value, as of the date shown on the balance sheet, of all assets.",
        "The market value of an asset at the date of purchase should be reflected on the balance sheet.",
        "An asset that has been acquired for less than market value should be shown on the balance sheet for its purchase price.",
        "Expenses are recognized at the time they are paid, not when they are incurred."],
        correct: 2
    },
    {
        // Question 2
        question: "According to the revenue recognition principle, which of the following would NOT be recognized as revenue?",
        choices: ["Interest earned on bank balances",
        "Rent received for the use of a guest suite",
        "Money earned for services rendered but that has not yet been received",
        "A post-dated cheque for a unit’s strata fees for the following month"],
        correct: 3
    },
    {
        // Question 3
        question: "Which of the following would generally NOT be found in the current liabilities section of a balance sheet?",
        choices: ["Mortgage payable",
        "Accounts payable",
        "Wages payable",
        "Property taxes payable"],
        correct: 0
    },
    {
        // Question 4
        question: "According to the balance sheet equation, which of the following statements is TRUE?",
        choices: ["The total of a firm's liabilities and owner's equity may exceed its total assets.",
        "The total assets of a company must be equal to its sources of capital.",
        "Liabilities may be greater than the difference between assets and owner's equity.",
        "Owner's equity cannot exceed current and non-current liabilities."],
        correct: 1
    },
    {
        // Question 5
        question: "Which of the following is NOT considered a source of revenue for a strata corporation?",
        choices: ["Fines for violations of bylaws",
        "Rental fees for an amenities centre",
        "Interest charged on overdue strata fee payments",
        "Insurance deductibles"],
        correct: 3
    },
    {
        // Question 6
        question: "Which of the following statements regarding a strata corporation’s fiscal year is TRUE?",
        choices: ["It runs from April 1 to March 31, unless altered by the strata corporation.",
        "It can be any fiscal period chosen by the strata corporation.",
        "It is required to follow the calendar year.",
        "It can be altered only by a unanimous resolution at an annual or special general meeting."],
        correct: 1
    },
    {
        // Question 7
        question: "Which of the following BEST explains the purpose of depreciation (or amortization)?",
        choices: ["To calculate the salvage value of an asset",
        "To match the costs associated with a particular revenue item with the recognition of that revenue item",
        "To allocate an asset’s cost over its expected useful life",
        "To quantify the damage that has occurred to a particular asset"],
        correct: 2
    },
    {
        // Question 8
        question: "Which of the following statements about the operating statement (or income statement) is TRUE?",
        choices: ["It does little to guide a strata corporation’s financial decisions.",
        "It provides a snapshot of a strata corporation’s financial affairs.",
        "It involves an accounting of both current and non-current assets.",
        "It uses the equation Revenue – Expenses = Surplus (or Deficit)."],
        correct: 3
    },
    {
        // Question 9
        question: "Which of the following scenarios demonstrates a proper application of the materiality principle?",
        choices: ["A strata corporation purchases enough stationery supplies to use when holding its council meetings during the year. The total cost of the supplies, $120, is allocated as a single expense.",
        "A recently formed strata corporation decides to use the straight line method to calculate its depreciation expenses. Next year, it continues to use the same method.",
        "A strata corporation hires a part-time caretaker. The caretaker’s annual salary, $20,000, is allocated as a single expense.",
        "A strata corporation takes out insurance for the year on June 1 and is recorded as a single expense on June 1."],
        correct: 0
    },
    {
        // Question 10
        question: "Which of the following is NOT an example of a current asset?",
        choices: ["A cheque payable to the strata corporation, post-dated to next month",
        "A boiler that has been in use for less than one year and has an expected useful life of fifteen years",
        "A floor buffer the strata corporation has recently purchased but has not yet used",
        "A fine levied on a strata lot owner that has not yet been paid to the strata corporation"],
        correct: 1
    },
    {
        // Question 11
        question: "The revenue recognition principle holds that expenses are recognized when incurred, not when paid; this is referred to as which basis of accounting?",
        choices: ["The recognition basis",
        "The expense basis",
        "The cash basis",
        "The accrual basis"],
        correct: 3
    },
    {
        // Question 12
        question: "Which of the following options is considered a liability on the balance sheet?",
        choices: ["Accounts receivable",
        "Prepaid expenses",
        "Inventories",
        "Wages payable"],
        correct: 3
    },
    {
        // Question 13
        question: "What are the two accounting standards that are used in Canada?",
        choices: ["IFRS and ASPE",
        "IFRS and CRA",
        "GAAP and ASPE",
        "CRA and GAAP"],
        correct: 0
    },
    {
        // Question 14
        question: "Which of the following is defined as “a collection of money from which only investment income can be spent”?",
        choices: ["Restricted fund",
        "Unrestricted fund",
        "Endowment fund",
        "Trust fund"],
        correct: 2
    },
    {
        // Question 15
        question: "If a strata corporation’s total expenses for a period exceed the total revenues for the same period, what is the term used to describe the difference?",
        choices: ["Surplus",
        "Deficit",
        "Profit",
        "Liability"],
        correct: 1
    },
    {
        // Question 16
        question: "Which of the following BEST defines the term “prepaid expenses”?",
        choices: ["Revenue that is due from others for the sale or provision of services for which cash has not yet been received",
        "Supplies that have been acquired for use in the operations of the strata corporation but have not yet been used",
        "Temporary investments of an entity in the securities of another entity",
        "Services or rights to services for which cash has been paid but services have not yet been consumed by the entity at the time the balance sheet is prepared"],
        correct: 3
    },
    {
        // Question 17
        question: "Four members of a strata council, Aurora, Simran, Ethan, and Tanreet, are discussing the details of the financial statements that must be distributed with the notice of the upcoming AGM. Based on the following information, which strata council member is correct?",
        choices: ["Aurora claims that the financial statements distributed with the AGM notice must cover the entire fiscal year that is just ending.",
        "Simran says that the financial statements distributed with the AGM notice can cover the period up to two months before the AGM.",
        "Ethan claims that the financial statements distributed with the AGM notice only need to cover the first six months of the most recent fiscal year.",
        "Tanreet insists that financial statements do not need to be included with the AGM notice and that they can be sent out to the strata corporation within eight weeks after the meeting."],
        correct: 1
    },
    {
        // Question 18
        question: "Assume a strata corporation purchases a three-year insurance policy for $15,000 at the beginning of the year and expenses $5,000 as the portion applicable to the current period. This is an example of which of the following?",
        choices: ["An adjusting journal entry",
        "The consistency principle",
        "The balance sheet equation",
        "Owner's equity"],
        correct: 0
    },
    {
        // Question 19
        question: "A strata corporation acquires a piece of equipment for $14,000. It anticipates that it will be able to salvage the equipment at the end of its life, which is estimated to be 24 months, for $500. What is the monthly depreciation expense for this piece of equipment, rounded to the closest dollar?",
        choices: ["$583",
        "$500",
        "$1,167",
        "$563"],
        correct: 3
    },
    {
        // Question 20
        question: "Which financial statement summarizes the assets, liabilities, and owner’s equity of a business enterprise at a specific date?",
        choices: ["Income statement",
        "Statement of financial position",
        "Balance sheet",
        "Retained earnings statement"],
        correct: 2
    }
];
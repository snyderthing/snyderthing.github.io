const questions = [
    {
        // Question 1
        question: "Strata Corporation ABC (\"ABC\") had a building valued at $4 million. Unfortunately, the building was damaged in a fire and will cost $3.15 million to replace. When ABC went to claim the insurance monies, the owners found out that they would not be receiving the total replacement value from the insurance company. They had only insured the building for $3.5 million in an attempt to save on the insurance premiums, and the insurance policy contained a co-insurance clause requiring a minimum of 90% of full replacement value. There is no insurance deductible. What is the maximum payout that the owners will receive from their insurance claim?",
        choices: ["$2,835,000",
        "$3,062,500",
        "$3,150,000",
        "$3,500,000"],
        correct: 1
    },
    {
        // Question 2
        question: "Reza is the strata manager of a large building. Over the weekend, a sprinkler head is damaged by a maintenance worker and water damage destroys the carpet and walls. The main hall is flooded and Mrs. Kostrewski, a visitor to the building, slips on the floor and breaks her hip. The water from the flood has mixed with a large quantity of oil in the elevator shaft and the mixture is flowing onto the street. The elevator is no longer working. Reza comes to work early Monday morning and is faced with these problems. When Reza turns to the insurance policy for the building, what types of coverage will she look for to recover the expenses of the weekend’s damage?",
        choices: ["Machinery and equipment, pressure vessels, third-party liability, and environmental liability insurance only",
        "Machinery and equipment, sprinkler system leakage, and third-party liability only",
        "Machinery and equipment, sprinkler system leakage, third-party liability, and environmental liability insurance only",
        "Machinery and equipment, vandalism and malicious mischief, pressure vessels, sprinkler system leakage, and third-party liability only"],
        correct: 2
    },
    {
        // Question 3
        question: "Which of the following belongs in the active protection category of fire protection?",
        choices: ["Rope ladders",
        "Fire hydrants",
        "Steel doors",
        "Regular fire drills"],
        correct: 1
    },
    {
        // Question 4
        question: "Sections 149 and 150 of the Strata Property Act require that a strata corporation obtain and maintain which of the following types of insurance?",
        choices: ["Property insurance on each strata lot",
        "Directors and officers liability insurance",
        "General liability insurance",
        "Boiler and machinery insurance"],
        correct: 2
    },
    {
        // Question 5
        question: "Which of the following statements regarding deductibles is FALSE?",
        choices: ["Deductibles encourage effective risk management among policy holders.",
        "All strata property insurance policies in BC must contain a uniform deductible as established by the Strata Property Act.",
        "Deductibles on a policy must be paid by policy holders if a claim is approved.",
        "The contingency reserve fund can be used to cover unexpected insurance deductibles."],
        correct: 1
    },
    {
        // Question 6
        question: "Jim owns a strata unit in a development and is seeking advice regarding insurance coverage. He wants to make certain renovations to his unit. As strata manager, which of the following is the MOST appropriate advice to give Jim?",
        choices: ["Jim must obtain insurance coverage for these renovations under the Strata Property Act.",
        "It is not necessary for Jim to obtain coverage because the renovations are covered under the strata corporation's policy.",
        "Jim should determine whether he requires approval from the strata corporation for the renovations and should check whether additional insurance is required.",
        "The standard strata bylaws require Jim to obtain insurance for his personal items."],
        correct: 2
    },
    {
        // Question 7
        question: "Which of the following is an inappropriate use of insurance proceeds by a strata corporation?",
        choices: ["Repairing the damaged property underlying the claim",
        "Distributing the proceeds to all interest holders after a ¾ vote at a general meeting",
        "Installing improvements to common areas unaffected by the damage underlying the claim",
        "All of the above are appropriate uses of insurance proceeds"],
        correct: 2
    },
    {
        // Question 8
        question: "Which of the following situations would likely NOT result in a successful claim under a strata corporation’s liability insurance policy?",
        choices: ["Alan slips and falls on a patch of ice found outside the main lobby entrance of his condominium complex.",
        "A light fixture falls on Andrea as she walks through the lobby of a strata building.",
        "Bob becomes ill as a result of improper cleaning of a pool area in a strata building.",
        "After kicking a common area window, Will cuts his leg on a glass shard."],
        correct: 3
    },
    {
        // Question 9
        question: "Which of the following BEST describes the purpose of errors and omissions insurance?",
        choices: ["To fill any coverage not contemplated by a strata corporation’s liability insurance policy",
        "To protect strata owners from any claim resulting from a negligent action",
        "To pay for any shortfall in the deductible",
        "To protect the strata corporation and its council members from liability due to mistakes arising in the performance of their duties"],
        correct: 3
    },
    {
        // Question 10
        question: "The Strata Property Act requires a strata corporation to obtain property insurance on the basis of which of the following?",
        choices: ["Full cash value",
        "Actual cash value",
        "Market cash value",
        "Full replacement value"],
        correct: 3
    },
    {
        // Question 11
        question: "Which of the following statements regarding safety and security is TRUE?",
        choices: ["Tall trees, bushes, or hedges around the perimeter of a building are useful deterrents because they make it more difficult for thieves to access the building.",
        "During regular hours in a typical commercial building, the entrance should always be locked and accessible by key fob only, which allows security staff to track who is entering and leaving a building.",
        "For most industrial properties, the strata manager is responsible for installing security systems and hiring security staff to patrol the property.",
        "Shopping centres face a large number of security and safety concerns, largely because of the high volume of people that pass through every day."],
        correct: 3
    },
    {
        // Question 12
        question: "In which of the following scenarios could security personnel make a citizen’s arrest?",
        choices: ["If they find a person committing an indictable offence",
        "If they believe a person committed a criminal offence up to 7 days earlier",
        "If they find a person committing false imprisonment",
        "If they are told a person has been shoplifting"],
        correct: 0
    },
    {
        // Question 13
        question: "Which of the following actions is the MOST appropriate response to a bomb threat to a building that you manage?",
        choices: ["Get off the phone with the person making the bomb threat as quickly as possible and immediately evacuate the building.",
        "Remove any suspicious packages and call the police.",
        "Commence a detailed search of the entire building with all of the building staff.",
        "Take detailed notes of the call and immediately call the police."],
        correct: 3
    },
    {
        // Question 14
        question: "In the event of the discovery of environmental damage to a strata property, which of the following individuals may be held liable for the costs of remediation?",
        choices: ["Strata lot owners and strata managers only",
        "Strata lot owners only",
        "Strata managers and tenants only",
        "Strata lot owners, strata managers, and tenants"],
        correct: 3
    },
    {
        // Question 15
        question: "Which of the following is NOT a provincial statute?",
        choices: ["Canadian Environmental Protection Act",
        "Environmental Management Act",
        "Water Act",
        "Mines Act"],
        correct: 0
    },
    {
        // Question 16
        question: "Which of the following is the LEAST relevant for a strata manager conducting an environmental audit?",
        choices: ["Radioactive materials",
        "Urea formaldehyde foam insulation",
        "Termite infestation",
        "Chlorofluorocarbons (CFCs)"],
        correct: 2
    },
    {
        // Question 17
        question: "A “sick building” label is generally given to a building due to which of the following reasons?",
        choices: ["A municipal quarantine order",
        "An air conditioner that is too powerful",
        "Too many people working in the building",
        "Poor ventilation"],
        correct: 3
    },
    {
        // Question 18
        question: "Which of the following statements regarding an employer’s responsibilities under the Occupational Health and Safety Regulation related to controlled products other than those used in packages and quantities normally used by the consuming public is FALSE?",
        choices: ["An employer must ensure that the required program of worker education is developed and implemented.",
        "An employer must refuse to permit the controlled product on the premises until the information required by the regulation is received.",
        "An employer must ensure that its WHMIS program is reviewed at least annually.",
        "An employer must ensure that the workers are instructed in the content required on the material safety data sheet."],
        correct: 1
    },
    {
        // Question 19
        question: "Which of the following steps should NOT be taken in the event of an explosion at a neighbouring building causing the release of toxic fumes?",
        choices: ["All building occupants should be directed out of the building immediately.",
        "All heating and air conditioning units should be shut down.",
        "All occupants should be advised to close their windows and doors.",
        "All building occupants should evacuate as soon as it is safe to an area upwind from the source of the toxic fumes."],
        correct: 0
    },
    {
        // Question 20
        question: "Which of the following is NOT a responsibility of a strata manager or one of their staff members/hired contractors?",
        choices: ["To ensure that perimeter doors are well lit at night",
        "To ensure that all occupants have adequate earthquake supplies on hand",
        "To ensure that fire equipment is operational",
        "To ensure that the building is protected from wilful damage"],
        correct: 1
    }
];
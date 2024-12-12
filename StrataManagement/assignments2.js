const questions = [
    {
        // Question 1
        question: "Which of the following is the BEST description of the relationship between professionalism and ethics?",
        choices: ["Ethics is a crucial element of the larger concept of professionalism.",
            "Ethics is a core concept in the Real Estate Services Act, while professionalism is not.",
            "One can be both unprofessional and ethical at the same time.",
            "Professionalism and ethics are the exact same thing."],
        correct: 0
    },
    {
        // Question 2
        question: "Which type of misconduct, as described in the Real Estate Services Act, focuses more on the overall professionalism of a licensee, over and above technical compliance with legislation and the Real Estate Services Rules?",
        choices: ["Professional misconduct",
            "Lapse of character",
            "Conduct unbecoming a licensee",
            "Breach of civility"],
        correct: 2
    },
    {
        // Question 3
        question: "Which of the following is one of an individual licensee's roles in building and maintaining trust in the real estate profession?",
        choices: ["Creating education initiatives and opportunities",
            "Establishing strong practice standards for licensees",
            "Acting in accordance with broader ethical principles",
            "Setting stringent standards to enter and remain in the profession"],
        correct: 2
    },
    {
        // Question 4
        question: "What is the \"Headline Test\"?",
        choices: ["A test that clients of a licensee can use to determine whether the licensee's actions were professional",
            "A test that the Superintendent of Real Estate uses to determine whether a licensee has committed professional misconduct",
            "A test that licensees can use to evaluate whether a decision or action aligns with their overall professionalism, that considers how they would feel if their decision or action were to appear as a headline of a newspaper or news site",
            "A test that is set out in the Real Estate Services Rules that licensees must follow in their fulfilment of their duties to clients"],
        correct: 2
    },
    {
        // Question 5
        question: "Lily, a strata manager, is tasked with finding a new landscaper for her client, Filch Strata Corporation. She only receives one offer, from her cousin Petunia; as it was the only offer she received, Lily does not mention her relationship to Petunia when she presents the offer to her client. Which of the following duties, set out by the Real Estate Services Rules, has Lily LEAST likely breached?",
        choices: ["The duty to maintain confidentiality",
            "The duty to act in the client's best interests",
            "The duty to disclose conflicts of interests",
            "The duty to disclose all known material information"],
        correct: 0
    },
    {
        // Question 6
        question: "Kamal, a licensee, is faced with an ethical dilemma relating to something that one of his clients is asking him to do. As part of his thinking about the dilemma, Kamal writes down the names of everyone that would be impacted by any decision he makes to resolve the dilemma. Which step of the Framework for Ethical Decision Making is Kamal applying?",
        choices: ["Step 1: Consider the situation and identify the potential ethical issues",
            "Step 2: Identify the stakeholders",
            "Step 3: Specify feasible alternatives for evaluation",
            "Step 4: Evaluate each alternative in terms of ethical consequences"],
        correct: 1
    },
    {
        // Question 7
        question: "Which of the following is NOT an explicit obligation found directly in the Real Estate Services Rules?",
        choices: ["Doing unto others as you would have them do unto you",
            "Advising your clients to seek independent professional advice on matters outside of your expertise",
            "Maintaining the confidentiality of your client's information",
            "Acting in the client’s best interests"],
        correct: 0
    },
    {
        // Question 8
        question: "In most cases, where should licensees first report an instance of misconduct observed within their brokerage?",
        choices: ["To their managing broker",
            "To the Superintendent of Real Estate",
            "To the Real Estate Errors and Omissions Insurance Corporation",
            "To their real estate board"],
        correct: 0
    },
    {
        // Question 9
        question: "Licensees demonstrate integrity by having accountability for their actions by:",
        choices: ["exhibiting professional courtesy to fellow licensees.",
            "not disclosing a client's personal information, bottom line, or motivation without authorization.",
            "reporting their own mistakes to their managing broker.",
            "providing clients with information on how to get additional expertise/advice when needed."],
        correct: 2
    },
    {
        // Question 10
        question: "You are a newly licensed strata manager working in Vancouver, and you have recently started acting as the strata manager for Pleasant Strata Corporation. The president of the strata council, John, has had some disagreements with Jennifer, another strata council member, over various bylaws. The strata corporation does not currently have any restrictions on pets, but John has found out that Jennifer is considering adopting a dog. As decided by majority vote at a duly convened strata council meeting, the strata council asks you to draft a new bylaw that will prohibit all dogs in the strata building and to put forth the draft bylaw for vote at the next annual general meeting. You know that many of the other strata owners have allergies that prohibit them from owning dogs, so the bylaw could easily pass. Based on your understanding of your ethical obligations, what should you do?",
        choices: ["Disclose to the strata council that you have a conflict of interest on the matter, because you have a dog and believe pets are valued family members",
            "Recommend that the strata council seek professional legal advice to draft the requested bylaw before the meeting",
            "Suggest to Jennifer that she run for strata council president in order to oust John.",
            "Anonymously send a tip to a local newspaper about the issue, so that you can demonstrate to the strata council how they might feel if the new bylaw became a headline in the news"],
        correct: 1
    },
    {
        // Question 11
        question: "Which of the following is NOT an area of law where duties owed by licensees to their clients arise?",
        choices: ["Contract law",
            "Agency law",
            "Public law",
            "Tort Law"],
        correct: 2
    },
    {
        // Question 12
        question: "Dwight is the strata manager for a small office park. After the building experienced a water leak, some units were flooded and immediate repairs have become necessary. Dwight contacts a restoration company which provides a quote of $100,000 for the work, and states that they are able to commence work tomorrow. The strata council votes to hire the contractor and have them start work on site immediately. Rather than informing the restoration company of this fact, Dwight tells them that the strata council will not approve any quote for greater than $80,000. Dwight does this because he truly believes that the restoration company would be willing to do the same work for a lower price, which would be better for the strata corporation, and he wants the strata council to be completely satisfied with his services. Which of the following duties, set out in the Real Estate Services Rules, has Dwight breached?",
        choices: ["The duty to maintain confidentiality",
            "The duty to use reasonable efforts to discover relevant facts",
            "The duty to avoid conflicts of interest",
            "The duty to follow lawful instructions"],
        correct: 3
    },
    {
        // Question 13
        question: "Angela is a strata property manager for Oakville, a townhouse complex which is looking to hire a roofing contractor to replace their roof. Angela receives a quotation from Barry, a good friend of hers; however, she does not mention her relationship to Barry when she presents the quotation to the strata council. Angela has likely breached all of the following duties, set out by the Real Estate Services Rules, EXCEPT the duty to:",
        choices: ["maintain confidentiality",
            "act in the client’s best interests",
            "disclose conflicts of interests",
        "disclose all known material information"],
        correct: 0
    },
    {
        // Question 14
        question: "Licensees who accept clients involved in complex management issues outside of their area of expertise primarily risk breaching:",
        choices: ["the duty of full disclosure",
            "the duty to obey lawful instructions.",
            "the duty to act with reasonable care and skill.",
        "the duty of confidentiality."],
        correct: 2
    },
    {
        // Question 15
        question: "Which ethical duty in the Real Estate Services Rules imposes a responsibility to non-clients upon licensees?",
        choices: ["The duty to use reasonable efforts to discover relevant facts",
            "The duty to act with reasonable care and skill",
            "The duty to disclose all known material information",
        "The duty to have written service agreements"],
        correct: 1
    },
    {
        // Question 16
        question: "The final step of the Framework for Ethical Decision Making is to:",
        choices: ["evaluate each alternative in terms of ethical consequences.",
            "specify feasible alternatives for evaluation.",
            "make and justify your choice.",
        "identify the stakeholders."],
        correct: 2
    },
    {
        // Question 17
        question: "Evelyn is a new strata management licensee in the Vancouver area who has an extensive network due to her previous career. She has been flooded with business, to the point that she is feeling overwhelmed. In this situation, what professional duty is MOST at risk of being breached?",
        choices: ["The duty to only act within the scope of authority given by the client",
            "The duty of confidentiality",
            "The duty to act with reasonable care and skill",
        "The duty to disclose all known material information"],
        correct: 2
    },
    {
        // Question 18
        question: "Which of the following is a valid exception to the professional duty to maintain the confidentiality of a client’s information?",
        choices: ["The licensee is required by law to disclose the information",
            "The licensee only discloses the confidential information to another person orally (rather than in writing)",
            "The licensee feels that disclosure is in the best interests of the client",
        "The licensee discloses the confidential information by an honest mistake"],
        correct: 0
    },
    {
        // Question 19
        question: "Which of the following is NOT an example of a potential conflict of interest in the real estate industry?",
        choices: ["A strata manager is acting for two strata corporations located on adjoining plots of land, and they are both interested in negotiating an agreement to build a shared access road.",
            "A strata manager has been offered sizable referral fees by a garage door maintenance company in exchange for recommending strata corporations to sign maintenance contracts.",
            "A strata council has voiced that they want to find three potential contractors to give quotes before selecting a contractor to renovate the building's sauna, but the strata manager has been receiving many complaints by telephone from a small number of frustrated residents who particularly enjoy using the sauna, and so is hoping to complete the work quickly.",
        "A strata manager purchases a strata lot for themselves in a building that their brokerage does not manage."],
        correct: 3
    },
    {
        // Question 20
        question: "Which of the following is TRUE with respect to the duty to report?",
        choices: ["In all cases, a licensee should first report misconduct to their managing broker.",
            "The duty to report reflects the idea that the integrity and reputation of the real estate industry is a shared responsibility between the regulators and licensees.",
            "The general duty to report is a unique duty to real estate licensees, not shared by other professions",
        "The British Columbia Financial Services Authority will not assist licensees in deciding whether they should report certain misconduct, as this is the responsibility of the licensee to decide."],
        correct: 1
    },

    /*
    {
        // Question x
        question: "",
        choices: [, , ,],
        correct: 0
    }
    */
    /*,*/
    // add more questions here...
];

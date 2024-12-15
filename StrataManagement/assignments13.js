const questions = [
    {
        // Question 1
        question: "Mikhail discovers that his neighbour has been secretly raising a pet tarantula, contrary to the strata bylaw that restricts the ownership of pets to dogs and cats only. He makes a complaint to the strata corporation. What BEST describes how the strata corporation should respond?",
        choices: ["The strata corporation must give the tenant or owner the particulars of Mikhail’s complaint in writing, but may omit any unnecessary personal information about Mikhail.",
        "The strata corporation must not omit any information in the complaint letter, and should send the letter to the neighbour.",
        "The strata corporation must not disclose Mikhail’s complaint letter under any circumstances.",
        "The strata corporation should ask Mikhail to communicate directly with the neighbour."],
        correct: 0
    },
    {
        // Question 2
        question: "Which of the following is NOT required before the Office of the Information and Privacy Commissioner will consider a complaint?",
        choices: ["Contact details for the complainant",
        "Nominal deposit",
        "Description of the circumstances giving rise to the complaint",
        "Copies of the applicant’s complaint made to the public body, and its response, if any"],
        correct: 1
    },
    {
        // Question 3
        question: "Which of the following statements about the collection, use, and disclosure of employee personal information is TRUE?",
        choices: ["Employee personal information falls outside the scope of the Personal Information Protection Act.",
        "Employee personal information is collected solely for establishing, maintaining, or terminating the employment relationship.",
        "Business contact information is included within an employee's personal information.",
        "If an individual is a volunteer, their personal information is not under the scope of employee personal information within strata corporations."],
        correct: 1
    },
    {
        // Question 4
        question: "Which of the following statements about access requests is TRUE?",
        choices: ["Access requests may never be denied, as an individual always has a right to know how their personal information has been used.",
        "A strata corporation must always cooperate with an investigation by a public body regarding a particular individual in disclosing their personal information.",
        "The Personal Information Protection Act and the Strata Property Act provide for different timelines within which access requests must be responded to.",
        "A strata corporation must always provide whatever information is requested in its entirety as to ensure transparency and accuracy"],
        correct: 2
    },
    {
        // Question 5
        question: "What type of information should be recorded in the minutes of an annual general or special general meeting?",
        choices: ["The names of any complainants",
        "A transcript of any discussion",
        "Each attendee’s name and strata lot number",
        "The names of all absent but entitled to attend the meeting"],
        correct: 2
    },
    {
        // Question 6
        question: "When delegating work to third-party service providers, a strata corporation MUST ensure that:",
        choices: ["there are no outstanding complaints about the third-party service provider at the Office of the Information and Privacy Commissioner.",
        "fresh consent is obtained if the third-party service provider’s use of personal information is not for the same reasonable purpose for which the information was originally collected.",
        "the third-party service provider has no personal connections with any one of the residents.",
        "the third-party service provider has insurance with respect to situations of breach of privacy."],
        correct: 1
    },
    {
        // Question 7
        question: "Which of the following is NOT a scenario where reconsideration by the Office of the Information and Privacy Commissioner (OIPC) may lead to the re-opening of an investigation?",
        choices: ["Where it is necessary to correct a clerical error, an accidental error, or an omission by the investigator",
        "Where new facts or information arise that were not available during the initial investigation",
        "Where there is a shift in internal management and the current members personally disagree with the original finding",
        "Where the original finding was made in breach of natural justice or administrative fairness"],
        correct: 2
    },
    {
        // Question 8
        question: "Which of the following is NOT something strata corporations must consider prior to operating a video surveillance system on common property?",
        choices: ["They must submit an application relating to the video surveillance system to the Office of the Information and Privacy Commissioner.",
        "They must have exhausted other methods of addressing their related concerns prior to resorting to surveillance.",
        "They must observe and test its surveillance systems before allowing the cameras to record activities.",
        "They must have verifiable and specific concerns about their residents’ personal safety or the protection of the strata’s common or personal property."],
        correct: 0
    },
    {
        // Question 9
        question: "What is the role of a privacy officer?",
        choices: ["To arrest all those who violate the Privacy Act",
        "To oversee privacy complaints as a representative of the Royal Canadian Mounted Police",
        "To ensure compliance of their organization with privacy statutes",
        "To represent the Office of the Information and Privacy Commissioner"],
        correct: 2
    },
    {
        // Question 10
        question: "Which of the following is NOT considered to be personal information according to the Personal Information Protection Act?",
        choices: ["An individual’s work product information",
        "An individual’s emergency contact information",
        "An individual’s physical identifiers such as eye colour",
        "An individual’s vehicle license plate number"],
        correct: 0
    },
    {
        // Question 11
        question: "In British Columbia, the tort of “breach of privacy” is created by the:",
        choices: ["Privacy Act.",
        "common law.",
        "Freedom of Information and Protection of Privacy Act.",
        "Personal Information Protection Act."],
        correct: 0
    },
    {
        // Question 12
        question: "Which of the following is a power of the Office of the Information and Privacy Commissioner (OIPC)?",
        choices: ["Mediation of disputes between private individuals pertaining to the Privacy Act",
        "Enforcement of the Privacy Act",
        "Initiation of audits of private organizations for suspected non-compliance with the Personal Information Protection Act",
        "Overturning decisions of the British Columbia Supreme Court on breach of privacy matters"],
        correct: 2
    },
    {
        // Question 13
        question: "Which of the following statements regarding the Office of the Information and Privacy Commissioner’s (OIPC) statutory authority to issue penalties for offences committed under the Personal Information Protection Act (“PIPA”) is TRUE?",
        choices: ["An individual found guilty of an offence may be liable to pay a fine of $100,000.",
        "A public organization found guilty of an offence may be liable to pay a fine of not more than $10,000.",
        "The OIPC is not empowered to issue penalties for offences committed under PIPA.",
        "An organization could be fined $85,000 for using coercion to collect personal information."],
        correct: 3
    },
    {
        // Question 14
        question: "Mario is a strata lot owner in Arbutus Towers, a strata development. At a recent General Meeting, Mario spoke about a number of topics. Minutes of the meeting were recorded, and the Minutes included the unit number of Mario’s condo. Mario argues that the strata corporation did not have his consent to record his personal information. Which of the following statements about this situation is TRUE?",
        choices: ["By speaking at the meeting, Mario gave the strata corporation direct consent to record his personal information.",
        "The strata corporation does not require consent to use an owner’s personal information.",
        "By speaking at the meeting, Mario gave implied consent to his personal information being recorded.",
        "Mario is correct that he did not give the strata corporation consent to record his information, and this is a violation of the Personal Information Protection Act."],
        correct: 2
    },
    {
        // Question 15
        question: "Giancarlo is a strata lot owner at Birch Towers, a strata development. Giancarlo leases his unit to Aaron. The strata corporation is aware of the tenancy. Aaron has become concerned about how the strata corporation has used his personal information and he makes an access request, in writing, about the use and disclosure of his personal information to the strata corporation. In this situation, the strata corporation is obligated to:",
        choices: ["tell Aaron how his personal information has been used, but not to whom it has been disclosed as this would be breach of privacy of the recipient.",
        "do nothing because Aaron is a tenant and not an owner, and the strata corporation is not obligated to provide information to tenants.",
        "tell Aaron how his personal information has been used and to whom such information has been disclosed.",
        "send information concerning how Aaron’s personal information has been used and disclosed to the owner of the strata lot."],
        correct: 2
    },
    {
        // Question 16
        question: "Cherry Lanes, a strata property, is considering upgrading its building security system. Specifically, the strata corporation wishes to install high-tech video surveillance systems. Joffrey, an owner, is opposed to the change. He thinks that the installation of video surveillance equipment is a gross invasion of his personal privacy and contacts his lawyer to inquire about the proposal’s legality. Which statement about video surveillance systems is TRUE?",
        choices: ["Video surveillance systems inherently violate the Personal Information Protection Act and should never be used by strata properties.",
        "The Office of the Information and Privacy Commissioner is of the opinion that every strata property should install video surveillance systems to enhance security.",
        "Video cameras may be installed but may only monitor common areas of a strata property and the entrances to individual suites, not the interiors of those suites.",
        "Strata corporations should only operate a video surveillance system if other measures have failed to address safety or security concerns."],
        correct: 3
    },
    {
        // Question 17
        question: "Pursuant to the Personal Information Protection Act, a strata corporation requires fresh consent prior to disclosing an individual’s personal information in which of the following circumstances?",
        choices: ["Where disclosure is reasonably necessary for use in obtaining legal advice for the strata corporation",
        "Disclosure to the strata manager for a different purpose than the information was originally collected for",
        "It is necessary to facilitate collection of debt owed by an owner to the strata corporation",
        " strata corporation always requires fresh consent prior to the disclosure of an individual’s personal information"],
        correct: 1
    },
    {
        // Question 18
        question: "Felix is a strata lot owner in Hemlock Estates, a strata property development. Recently, a complaint has been made accusing Felix of violating a strata corporation bylaw. Felix, who denies the allegations, requested the particulars of the complaint. Karen, the strata manager, is unsure of whether to provide the complaint letter, as it contains personal information of the complainant, Justin. What must Karen do in this situation?",
        choices: ["Karen must disclose the entire complaint letter to Felix, because she has a legal obligation to disclose all correspondence records to Felix, the requestor.",
        "Felix has no power, under any law, to request information about the particulars of the complaint.",
        "Karen may refuse to provide the complaint letter in order to protect Justin’s personal information.",
        "Karen should only disclose to Felix the sections of the complaint letter which do not reveal Justin’s personal information."],
        correct: 3
    },
    {
        // Question 19
        question: "Under the Strata Property Act, how long are strata corporations required to retain legal opinions obtained by the strata corporation?",
        choices: ["A minimum of 2 years",
        "1 year minimum",
        "A minimum of 6 years",
        "Permanently"],
        correct: 3
    },
    {
        // Question 20
        question: "Geronimo is an employee of a strata corporation. He wishes to make an access request with the strata corporation to learn how his employee personal information has been used. Which of the following statements regarding Geronimo’s request is TRUE?",
        choices: ["Pursuant to the Personal Information Protection Act, the strata corporation can charge Geronimo for the cost of producing copies of the information.",
        "Pursuant to the Personal Information Protection Act, a fee estimate must be provided to Geronimo prior to copying the requested documents.",
        "Pursuant to the Personal Information Protection Act, Geronimo may not be charged for his access request.",
        "Pursuant to the Personal Information Protection Act, the strata corporation may charge Geronimo any amount that it deems reasonable in all of the circumstances."],
        correct: 2
    }
];
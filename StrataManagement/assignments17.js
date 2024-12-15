const questions = [
    {
        // Question 1
        question: "In British Columbia, most of the regulation regarding the use of private land comes from:",
        choices: ["the local governments.",
        "the provincial government.",
        "the federal government.",
        "both the provincial and federal governments."],
        correct: 0
    },
    {
        // Question 2
        question: "Which of the following is NOT regulated by zoning bylaws?",
        choices: ["Change in ownership or occupancy of a building, structure or land",
        "The size, design and location of advertisement signs in a given area",
        "The number of buildings permitted on a given parcel of property",
        "The number of parking spaces required for a 10,000 seat auditorium"],
        correct: 0
    },
    {
        // Question 3
        question: "Sam wishes to purchase a six-acre piece of farmland with the intention of developing it as a botanical tourist attraction and amusement park. The land is located in the agricultural land reserve. Which one of the following statements is TRUE?",
        choices: ["Although the property is within the agricultural land reserve it may be used for this non-agricultural purpose without the need for Land Reserve Commission approval because the land will not be irreparably removed from future agricultural use.",
        "Sam should insert a condition precedent into his offer to ensure that the Land Reserve Commission approves his intentions before he is committed to purchasing the property.",
        "Sam should have the municipality agree to his subdividing the land into three two-acre parcels and thereby avoid the agricultural land reserve problem altogether.",
        "Both (1) and (2) are true."],
        correct: 1
    },
    {
        // Question 4
        question: "Which of the following is NOT one of the usual three parts of a zoning bylaw?",
        choices: ["The regulations applicable to each particular zoning district",
        "An official community plan",
        "An official map",
        "General administrative and interpretation sections"],
        correct: 1
    },
    {
        // Question 5
        question: "Which of the following statements about improvement districts is FALSE?",
        choices: ["Improvement districts are established by the provincial government following a petition by the residents of the area involved.",
        "Improvement districts are limited to rural areas only.",
        "Improvement districts are governed by elected trustees who may pass bylaws to carry out the district’s objectives.",
        "The main powers of improvement districts relate to the construction, operation or maintenance of utilities in rural areas."],
        correct: 1
    },
    {
        // Question 6
        question: "Bert recently proposed a subdivision plan that was accepted by the approving officer. Bert is anxious to find out what may be required of him under subdivision bylaws. Which of the following requirements or regulations could NOT be imposed on a subdivider such as Bert?",
        choices: ["The requirement to provide roads and street lighting",
        "The requirement to set aside land for a park or school",
        "A building scheme for the residences to be built in the subdivision",
        "The duty to protect riverbanks within the subdivision from development"],
        correct: 2
    },
    {
        // Question 7
        question: "Tussaud bought a large piece of property in the Vancouver area on which she constructed a wax museum. The area was subsequently rezoned to residential use. What will most likely be the new status of Tussaud’s tourist attraction?",
        choices: ["Under the new zoning bylaw, the museum will be deemed an illegal use of land and Tussaud will be forced to shut it down.",
        "The museum may continue operation as a legal non-conforming use of the land, but only while owned by the original owner, Tussaud.",
        "The museum may continue operation as a legal non-conforming use, but may lose this status if it shuts down for more than 90 days.",
        "Tussaud will only be able to continue operation of the tourist attraction in this area if she applies for and is granted a development variance permit."],
        correct: 2
    },
    {
        // Question 8
        question: "Which of the following statements concerning government regulations of privately owned land is TRUE?",
        choices: ["The provincial government and the federal government together have legislative authority over most privately owned land in Canada.",
        "The provincial governments have delegated their authority over privately owned land to local governments, and at present they retain no authority for regulating uses of privately owned land within the provinces.",
        "Local governments derive their powers to regulate privately owned land use from the provincial government and may only exercise the specific powers delegated to them.",
        "In British Columbia all local governments derive their authority to control privately owned land use from the Local Government Act."],
        correct: 2
    },
    {
        // Question 9
        question: "Which of the following is NOT an example of a legal non-conforming use?",
        choices: ["Elizabeth has just purchased a corner grocery store from Tom, who had owned it for 5 years. Last year the zoning was changed from commercial to residential.",
        "Della operated a law office in 25% of a building located in an area which has just been rezoned from commercial to residential. Della's practice is booming and she has expanded her office to occupy 50% of the building.",
        "Mizuho runs a deli in an area which was last year rezoned from commercial to residential. To accommodate her expanding catering business she has just constructed a 400 square foot addition off the back of the building.",
        "Gina runs a souvenir shop in Whistler, which she closes every year for three months from early September to late November. The zoning has been changed from commercial to residential."],
        correct: 2
    },
    {
        // Question 10
        question: "An official community plan:",
        choices: ["comes into force when adopted by bylaw.",
        "requires the municipality to carry out the provisions of the plan.",
        "has no official status whatsoever.",
        "None of the above"],
        correct: 0
    },
    {
        // Question 11
        question: "Which of the following statements about the rationale underlying the adoption of planning controls by local governments is TRUE?",
        choices: ["The most fundamental aspect of planning controls is the protection of property values.",
        "Planning controls are solely focused on generating economically efficient use of land and do not consider the physical appearance of land.",
        "Planning controls are often used in furtherance of environmental goals and may be used to prevent urban development.",
        "Planning controls and bylaws are often a matter of negotiation between local and provincial governments."],
        correct: 2
    },
    {
        // Question 12
        question: "Creative Condo Co., a developer, wishes to build new residential towers in an undeveloped area of Granville City, a municipality in British Columbia. The municipality fully supports the development; however, Granville City’s official community plan (“OCP”) currently designates the land as agricultural. The municipality wishes to rezone the land in order to permit the proposed development. Which statement BEST describes action that the municipality should take with respect to this project?",
        choices: ["The municipality should first amend the OCP so that the proposed rezoning is consistent with the OCP.",
        "The proposed development should be cancelled or relocated because the proposal is inconsistent with the OCP.",
        "The municipality should rezone the land for residential use and then call a public hearing to adopt a new OCP consistent with the rezoning.",
        "The municipality should apply to the province to have the OCP amended such that the proposed rezoning is consistent with the OCP."],
        correct: 0
    },
    {
        // Question 13
        question: "Cambie Town, a municipality in British Columbia, is considering rezoning some land within the city limits from commercial to single family residential. Which of the following statements regarding the rezoning process is TRUE?",
        choices: ["If Cambie Town initiates the rezoning process, the municipality may have to pay compensation to affected property owners whose land has become less valuable.",
        "The municipal council may accept a rezoning proposal subject to an applicant satisfying certain requirements, such as installing new utility lines.",
        "The municipal council must vote in favour of any rezoning bylaw on two separate occasions before it can be adopted.",
        "The municipal council must vote in favour of any rezoning bylaw on three separate occasions before it can be adopted."],
        correct: 1
    },
    {
        // Question 14
        question: "What is the function of a board of variance?",
        choices: ["To provide site-by-site exceptions to the regulations prescribed in a zoning bylaw",
        "To ensure that every affected property abides by the regulations prescribed in zoning bylaws",
        "To draft contracts between property owners and the local government that provide detailed plans showing what the property owner could build on the lands",
        "To provide a process to change an existing zoning bylaw through a voting process held by municipal council"],
        correct: 0
    },
    {
        // Question 15
        question: "Darren is a developer working on a residential housing project. Unfortunately, current zoning regulations do not allow for sufficient off-street parking to support the development. Darren has heard that the Local Government Act provides for permits which allow a local government to vary the provisions of its zoning bylaw requirements on a site-by-site basis. He wishes to obtain such a permit for this site. Which of the following statements regarding Darren’s situation is TRUE?",
        choices: ["Darren must obtain a development permit, which would provide an exception to the zoning bylaw.",
        "Darren should apply for a temporary use permit which, if granted, would allow the construction of a large parking garage.",
        "A permit will not help Darren in this situation. In order for more parking to be allowed, he will need to apply for rezoning of the land.",
        "Darren should apply to the municipal council or regional district board for a development variance permit."],
        correct: 3
    },
    {
        // Question 16
        question: "Pursuant to the Land Title Act, the approving officer gives consent to the subdivision of land by signing:",
        choices: ["a rezoning plan prepared by a land surveyor.",
        "a community re-alignment plan prepared by a certified land appraiser.",
        "a subdivision plan prepared by a certified land appraiser.",
        "a subdivision plan prepared by a land surveyor."],
        correct: 3
    },
    {
        // Question 17
        question: "The BC Building Code requires:",
        choices: ["anyone intending to demolish a building to obtain a building permit.",
        "local governments to ensure that buildings are constructed in accordance with approved plans.",
        "all businesses operating in commercial buildings to obtain business licences.",
        "all builders to pay development cost charges (DCCs) when construction commences."],
        correct: 1
    },
    {
        // Question 18
        question: "Oak Village, a municipality in British Columbia, prides itself on a family friendly community atmosphere. In fact, many residents moved to the municipality because they believed it would be a great place to raise their children. Horace, a new resident, has recently announced his plans to open an adult bookstore in the town centre. The municipality is considering options to prevent the business from opening. Which of the following BEST describes a strategy that Oak Village municipal council could pursue?",
        choices: ["Council could pass a law making it a criminal offence to operate an adult bookstore within municipal limits.",
        "Council could pass a zoning bylaw which prohibits the operation of adult stores and entertainment.",
        "Council could establish prohibitively high fees for the type of business licence that Horace requires to operate the business.",
        "Oak Village has no power to directly or indirectly regulate business activity in the municipality."],
        correct: 2
    },
    {
        // Question 19
        question: "Which statement BEST describes development cost charges (DCCs)?",
        choices: ["Charges payable by a developer of land in order to raise funds for the cost of construction, replacement and expansion of key municipal infrastructure components",
        "A negotiated agreement under which a developer agrees to make specified amenity contributions in the event that the local government decides to approve the developer’s rezoning applicati",
        "Charges payable by a subdivider in order to provide roads within the subdivision, as well as street lighting, underground wiring, water, sewer and drainage systems, and fire hydrants",
        "Charges pertaining to a property owner’s employment of engineers and architects who certify that proposed development plans comply with the requirements of the BC Building Code"],
        correct: 0
    },
    {
        // Question 20
        question: "Wesbrook City is a municipality in British Columbia. Its powers are set out in, and established by, the Local Government Act. Which of the following statements is TRUE?",
        choices: ["The federal government may revoke or amend the powers granted to the municipal government.",
        "The jurisdiction of the municipality and the province are distinctly established and do not overlap.",
        "The provincial government may revoke or amend the powers it has granted to the municipal government of Wesbrook City.",
        "Wesbrook City represents one of four levels of local government created by the Local Government Act."],
        correct: 2
    }
];
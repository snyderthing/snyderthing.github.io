const questions = [
    {
        // Question 1
        question: "A dispute has arisen between neighbouring strata lot owners that share a common structural wall. It seems that repairs are needed to a specific part of the plumbing system that runs through the common wall. Neither owner wants to shoulder all or part of the expense and both are looking to the strata corporation to fund all or part of the repair costs. How should this problem be resolved?",
        choices: ["As section 68 of the <em>Strata Property Act</em> defines the boundaries of a strata lot as being \"midway\" between the surfaces of a common wall, each lot owner must equally share the costs of the repair work.",
            "The costs of the repair work should be shared equally between both lot owners and the strata corporation.",
            "If the two lot owners cannot come to an agreement, the strata corporation should initially pay for the repair work and then charge the cost of repairs back to the two lot owners.",
            "Under the <em>Strata Property Act</em>, the plumbing should be considered to be \"common property\" and the repairs should be sole responsibility of the strata corporation."],
        correct: 3
    },
    {
        // Question 2
        question: "Which of the following statements is FALSE?",
        choices: ["A strata corporation may make an owner responsible for the repair and maintenance of the limited common property that the owner has a right to use.",
            "A strata corporation must repair and maintain the common property and common assets.",
            "A strata corporation may, by bylaw, limit its duty to repair the common property.",
            "A strata corporation may take responsibility for the repair and maintenance of specified portions of a strata lot."],
        correct: 2
    },
    {
        // Question 3
        question: `A strata property manager must, where the strata management service agreement includes responsibility for the strata corporation’s records required by the Strata Property Act, ensure that the strata corporation prepare and maintain the following records:
                <br>
                <br>A. Minutes of all meetings and the results of any votes taken
                <br>B. A list of all owners, their addresses, parking stall numbers (if any), and their unit entitlements
                <br>C. Names of all tenants in the building
                <br>D. Copies of all personal property insurance policies held by each lot owner`,
        choices: ["A and B only",
            "A, B, and C only",
            "A, B, and D only",
            "All of the above"],
        correct: 1
    },
    {
        // Question 4
        question: "A tenant of a lot owner, who has not been assigned the owner’s voting rights, has requested to be immediately provided with a copy of all of the strata corporation’s bylaws and rules. Which of the following best describes the duty of the strata corporation?",
        choices: ["The strata corporation has no obligation to provide the strata corporation’s bylaws and rules to a tenant, unless that tenant has been assigned the lot owner’s voting rights. Such obligation only extends to the lot owner personally.",
            "The strata corporation must immediately provide copies of the bylaws and rules to the tenant.",
            "The strata corporation must provide the tenant with copies of the bylaws and rules within two weeks.",
            "The strata corporation must provide the tenant with copies of the bylaws and rules within one week, and may charge up to $0.25 per page for the copies."],
        correct: 3
    },
    {
        // Question 5
        question: "With respect to terminating a strata management services agreement, which of the following is TRUE?",
        choices: ["A contract for strata management services can be cancelled by the strata corporation, without any liability or penalty, so long as the strata corporation gives two months’ notice and the cancellation is approved by a ¾ vote at an annual or special general meeting.",
            "A contract for strata management services can only be cancelled by the strata corporation without liability or penalty if there has been a breach of a material term of the contract by the strata management company.",
            "If the contract between the strata corporation and the strata management company expressly provides that there must be a six month notice period for any cancellation of the contract between the parties, the strata corporation would be subject to liability or a penalty if the cancellation notice period given by the strata corporation was less than six months, even if there was approval by a ¾ vote of the strata lot owners.",
            "None of the above is true."],
        correct: 0
    },
    {
        // Question 6
        question: "With respect to annual general meetings of the strata corporation, which of the following is true?",
        choices: ["Annual general meetings must always be held every year, without exception, under the <i>Strata Property Act</i>.",
            "An annual general meeting need not be held if, prior to the date for the annual general meeting, all eligible voters agree that there is no need to hold the next annual general meeting.",
            "An annual general meeting need not be held if, prior to the date for the annual general meeting, all eligible voters waive in writing the holding of the meeting and consent in writing to resolutions that, at a minimum, approve the next year’s budget and elect the strata council by acclamation.",
            "An annual general meeting for the year need never take place if the strata corporation is unable to obtain the necessary quorum."],
        correct: 2
    },
    {
        // Question 7
        question: "Section 45 of the <i>Strata Property Act</i> requires that the strata corporation must give at least two weeks’ written notice of an annual or special general meeting. Assuming that no one has waived the right to notice, which of the following most accurately describes who must receive this written notice?",
        choices: ["All lot owners",
            "All lot owners and all tenants of lot owners",
            "All lot owners, all tenants, and all section 60 mortgagees",
            "All lot owners, all section 60 mortgagees, and only those tenants who have been assigned a landlord’s right to vote at the meeting"],
        correct: 3
    },
    {
        // Question 8
        question: "Section 45 of the <em>Strata Property Act</em> states that the strata corporation must give “at least two weeks’ written notice” of an annual or special general meeting. Which of the following best describes the appropriate calculation applicable to this mandatory two week notice period?",
        choices: ["The two week notice period is 14 days, irrespective of what date the 14 days begins or ends on.",
            "When calculating the two week notice period, the first day of the two week notice period must be excluded.",
            "When calculating the two week notice period, the first and last day of the two week notice period must be excluded.",
            "Sundays are never included when calculating the two week notice period."],
        correct: 2
    },
    {
        // Question 9
        question: "A particular strata corporation has 100 individually owned strata lots. For this strata corporation, a quorum for annual or special general meetings of a strata corporation is:",
        choices: ["Eligible voters holding ½ of the strata corporation’s votes, present in person or by proxy",
            "Eligible voters holding ⅓ of the strata corporation’s votes, present in person or by proxy",
            "Eligible voters holding ¼ of the strata corporation’s votes, present in person or by proxy",
            "None of the above"],
        correct: 1
    },
    {
        // Question 10
        question: "With respect to voting at a strata corporation’s annual or special general meeting, which of the following statements is FALSE?",
        choices: ["A tenant is entitled to vote if the tenant has been assigned the landlord’s right to vote, and there is no eligible section 60 mortgagee.",
            "An owner is always entitled to vote under any circumstances.",
            "In certain circumstances, and with appropriate notice, a mortgagee may be entitled to vote.",
            "An owner who owes an outstanding fine to the strata corporation is still entitled to vote."],
        correct: 1
    },
    {
        // Question 11
        question: "Under section 56(1) of the Strata Property Act, a person can vote at a strata meeting by proxy. Which of the following statements is FALSE with respect to a document appointing a proxy?",
        choices: ["The document must be in writing.",
            "The document may not be revoked for 30 days after it is created.",
            "The document may be designed to be effective for all voting purposes.",
            "The document may be designed to be effective for only a specific resolution."],
        correct: 1
    },
    {
        // Question 12
        question: "Assuming no regulations have been passed under section 56 of the Strata Property Act, which of the following persons currently may NOT act as proxies for eligible voters in a strata corporation?",
        choices: ["The strata manager for the same strata corporation",
            "An immediate family member of the voter",
            "The voter’s legal counsel",
            "All of the above may act as proxies."],
        correct: 0
    },
    {
        // Question 13
        question: "Which of the following is FALSE with respect to the Information Certificate referred to in section 59 of the Strata Property Act (“SPA”)?",
        choices: ["The Information Certificate must be provided by the strata corporation in the prescribed form within one month of a request by an authorized person.",
            "Section 59 of the SPA authorizes an owner, a purchaser, or any person authorized by an owner or purchaser to make a request for an Information Certificate.",
            "The Information Certificate must disclose, among other things, the strata fees payable by the owner, any monies owed by the owner to the strata corporation, any future levies that the owner is obligated to pay, and the amount of the strata corporation’s contingency fund.",
            "The Information Certificate must attach both the rules and the current budget of the strata corporation."],
        correct: 0
    },
    {
        // Question 14
        question: `When a strata corporation gives notice or delivers a document pursuant to the Strata Property Act (“SPA”), which of the following methods of delivery are acceptable in appropriate circumstances, under the SPA?
        <br>
        <br>A. Leaving it with the person
        <br>B. Putting it under the door of the person’s strata lot
        <br>C. Mailing it to the address provided by the person or mailing it to the strata lot address
        <br>D. Leaving it with an adult occupant of the person’s strata lot`,
        choices: ["A and C only",
            "A, B, and C only",
            "All of the above methods of delivery are acceptable.",
            "None of the above methods of delivery are acceptable."],
        correct: 2
    },
    {
        // Question 15
        question: `A strata corporation has common property that has been used since the strata was initially developed. It is a large, grassy recreational area replete with lawn chairs, fountains, and rose gardens. There is a groundswell of support to construct in this area two regulation sized tennis courts for the free use of all strata lot owners. The strata council has also discovered that, due to an expected dramatic increase in the cost of asphalt, if bids are tendered for the construction of the tennis courts within the next 30 days, a savings of over 30% can be realized on the construction costs. In order to proceed with this matter, which of the following procedures must first take place?
<br>
<br>A. The strata council must have a ¾ approval vote.
<br>B. The strata lot owners must first present a petition to the strata council signed by ¾ of the lot owners.
<br>C. There must be a resolution passed by a ¾ vote at an annual or general meeting.
<br>D. Given the urgency of the situation, the council may proceed unilaterally with authorizing the expense of the tennis court construction.`,
        choices: ["A and B only",
            "B and C only",
            "D only",
            "C only"],
        correct: 3
    },
    {
        // Question 16
        question: `Which of the following statements are TRUE with respect to the repair of common property and common assets in a strata corporation?
<br>
<br>A. A strata corporation must repair and maintain common property, common facilities, and common assets.
<br>B. Individual lot owners are always responsible for the repair and maintenance of limited common property that the owner has an exclusive right to use.
<br>C. A strata corporation may, by bylaw, take over the responsibility for the repair and maintenance of certain parts of a particular strata lot.
<br>D. Strata corporations are only responsible for the repairs set out in the Schedule of Maintenance.`,
        choices: ["A and B only",
            "A and C only",
            "A and D only",
            "All of the statements are true"],
        correct: 1
    },
    {
        // Question 17
        question: "If a work order is issued against a particular strata lot, and the lot owner fails to abide by the terms of the work order, the strata corporation may do the following:",
        choices: ["The strata corporation may proceed with the required work.",
            "The strata corporation may require the owner to reimburse the strata corporation for the required work.",
            "The strata corporation may register a Certificate of Lien against the strata lot of an owner who fails to reimburse the strata corporation for the required work.",
            "All of the above"],
        correct: 3
    },
    {
        // Question 18
        question: "A construction company was hired by a strata corporation to build a playground on the strata corporation’s common property. The construction company was not paid for its work and/or materials on a timely basis and now intends to file a builders lien against the strata corporation. Which of the following is TRUE:",
        choices: ["The builders lien will be filed at the land title office and endorsed against the common property folio.",
            "The builders lien will be filed at the land title office and endorsed as a charge against each individual strata lot title.",
            "The builders lien will be filed at the land title office and endorsed against the common property folio and as a charge against each individual strata lot title.",
            "The builders lien cannot be filed at the land title office as a builders lien cannot be filed for work done solely for a strata corporation’s common property."],
        correct: 1
    },
    {
        // Question 19
        question: "With respect to the bylaws of a strata corporation, which of the following is FALSE?",
        choices: ["A strata corporation’s bylaws are the Standard Bylaws appended to the Strata Property Act, except to the extent that different bylaws are approved by the strata corporation and filed in the land title office.",
            "A strata corporation’s bylaws may differ from the Standard Bylaws where an owner/developer deposits a strata plan that contains different bylaws.",
            "The Standard Bylaws require that all strata corporations must have a strata council with at least three members and not more than seven members.",
            "The Standard Bylaws set out the minimum remuneration for strata council members."],
        correct: 3
    },
    {
        // Question 20
        question: `The Strata Property Act (“SPA”) provides for the creation of “sections”. A section could be:
<br>
<br>A. A group of lot owners designated by the square footage of their strata lots
<br>B. A group of lot owners designated by whether their strata lots are: i) apartment-style lots; ii) townhouse-style lots; or iii) detached houses
<br>C. A group of lot owners designated by whether their strata lots are residential or non-residential lots
<br>D. A group of lot owners designated by whether their lots are owner occupied or tenant occupied`,
        choices: ["All of the above could be sections under the SPA",
            "A, B, and C only",
            "A and B only",
            "B and C only"],
        correct: 3
    }

    /*
        {
            // Question x
            question: "",
            choices: ["",
            "",
            "",
            ""],
            correct: 0
        },
        */
    // add more questions here...
];

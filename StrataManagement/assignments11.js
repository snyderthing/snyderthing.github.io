const questions = [
    {
        // Question 1
        question: `Strata Corporation ABC (“ABC”) contains 120 strata lots, 80 of which are apartment-style units located in a single high-rise tower, and 40 of which are townhouse-style units located in multiple separate buildings on the strata property. The townhouse owners do not have access to the high-rise tower. There is a separate amenities building on the property to which all owners have access. The townhouse owners are unhappy about having to contribute to expenses that they feel relate solely to the high-rise tower. Therefore, the townhouse owners would like to amend ABC’s bylaws to create two sections: an apartment section and a townhouse section. At the following AGM, which all of ABC’s owners attend, resolutions to amend the bylaws to create the two sections were put to a vote. Brenda, the strata manager, accurately counts and records the following results:<br><br>
        <table border='1' cellspacing='0' cellpadding='0' align='center'>
        <tbody>
        <tr>
        <td style='width: 104.3pt;' valign='top'><p>&nbsp;</p></td>
        <td style='width: 105.1pt; text-align: center;' valign='top'>
        <p><strong>Apartment Owners</strong></p>
        </td>
        <td style='width: 114.6pt; text-align: center;' valign='top'>
        <p><strong>Townhouse Owners</strong></p>
        </td>
        <td style='width: 103.5pt; text-align: center;' valign='top'>
        <p><strong>Total</strong></p>
        </td>
        </tr>

        <tr>
                <td style="width: 104.3pt; text-align: center;" valign="top">
        <p>Votes <strong><u>FOR</u></strong> the creation of the sections</p>
        </td>
        <td style="width: 105.1pt; text-align: center;" valign="top">
        <p>55</p>
        </td>
        <td style="width: 114.6pt; text-align: center;" valign="top">
        <p>37</p>
        </td>
        <td style="width: 103.5pt; text-align: center;" valign="top">
        <p>92</p>
        </td>
        </tr>

        <tr>
        <td style="width: 104.3pt; text-align: center;" valign="top">
        <p>Votes <strong><u>AGAINST</u></strong> the creation of the sections</p>
        </td>
        <td style="width: 105.1pt; text-align: center;" valign="top">
        <p>25</p>
        </td>
        <td style="width: 114.6pt; text-align: center;" valign="top">
        <p>3</p>
        </td>
        <td style="width: 103.5pt; text-align: center;" valign="top">
        <p>28</p>
        </td>
        </tr>

        <tr>
        <td style="width: 104.3pt; text-align: center;" valign="top">
        <p>TOTAL</p>
        </td>
        <td style="width: 105.1pt; text-align: center;" valign="top">
        <p>80</p>
        </td>
        <td style="width: 114.6pt; text-align: center;" valign="top">
        <p>40</p>
        </td>
        <td style="width: 103.5pt; text-align: center;" valign="top">
        <p>120</p>
        </td>
        </tr>
        </tbody>
        </table>
        <br>
        <p>Assuming that ABC did NOT have any existing sections prior to this vote, Brenda would be correct in declaring that:</p>
        `,
        choices: ["Since less than ¾ of the apartment owners voted in favour of the resolutions, neither of the sections has been created.",
        "Since at least ¾ of the total owners voted in favour of the resolutions, the two sections have been created.",
        "Since at least ¾ of the townhouse owners and at least ¾ of the total owners voted in favour of the resolutions, but less than ¾ of the apartment owners voted in favour of the resolutions, only the townhouse section has been created.",
        "Since at least ½ of the apartment owners, the townhouse owners, and the total owners voted in favour of the resolutions, the two sections have been created."],
        correct: 2
    },
    {
        // Question 2
        question: "A strata corporation has just successfully created a townhouse section. Which of the following is TRUE about this newly formed section?",
        choices: ["The section must pass its own set of bylaws.",
        "The section must elect an executive.",
        "The strata corporation and section may no t use the same strata management company.",
        "All of the above"],
        correct: 1
    },
    {
        // Question 3
        question: "Due to a major illness of Gordon, one of Strata Plus Services Inc.’s (“Strata Plus”) strata managers, the brokerage was forced to re-assign Gordon’s clients to the brokerage’s other strata managers. Angela, another strata manager at Strata Plus, was assigned to one of Gordon’s strata properties, the Luxor. The Luxor contains 120 strata lots, 80 of which are apartment-style units located in a single high-rise tower, and 40 of which are townhouse-style units located in multiple separate buildings on the strata property. Both the apartment units and the townhouse units are organized into separate sections. Gordon, through Strata Plus, acts for both the strata corporation and the townhouses section of the Luxor. The apartments section is managed by another brokerage. One day, Angela receives a cheque from one of the owners in the townhouses section, payable to the strata corporation in the amount of $345, with “September’s strata and section fees” written on the subject line. For this particular owner, September’s strata and section fees should have totalled $445, not $345. How should Angela deal with this cheque?",
        choices: ["Angela should consult the strata corporation’s bylaws, the townhouses section’s bylaws and the agreement between the strata corporation and townhouses section, if any, for the appropriate course of action to follow.",
        "Pursuant to the formula set out in the Real Estate Services Act, Angela should apportion the $345 between the strata corporation and townhouses section using the same percentage through which the $445 payment would have been apportioned.",
        "According to the Real Estate Services Act, because the strata corporation and townhouses section are separate legal entities, Angela cannot accept a single cheque for payment to both entities; therefore, she should return the cheque to the owner.",
        "The Real Estate Services Rules specify that any under-payment of a blended payment must not be deposited by the brokerage until both the strata corporation and townhouses section authorize the deposit."],
        correct: 0
    },
    {
        // Question 4
        question: "Which of the following statements about a section’s budget is accurate?",
        choices: ["A section’s budget includes both an operating fund and a contingency reserve fund.",
        "A section’s budget must be approved by both the owners in the section and the owners of the strata corporation as a whole.",
        "A section may not require the owners of the section to pay special levies.",
        "A section should have its own budget approved in conjunction with the strata corporation’s budget at the strata corporation’s annual general meeting, preferably as a separate column in the strata corporation’s budget."],
        correct: 0
    },
    {
        // Question 5
        question: "Strata Corporation XYZ (“XYZ”) has a bylaw that prohibits having more than one pet in one strata unit, and the townhouse section of XYZ (“the section”) has also adopted an identical bylaw. James, an owner, suspects that his neighbour, Harry, is keeping multiple dogs in Harry’s townhouse unit. James investigates and is able to gather multiple photographs of several dogs entering and leaving Harry’s unit over a period of one month. James forwards the evidence to the executive of the townhouse section, which, after a properly held hearing, issues a $100 fine, as stated in the bylaw. Over the course of the next year, Harry continues to refuse to abide by the bylaw, and as permitted in the bylaw, numerous fines relating to his dogs are issued. Harry refuses to pay the fines, and is trying to sell his townhouse unit and move to a new residence that is more pet-friendly. Which of the following accurately describes what the section may do next?",
        choices: ["The section may file a lien against Harry’s strata lot in the appropriate land title office.",
        "The section may withhold issuing a Certificate of Payment (Form F) to prevent the sale of Harry’s strata lot.",
        "The section may make a claim against Harry through the Civil Resolution Tribunal for the amount owing.",
        "The section may not do any of the above."],
        correct: 2
    },
    {
        // Question 6
        question: "Ann, who works for Happy Homes Strata Brokerage Ltd. (“Happy Homes”), is the strata manager for Strata Corporation EFG (“EFG”). EFG has recently created a commercial section and a residential section. The executives of both of these sections ask Ann if she can also provide strata services to both of the sections. Ann correctly responds to the executives that:",
        choices: ["since she is already providing strata management services to EFG, she is restricted to only providing management services to one of the two sections.",
        "because of the conflict of interest, she is not permitted to act for more than one legal entity within a single strata development.",
        "because the sections are part of the strata corporation that Happy Homes already acts for, acting for the sections falls within the scope of the management agreement between Happy Homes and EFG.",
        "she may provide strata management services to EFG and both sections; however, because of the conflict of interest, Ann must either provide limited representation to all three entities or provide full representation to one of the entities and limited representation to the other two entities."],
        correct: 3
    },
    {
        // Question 7
        question: "Kellogg Towers (“Kellogg”) is a strata development in West Vancouver, British Columbia. The multi-building complex includes both residential and non-residential units, and Kellogg has both a residential and a non-residential section. Neither of the sections has passed its own bylaws. Recently, some members of the residential section became dissatisfied over how vehicles belonging to the owners of the non-residential units are parking in the parking spots reserved for residential owners. Several residential owners want to pass a resolution to amend the strata corporation’s bylaws to increase the parking violation fine from $50 to $200. What is required for this resolution to be passed?",
        choices: ["A majority vote (i.e., greater than 50%) from both the residential and non-residential sections is required.",
        "Only a ¾ vote of the residential section is required.",
        "A ¾ vote from each of the residential and non-residential sections is required.",
        "Only a ¾ vote of the non-residential section is required."],
        correct: 2
    },
    {
        // Question 8
        question: "Violet is the strata manager for both the strata corporation and the commercial section at Hazel Estates, a single-building complex with 2 commercial units on the ground floor and 30 residential apartment units in the remaining five storeys. The service agreements specify that, should a conflict of interest arise, Violet will designate the strata corporation as the primary client and the commercial section as the secondary client. Recently, the strata corporation is considering passing a noise bylaw prohibiting continuous noise louder than 45 decibels and lasting longer than three minutes between 10:00 p.m. and 7:00 a.m. One of the commercial units is occupied by a coffee shop that is open until 11:00 p.m. The commercial units tell Violet that they plan to oppose the bylaw and ask her for advice in stopping the bylaw from being passed. Meanwhile, the chairperson of the strata corporation tells Violet that 20 apartment unit owners have already expressed their support, and that several out-of-town owners are already prepared to give him full proxy rights to vote in favour of the bylaw. He asks her to prepare for a special general meeting to vote on the bylaw as soon as possible. In this situation, Violet:",
        choices: ["must continue to prepare for the special general meeting to vote on the bylaw, as instructed by the chairperson of the strata corporation.",
        "must tell the commercial section about the proxy arrangements and how a substantial amount of apartment units may already be prepared to vote in support of the bylaw.",
        "must advise the commercial section on the best strategies to adopt in order to stop the bylaw from being passed.",
        "must refuse the requests for services from both the strata corporation and the commercial section until the bylaw has been put to a vote."],
        correct: 0
    },
    {
        // Question 9
        question: "Liston Hall is a mixed-use strata building with both residential and non-residential units. There is a residential section and a commercial section, which were created by the owner developer at the time of development. In light of the administrative costs associated with maintaining the sections, the strata corporation is reconsidering the usefulness of the sections. In particular, because all of the units are situated in a single building, there are very few, if any, expenses that are purely attributable to only one of the sections. A resolution to cancel the commercial section is put to a vote at an annual general meeting of the strata corporation. To cancel the commercial section, which of the following would be required?",
        choices: ["A majority vote of the eligible voters of the strata corporation, and a ¾ vote of the eligible voters in the commercial section only.",
        "A ¾ vote of the eligible voters in the commercial section, and a ¾ vote of the eligible voters in the residential section.",
        "A ¾ vote of the eligible voters of the strata corporation, and a ¾ vote of the eligible voters in the commercial section only.",
        "Since the sections were created by the owner developer, only the owner developer can cancel them at the appropriate land title office."],
        correct: 1
    },
    {
        // Question 10
        question: "The Hermitage and The Icon are two separate high-rise strata buildings in Vancouver. Both buildings contain residential and non-residential strata units. The Hermitage has created a non-residential section. On the other hand, The Icon does not have sections, but rather, has designated a \"non-residential type\" in its bylaws. Which of the following statements about the allocation of costs for types and sections is TRUE?",
        choices: ["Contingency reserve fund expenses can be allocated to the non-residential units only in both The Hermitage and The Icon.",
        "Contingency reserve fund expenses can be allocated to the non-residential units only in The Icon.",
        "Contingency reserve fund expenses can be allocated to the non-residential units only in The Hermitage.",
        "Contingency reserve fund expenses cannot be allocated to the non-residential units in either The Hermitage or The Icon."],
        correct: 2
    },
    {
        // Question 11
        question: "Olympic Gardens is a strata development located in Vancouver. The property contains 72 strata lots, 60 of which are apartment-style units in Platinum Tower, a high-rise building. The other units are in Silver Terrace, a row of 12 townhouses. Townhouse owners do not have access to Platinum Tower. Tony is the owner of one these townhouses. He is currently lobbying owners in Olympic Gardens to organize the apartment-style units and the townhouse units into separate sections. Tony can make which of the following TRUE statements about sections?",
        choices: ["Under the Strata Property Act, the \"general rule\" is that costs in a strata development are allocated on the basis of whether a strata lot benefits from the expense.",
        "If sections are created, owners in Platinum Tower may assume all costs in respect of elevator maintenance in that tower.",
        "If sections are created, owners in Platinum Tower will likely continue to contribute to the costs of maintaining the parking garage designated exclusively for the use of townhouse owners.",
        "If sections are created, owners in Silver Terrace will continue to have a say in decisions regarding the maintenance of the elevator system in Platinum Tower."],
        correct: 1
    },
    {
        // Question 12
        question: "Olympic Gardens is a strata property located in Vancouver. The property contains 72 strata lots, 60 of which are apartment-style units located in Platinum Tower, a high-rise building. The other units are in Silver Terrace, a row of 12 townhouses. Both the apartment-style units and townhouse units are separated into separate sections. After the creation of the two sections, the strata corporation may no longer be responsible for:",
        choices: ["the repair and maintenance of Platinum Tower.",
        "obtaining insurance for the property.",
        "arranging landscaping and snow removal services for the property.",
        "the collection of strata fees."],
        correct: 0
    },
    {
        // Question 13
        question: "Prior to the second annual general meeting, the non-residential owners in a strata property containing both residential and non-residential units sought to create a section. To successfully create sections in this situation:",
        choices: ["a bylaw amendment creating sections must be approved by a ¾ vote of the eligible voters in the proposed section and ¾ vote of all eligible voters in the strata corporation.",
        "a bylaw amendment creating sections must be passed by a ¾ vote of the residential strata lots and by a ¾ vote of the non-residential strata lots",
        "a bylaw amendment creating sections must be approved by a unanimous vote.",
        "sections cannot be successfully created by owners until the second annual general meeting, and therefore cannot be created in this situation."],
        correct: 2
    },
    {
        // Question 14
        question: "The Strata Property Act expressly imposes on sections the obligation to:",
        choices: ["establish an operating fund and a contingency reserve fund.",
        "insure against the same perils that are insured against by the strata corporation.",
        "convene an annual general meeting each year without exception.",
        "amend the strata corporation’s bylaws to create section specific bylaws"],
        correct: 0
    },
    {
        // Question 15
        question: "Trevor is a strata manager acting for a strata corporation that is considering the creation of sections. Trevor does not know much about sections nor about the law pertaining to their creation and administration. The relevant legislation which Trevor should refer to for this information is the:",
        choices: ["Land Title Act",
        "Condominium Act",
        "Real Estate Services Act",
        "Strata Property Act"],
        correct: 3
    },
    {
        // Question 16
        question: "Happy Homes Strata Management Ltd. (“Happy Homes”) is the strata management company for the strata corporation at Wesbrook Gardens (“Wesbrook”), a mixed-use strata development. Wesbrook has recently created a commercial section and a residential section. Both the strata corporation and the commercial and residential sections wish for Happy Homes to hold and receive money on their behalf. Which of the following statements about this request is TRUE?",
        choices: ["Happy Homes should maintain separate trust accounts for the strata corporation, the commercial section, and the residential section.",
        "Because the sections are part of the strata corporation that Happy Homes already acts for, Happy Homes should hold and receive each section’s money in a trust account in the name of the strata corporation.",
        "Happy Homes should maintain two trust accounts: one trust account in the name of the strata corporation, and one trust account for the sections created within that strata corporation.",
        "Happy Homes should maintain a single trust account for the strata corporation and the sections; the account should be in the name of the strata corporation, but Happy Homes should maintain separate books internally for each entity."],
        correct: 0
    },
    {
        // Question 17
        question: "Julius is a strata manager who provides strata management services to the strata corporation and the commercial section in Wesbrook Pavilion, a strata complex. Julius’ brokerage entered into service agreements which establish the strata corporation as the primary client. One of the commercial strata lots is used as a juice bar. The commercial section has a recycling receptacle located on limited common property designated for the commercial lots. Pursuant to the bylaws, the recycling receptacle is maintained by the commercial section. The containers disposed of by the juice bar in the receptacle give off an objectively foul smell, which is a constant source of complaints from the strata corporation. Recently, the commercial section has approached Julius, seeking advice on how to reduce its recycling expenses. Julius knows that reducing the frequency of recycling pick-ups would lower costs but is worried that such a reduction may lead to even more complaints from the strata corporation. In this situation, Julius:",
        choices: ["must advise the commercial section to reduce the frequency of pick-ups. As they are his client, he must act in their best interests.",
        "must inform the commercial section that he cannot advise on all options regarding how to reduce its recycling expenses as some available options would conflict with the interests of the strata corporation.",
        "must recognize that a conflict of interest between clients exists and advise both clients that he is unable to act for any of them.",
        "must advise the commercial section to increase the frequency of pick-ups, knowing that this action will be in the best interest of the strata corporation."],
        correct: 1
    },
    {
        // Question 18
        question: "Which of the following statements comparing “sections” and “types” is TRUE?",
        choices: ["A section can be used to control cost allocation, while a type cannot be used to do so.",
        "The designation of a type entails far more challenges for a strata manager than the creation of a section.",
        "A section constitutes a distinct legal entity, while a type does not.",
        "Contingency reserve fund type expenses cannot be allocated to only one section but may be allocated to only one type."],
        correct: 2
    },
    {
        // Question 19
        question: "Dmitri owns a strata lot which is located in the residential section of a strata property. Recently, Dmitri has failed to pay a number of special levies, totalling $950, which the residential section has authorized. Which of the following is a strategy which the section may pursue in order to collect payment from Dmitri?",
        choices: ["The section may ask the strata corporation to file a lien against Dmitri’s strata lot on the section’s behalf.",
        "The section may refuse to issue a Certificate of Payment (Form F) until Dmitri pays the monies owed.",
        "The section may file a lien (Form G) against Dmitri’s strata lot at the land title office.",
        "The section may prevent the sale of the strata lot until Dmitri pays the money owed by contacting the land title office."],
        correct: 0
    },
    {
        // Question 20
        question: "The person(s) with the same powers and duties with respect to the section as a strata council has with the respect to the strata corporation is referred to as:",
        choices: ["the section council.",
        "the section manager.",
        "the strata manager.",
        "the section executive."],
        correct: 3
    }
];
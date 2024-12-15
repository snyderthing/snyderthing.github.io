const questions = [
    {
        // Question 1
        question: `Doris Developer developed Superior Strata Suites, a brand new apartment complex consisting of 50 strata units and wonderful amenities. Nick Nasal thought the apartments were amazing and purchased title to a unit the first day they were offered for sale. After Nick’s purchase, sales continued along at a brisk pace until the 25th unit was sold. By this time, however, the fact that Nick’s legendary snoring had turned all the other strata owners into insomniacs had become public knowledge. No new units were sold. It is now eight months since Nick purchased his unit. The other strata owners are demanding that Doris hold a general meeting. Doris objects, saying that she is not yet required under the Strata Property Act (“SPA”) to hold the first general meeting.
<br>
<br>Which of the following is TRUE?`,
        choices: ["Doris has failed to hold a general meeting within the correct time period as dictated by the SPA and, consequently, will be subject to fines.",
        "Doris has not yet exceeded the amount of time allocated under the SPA to hold the first general meeting.",
        "The strata owners themselves, not Doris, should have called the first general meeting as soon as 10 of them had a title conveyed to them.",
        "The SPA prohibits snoring over 75 decibels."],
        correct: 1
    },
    {
        // Question 2
        question: "Which of the following statements is FALSE regarding fiscal years for strata corporations?",
        choices: ["Annual general meetings must be held within two months of the strata corporation’s fiscal year end.",
        "The developer initially sets the fiscal year end date; however, the strata corporation may subsequently change it.",
        "The fiscal year always begins on January 1.",
        "The fiscal year is a period of 12 consecutive months."],
        correct: 2
    },
    {
        // Question 3
        question: "Which of the following examples would constitute effective notice of a general meeting to Tori Titleholder, the owner of a strata property?",
        choices: ["Tim, the strata council president, personally tells Tori about the upcoming meeting.",
        "Elisa delivers a written notice to Tori’s 12-year-old brother, an occupant of the property.",
        "Bobby Joe calls and leaves a message on Tori’s voice messaging system.",
        "Steve, who is scared of people, stuffs the notice under Tori’s front door, rather than knocking on her door, even though he knows she is home."],
        correct: 3
    },
    {
        // Question 4
        question: `Which of the following situations are examples of a strata corporation giving sufficient written notice of a general meeting?"
        <br>
        <br>A. Faxed notice sent 18 days prior to the meeting
        <br>B. Personally delivered notice received 14 days prior to the meeting
        <br>C. Notice mailed 20 days prior to the meeting
        <br>D. Notice left under the door of the strata unit one week prior to the meeting`,
        choices: ["C only",
        "B only",
        "A, B, and C only",
        "All of the above"],
        correct: 0
    },
    {
        // Question 5
        question: `Scotty Strata is a developer presenting the first annual budget to the strata corporation of his newly developed project. The budget is voted on and passes with flying colours on August 29.
<br>
<br>What is the start of the strata corporation’s fiscal year?`,
        choices: ["August 29",
        "August 30",
        "August 31",
        "September 1"],
        correct: 3
    },
    {
        // Question 6
        question: "Which of the following scenarios is TRUE regarding strata owners’ rights to waive the holding of an annual general meeting?",
        choices: ["Jonny gives written notice waiving the meeting, but then later decides that he would like to discuss the annual budget after all. Unfortunately for him, once a waiver has been given in writing, it cannot be revoked.",
        "Everyone in the strata corporation gave written notice waiving the meeting, except Robbie, who meant to give written notice, but forgot. Instead he tells Jason, a strata council member, that he has agreed to waive the meeting. The meeting may now be waived.",
        "Chrissie and Jean are joint tenants of a strata unit who want to waive the annual meeting. Every other strata owner in the development has waived the meeting in writing. Chrissie submits a written waiver. Jean does not, since she is a joint tenant with Chrissie. The meeting cannot be waived.",
        "Hollywood Harvey’s Stupendous Stratas, with a 500-member strata corporation, will have an easier time waiving its annual meeting than Paulie Pinnski’s Properties, which has a four-member strata corporation."],
        correct: 2
    },
    {
        // Question 7
        question: `Red Residences is a strata complex with 20 voting owners. This year’s annual general meeting has a record turnout. Keith and Mark, dedicated to their jobs and notorious for going into the office on weekends, are the only voting owners not attending. Which of the following are TRUE?
<br>
<br>A. A resolution to amend the annual budget MUST pass if there are 15 votes in favour.
<br>B. A majority vote MUST fail if there are 8 votes in favour.
<br>C. A unanimous vote MUST fail if all 18 voters attending vote in favour.
<br>D. Keith and Mark MAY, by writing, appoint proxies to vote in their place.`,
        choices: ["A, B, and C only",
        "B, C, and D only",
        "A, C, and D only",
        "All of the statements are true."],
        correct: 2
    },
    {
        // Question 8
        question: "A strata corporation may prevent an owner from voting if the strata corporation is able to register a lien against their title:",
        choices: ["under the Strata Property Act.",
        "if the strata corporation has amended its bylaws properly.",
        "because the Condominium Act, still in force, allows it.",
        "and the other owners confirm the voting restriction at the time of the vote."],
        correct: 1
    },
    {
        // Question 9
        question: "Can a non-emergency item requiring a ¾ vote pass if only 35 out of 100 possible strata owners turn out to vote?",
        choices: ["Yes, if a ¾ vote is returned, it passes unconditionally",
        "Yes, but only if a unanimous vote is returned since there is less than 50% of possible voters casting a vote",
        "Yes, but the resolution must not be implemented for one week and is subject to reconsideration by petition",
        "No"],
        correct: 2
    },
    {
        // Question 10
        question: "Which of the following statements about items on the agenda of an annual general meeting is FALSE?",
        choices: ["Strata owners may present non-agenda items from the floor to be voted upon if they receive the appropriate approval.",
        "The strata council sets the agenda for the meeting.",
        "The annual budget is generally approved before the election of a new strata council.",
        "The budget may be amended by a majority vote before it is voted on."],
        correct: 0
    },
    {
        // Question 11
        question: "The Strata Property Act requires that:",
        choices: ["items to be added to an agenda for a strata council meeting be submitted to the strata manager at least two weeks before the scheduled meeting.",
        "the completed agenda for a strata council meeting be sent to all council members at least one week before the scheduled meeting.",
        "notice of an annual or special general meeting be given to all eligible voters at least 20 days before the scheduled meeting.",
        "notice of an annual or special general meeting be given to all eligible voters at least two weeks before the scheduled meeting."],
        correct: 3
    },
    {
        // Question 12
        question: "With respect to a motion to ratify the actions of the strata council at annual or special general meetings, it is most accurate to say that:",
        choices: ["rules made by the strata council must be ratified at each and every meeting; otherwise, those rules are of no effect.",
        "since the strata council is elected by the eligible voters, there is no need to ratify any of the actions of the strata council as long as the council acted within its legal mandate.",
        "ratification is only needed for decisions of the strata council that involve expenditures over $2,500, or an amount otherwise specified in an amended bylaw.",
        "ratification is required for all rules that were made since the last annual or special general meeting; otherwise, those rules are of no effect."],
        correct: 3
    },
    {
        // Question 13
        question: "Which of the following situations is NOT an indicator of a dysfunctional strata council?",
        choices: ["John, the strata manager, encourages attendants of the AGM to turn their cell phones and other electronic devices to “silent” during the meeting.",
        "To save time, Violet and Rose, two of the strata council members, discuss the issue of repainting the buildings before the scheduled meeting and decide beforehand that they will vote against the resolution because of how expensive repainting would be.",
        "Braden, an owner and eligible voter, is a plumber who has insights into the leakage issues the strata is facing; however, he is afraid of speaking at the AGM because the strata president and the council members believe the issue is minor and use loud voices to silence any opposing opinions.",
        "After an AGM where a motion for a special levy to repaint the building’s lobby was defeated, Valerie, the strata president, chats loudly with Marguerite, a council member, in the building’s lobby about how some of the owners are just too stupid, stingy, and ignorant to see the need for, and value-adding effect of, repainting the lobby."],
        correct: 0
    },
    {
        // Question 14
        question: `Robert Snow is the chair of the strata council of Casterly Towers, a residential condominium complex in suburban Richmond, BC. During a council meeting, there is a motion to vote on a proposed expenditure to install speed bumps in the parkade of the complex. After some discussion, Robert calls for a vote. The strata council has 11 members, but one of them is not able to attend. Out of the ten members present, four vote in favour, three vote against it, and three abstain.
<br>
<br>Which of the following is the most accurate statement about the vote?`,
        choices: ["Strata council decisions require a majority vote to adopt; since only four votes out of the ten members present supported the motion, the motion is defeated.",
        "Strata council decisions require a majority vote to adopt; since only four votes out of the 11 members of the council supported the motion, the motion is defeated.",
        "Since more members (four) supported the rule than those who voted against it (three), the motion is adopted.",
        "As a resident who drives a very nice sports car, Robert cannot be the chair of the meeting for the speed bump issue because there is a conflict of interest. Robert should remove himself from the vote and the meeting, and the vice chair should call for a new vote without Robert’s vote."],
        correct: 2
    },
    {
        // Question 15
        question: `John McIntosh is the elected strata council president and the chair of the strata council at Hyrule Apartments in Port Moody, British Columbia. Hyrule’s bylaws are the Standard Bylaws, without any amendments.
<br>
<br>Which of the following situations represent recommended practice regarding John’s role as the chair?
<br>
<br>A. John, because he anticipates a contentious AGM, appoints the strata corporation’s lawyer, Ellen, to the position of the chair for the AGM.
<br>B. During an AGM, John chose to respond to every comment made by attendees. He felt like this was the best and most effective way to provide feedback to the group.
<br>C. At a strata council meeting discussing the installation of security cameras, Harvey, one of the council members, presents a report from a consultant that contains information on price and specifications of several brands of surveillance cameras that is relevant for next month’s vote. John does not adopt a motion to receive the report, and simply says “The report will be placed on file.”
<br>D. During a strata council meeting, John was sick and could not attend. Joffrey, the vice president, assumes the role of chair for the meeting.`,
        choices: ["B and D only",
        "A and C only",
        "C and D only",
        "A, B, and D only"],
        correct: 2
    },
    {
        // Question 16
        question: "Which of the following situations most accurately represents effective meeting planning by professional strata managers?",
        choices: ["Where a strata council is pre-occupied with many immediate priorities and a building envelope crisis, the strata manager encourages the council to only focus on the urgent business matters at the meetings, and to put off “large picture” strategic agenda items until the crisis and immediate concerns are over.",
        "While planning the agenda for an upcoming meeting that is likely going to be long due to a large quantity of items on the agenda, the strata manager decides to put all of the more difficult issues (i.e., “heavy” issues) first, even though one of them is not urgent, because members will only get more exhausted as the meeting progresses.",
        "While preparing the strata council meeting agenda, the strata manager sees that it will be impossible to deal with all the items, but the strata manager still decides to put the lower priority items later in the agenda, even though it is likely that they will not be substantially dealt with.",
        "The pre-meeting package for a special general meeting, including the printed agenda, is sent to all eligible voters ten days before the scheduled meeting."],
        correct: 2
    },
    {
        // Question 17
        question: "Which of the following statements represents poor voting procedure during an annual general meeting?",
        choices: ["The chair repeated the resolution and asked those in favour to raise one hand. An overwhelming number of hands were raised. The chair then asked those against the resolution to raise one hand. Around four to six hands were raised. There were a total of 80 eligible voters present and everyone voted. The chair proceeded to declare the motion carried without further counting.",
        "The chair repeated the resolution and asked those in favour to raise one hand. Approximately ten hands were raised. The chair then asked those against the resolution to raise one hand. Only one hand was raised. There were a total of 80 eligible voters present. The chair proceeded to declare the motion carried without further counting because it was clear that there was more than one vote in favour.",
        "An eligible voter suggested that the last item on the agenda should be moved up to the first item because many voters were concerned about that issue. Without making a motion, the chair asked if there were any objections to the change in agenda. Seeing that no one voiced any objections after a few seconds, the chair declared that the agenda was amended as proposed.",
        "After some informal discussion during the meeting about what security camera supplier to hire, it was obvious that the eligible voters seemed to be inclined towards hiring Cheap-O Inc. Without a motion being moved and seconded, the chair initiated a vote on the resolution to hire Cheap-O Inc. A large number of hands were raised in favour of the resolution, with no hands raised against it. The chair declared the motion carried."],
        correct: 1
    },
    {
        // Question 18
        question: "Which of the following is an example of a significant procedural violation?",
        choices: ["A speakers’ lineup is followed, rather than allowing members to speak at will.",
        "The group does not discuss a motion that is brought forward but not seconded.",
        "The chair closes debate unilaterally in order to ensure that the meeting progresses.",
        "An issue is discussed by a majority of members without a formal motion on the floor."],
        correct: 2
    },
    {
        // Question 19
        question: "Which of the following statements about the hierarchy of documents that govern strata corporations is FALSE?",
        choices: ["Where the bylaws conflict with the Strata Property Act, the Strata Property Act’s provisions always prevail.",
        "Where the bylaws violate the Strata Property Regulation, the bylaws prevail.",
        "The bylaws may not contain rules regarding meeting procedures.",
        "A strata corporation’s bylaws may never conflict with the applicable legislation, even if there is a unanimous vote to create a bylaw that conflicts with applicable legislation."],
        correct: 1
    },
    {
        // Question 20
        question: "Assuming that the Standard Bylaws have not been amended and that the strata corporation has more than four owners, which of the following statements represents a situation where there is insufficient attendance for a quorum?",
        choices: ["One week after a previous AGM was adjourned due to insufficient attendance for a quorum, only 15 of the 100 eligible voters were personally present at the second meeting after waiting 30 minutes past the scheduled start time. There were no proxies and the second meeting was at the same location as the previously adjourned meeting.",
        "Only 28 of the 100 eligible voters personally attend the AGM (i.e., 28%), but nine other eligible voters (i.e., 9%) had previously assigned proxies with full voting authority to John, the vice chair of the strata corporation who was one of the 28 eligible voters personally present.",
        "Only the chair and vice chair of a four-member council, both of whom are council members themselves, attend a scheduled strata council meeting.",
        "Only two of the five council members attend a scheduled strata council meeting."],
        correct: 3
    }
];
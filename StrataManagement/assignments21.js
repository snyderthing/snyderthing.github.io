const questions = [
    {
        // Question 1
        question: "Strata Corp YX has opened a bid for the renovations of their complexes. Four different companies have tendered their bids. Company A included a cost that was not part of the mandatory requirements; Company B was permitted to amend its bid post-closing; Company C was not disqualified even though its bid was non-compliant with a material requirement; and Company D substituted material goods. The bid process is being appealed as a result of these situations. Which two of the four companies’ actions would Strata Corp YX likely be held responsible for?",
        choices: ["Companies A and C",
        "Companies B and C",
        "Companies A and D",
        "Companies B and D"],
        correct: 1
    },
    {
        // Question 2
        question: "Which one of the following scenarios is MOST likely to be inconsistent with a strata management company’s purchasing policy?",
        choices: ["A strata manager conducts regular assessments of the stock supplies and records this information in a ledger.",
        "A strata manager sends off the purchase order prior to negotiation with the supplier and expects it to be fulfilled in accordance with the terms supplied.",
        "A strata manager commences a tendering process for the new carpeting that is to be installed in multiple strata complexes under management.",
        "A strata manager creates a list of all the employees who are permitted to purchase supplies along with the maximum spending limits per person."],
        correct: 1
    },
    {
        // Question 3
        question: "Steve, the strata manager of Lakeshore Condominium Complex, had opened up a tendering competition for the required renovations to the common property. Three of the bids he has received so far are similar in cost approximations. One bid that has been submitted by a new company, Sturdystuds, is remarkably lower in cost. Which of the following factors is LEAST likely to be a potential reason for this low bid?",
        choices: ["Sturdystuds has purposely underbid (\"lowballed\") the cost of the renovations.",
        "Sturdystuds, as an inexperienced company in the tendering process, may have omitted costs that should have been added on.",
        "Since Sturdystuds is the only non-unionized company to tender a bid, they are able to provide the service at a much lower cost.",
        "Since Sturdystuds is a small, local company, they are able to purchase all the necessary equipment at a lower cost than a large contractor."],
        correct: 3
    },
    {
        // Question 4
        question: "Bernie, the strata manager, needs to hire a contractor to install new electrical wiring for the condos in the condominium complex. He is unsure whether he should continue his relationship with the same contractor who performed the last job or if he should open up a tender. Which one of the following is NOT an advantage if Bernie were to commence a tender?",
        choices: ["With a tendering, Bernie is more likely to receive the best price possible.",
        "With a tendering, Bernie is able to base his selection on several different criteria.",
        "With a tendering, the process is quick and efficient.",
        "With a tendering, the selection process is transparent to the strata corporation, reducing the danger of accusations of favouritism or \"sweetheart\" deals."],
        correct: 2
    },
    {
        // Question 5
        question: "Steffie, the strata manager, needs to hire a company to perform the common property maintenance and she is looking at a few options. All three of the prospective companies have similar experience, but one of the companies, HomeStars, was featured in this year’s edition of “Condo Consortium”, an industry publication. Steffie contacted each of the companies to evaluate their services prior to making a decision. She is thinking of selecting HomeStars based on their reputation alone. The two other firms are irate and demand that Steffie reconsider. Which one of the following is TRUE?",
        choices: ["Steffie owes a duty to be fair to all three parties.",
        "Steffie is liable for not fully disclosing her requirements to each party.",
        "Steffie is not under any obligation to either of the two companies that she did not select since this is not a competitive bidding situation.",
        "Steffie must take back her decision and meet with all three firms again."],
        correct: 2
    },
    {
        // Question 6
        question: "Big Mack Construction decided to tender a bid for the construction job at the Rio Homes strata complex. The closing date for the bid was 4:00 pm on June 21st. Big Mack handed in their bid on June 19th. On June 21st, Big Mack realized it had made an error on its bid and wanted to revoke the bid. This was not communicated to Rio Homes until the morning of June 22nd. Rio Homes would not let it withdraw its bid. Which one of the following statements is TRUE?",
        choices: ["Since Big Mack did not communicate its desire to retract its bid prior to the closing of the bidding, it entered into Bid Contract A with Rio Homes.",
        "If Rio Homes had a clause that stated that a bidding party must forfeit its deposit if it retracts its bid after closing, the clause would be unenforceable.",
        "Big Mack can withdraw its offer at any time prior to an award being made.",
        "Big Mack had 24 hours to make changes to its bid."],
        correct: 0
    },
    {
        // Question 7
        question: "FourStories, a new condo development, commenced a tendering process for the development of their parking lot. Sterling submitted a bid that came in as the lowest bid and Hartell submitted the second lowest bid. FourStories chose to go with Hartell over Sterling. Which one of the following is NOT a legally valid reason for selecting Hartell?",
        choices: ["Sterling's bid had a material element that was considered to be non-compliant and FourStories did not have a clause that waived non-compliant elements.",
        "FourStories' invitation stated that the lowest bid will not necessarily be accepted.",
        "Sterling's bid was submitted four hours after the closing time of the bid.",
        "FourStories' strata manager was an acquaintance of Hartell's head contractor."],
        correct: 3
    },
    {
        // Question 8
        question: "Which one of the following is NOT an implied obligation on the purchaser?",
        choices: ["The obligation to disclose the true nature of the work, including any potential hidden dangers",
        "The obligation to abide by the rules set out in the invitation",
        "The obligation to act procedurally fairly",
        "The obligation to include fair rules in the invitation"],
        correct: 3
    },
    {
        // Question 9
        question: "The strata manager of Devon Condos initiated a competitive bid for the renovations needed in the complex. The closing of the bid was on July 5th. One of the bidders, Max Construction, did not comply with the specified materials, but corrected this omission in their document on July 7th. Which one of the following statements is TRUE?",
        choices: ["Devon Condos is still able to accept Max Construction's bid.",
        "Since Max Construction was permitted to amend their bid, so is every other bidder.",
        "Since Max Construction's omission was not a material element, the omission has no impact on the bidding process.",
        "Max Construction's bid is invalid and Devon Condos cannot award the bid in their favour."],
        correct: 3
    },
    {
        // Question 10
        question: "Soloplex Strata Corp. has commenced a bid for the repairs to its property. Eight different companies have submitted tenders. In its invitation to tender, Soloplex referred to several criteria that would be used to compare and evaluate the bids. However, Soloplex ended up selecting a contract based on criteria that were not mentioned in the invitation. One of the companies that was not selected is inquiring as to how the decision was made. Soloplex said it was based on the invitation criteria. Which one of the following is TRUE?",
        choices: ["Soloplex will be liable to all of the bidders for unfairness.",
        "Soloplex is liable to all of the bidders for using undisclosed criteria as the method of evaluation.",
        "Soloplex was obliged to fully disclose all of the evaluation criteria to all of the bidders.",
        "All of the above are true."],
        correct: 3
    },
    {
        // Question 11
        question: "Which of the following statements regarding the changes that the labour force has undergone in recent years is FALSE?",
        choices: ["Since the labour force is achieving higher levels of education, employees now bring greater skills and knowledge to the workplace.",
        "Since the number of new entrants to the workforce is declining, recruitment of qualified applicants will become less challenging in the future.",
        "As the labour force achieves higher levels of education, employees will likely become more critical of authority and less accepting of boring, repetitive work.",
        "Employees have rising expectations with regard to the nature of their work and their workplace, due to overall changing values and attitudes."],
        correct: 1
    },
    {
        // Question 12
        question: "The fundamental rights of citizens of the province of British Columbia are protected by which of the following?",
        choices: ["The Employment Act",
        "The Anti-Discrimination Act",
        "The BC Equality Code",
        "The Human Rights Code"],
        correct: 3
    },
    {
        // Question 13
        question: "Which of the following statements regarding the hours of work and overtime within the province of British Columbia is FALSE?",
        choices: ["The overtime rate is time and a half for all hours in excess of 40 in the week.",
        "Eight hours a day and 40 hours a week are the standard hours of work.",
        "The hours of work and overtime provisions apply to all levels of employees.",
        "If an employer terminates the employment of an employee, all wages and holiday entitlement must be paid within 48 hours after termination."],
        correct: 2
    },
    {
        // Question 14
        question: "Mr. Tully has been asked to analyze a building’s maintenance personnel and write up a job description for them. He has decided to use only the observational technique. Which of the following best describes the drawbacks Mr. Tully should be aware of before proceeding with this method?",
        choices: ["It can be time-consuming if a large number of employees need to be analyzed, leading to poor cost effectiveness.",
        "It is unable to detect the mental process required by the job and offers no insight into the human requirements needed to perform the job.",
        "It requires use of the Maintenance Occupational Classification (MOC) and can be difficult to implement.",
        "It can only be implemented by certified industrial engineers and, as a result, is extremely costly."],
        correct: 1
    },
    {
        // Question 15
        question: "Which of the following represents the correct order for the first four steps of the employee selection process?",
        choices: ["Job Application, Recruitment, Employment Interview, Selection Decision",
        "Job Application, Selection Decision, Recruitment, Employment Interview",
        "Recruitment, Employment Interview, Job Application, Selection Decision",
        "Recruitment, Job Application, Employment Interview, Selection Decision"],
        correct: 3
    },
    {
        // Question 16
        question: "In which of the following scenarios is the halo error MOST likely to occur?",
        choices: ["When an interviewer allows a judgment of one of the candidate’s attributes to influence judgments of other attributes",
        "When an average candidate appears very good when preceded by a poor candidate",
        "When an average candidate appears very bad when preceded by a good candidate",
        "When an interviewer fails to take notes"],
        correct: 0
    },
    {
        // Question 17
        question: "Which of the following statements regarding reference checks is FALSE?",
        choices: ["Generally, the only references that will provide the employer with valuable information are from former immediate supervisors.",
        "More than one reference should be checked as one reference may be slanted by personal perceptions.",
        "A reference check is done as a follow-up after an initial employment interview in order to confirm your impression of the candidate, either positive or negative.",
        "It is unethical for an employer to view an interviewee’s social media presence during the interview process."],
        correct: 3
    },
    {
        // Question 18
        question: "Which of the following statements regarding interview techniques is/are TRUE?",
        choices: ["Interview questions to candidates should be highly variable in order to get a good idea of each potential employee.",
        "Hasty judgments about candidates should be avoided.",
        "Notes should only be made after the interview so that the potential employee does not feel uncomfortable.",
        "All of the above statements are true."],
        correct: 1
    },
    {
        // Question 19
        question: "Which of the following BEST defines a job analysis?",
        choices: ["A job title plus information related to the job aspects",
        "The process of gathering information about job applicants for the purposes of evaluating and deciding who the organization should hire",
        "The process of developing policies and practices regarding the conditions of work",
        "The process of determining the nature of a job by collecting and organizing information about its various aspects"],
        correct: 3
    },
    {
        // Question 20
        question: "Which of the following statements regarding performance appraisals is TRUE?",
        choices: ["Appraisal interviews are more effective when a manager is critical of an employee because this helps the employee learn how to do it the right way, not the wrong way.",
        "Giving positive feedback first and negative feedback last is critical in a performance appraisal.",
        "During the appraisal interview, the manager should encourage a high level of participation from the employee.",
        "An employee should not be allowed to prepare for a performance appraisal because this will lead to more spontaneous discussion between the manager and the employee."],
        correct: 2
    }
];
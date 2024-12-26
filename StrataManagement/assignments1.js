const questions = [
    {
        // Question 1
        question: `Which of the following statements about the British Columbia civil court system would be considered accurate?
        <br>
        <br>A. The next step for a disappointed litigant in a small claims dispute would be to appeal the small claims court decision to the BC Court of Appeal.
        <br>B. A matter brought before the BC Court of Appeal will be settled by a decision delivered by the majority of the judges after they have listened again to all of the evidence.
        <br>C. A BC Supreme Court judge can only hear cases involving amounts over $35,000.
        <br>D. A litigant can bring their case no further than the BC Court of Appeal, unless leave to appeal to the Supreme Court of Canada is granted.`,
        choices: ["A, B, C, and D are accurate.",
            "B and C only",
            "C and D only",
            "D only"],
        correct: 3
    },
    {
        // Question 2
        question: "After buying her fourth car, Jessie decides that it is time to build a new garage. Although she is not a professional, she is handy with tools and decides to design and build the garage herself. Once the garage is built, Jessie invites her neighbour, Steve, to her house to view her new garage. Steve thinks that the garage is unsightly and demands that she tear it down. Jessie, of course, refuses. That night, Steve drives his car through the garage, destroying months of hard work. Jessie successfully sues Steve and obtains an award of $80,000 for damages. Steve feels that the decision of the court is unfair and refuses to pay it. Which of the following steps may Jessie take?",
        choices: ["Jessie can send a writ of execution to Steve and then personally seize and sell enough of his property to pay the judgment.",
            "Jessie can apply to have a garnishing order served on Steve's employer, ordering the employer to pay all of his wages into the court. She can then apply to have all of the money paid out to her.",
            "Jessie can register her judgment in the land title office against Steve's title and apply to the land title registrar for a judicial sale of Steve's property; after the payment of prior charges on title, the proceeds will go towards paying the judgment.",
            "Jessie may do none of the above."],
        correct: 3
    },
    {
        // Question 3
        question: "Which of the following statements concerning disclosure statements in British Columbia is FALSE?",
        choices: [" A disclosure statement must be provided by a developer to a buyer where an offer of sale or lease relates to a time share interest in a development unit.",
            "A disclosure statement must indicate that the purchaser has the right to rescind the purchase agreement by serving written notice of the rescission on the developer.",
            "A disclosure statement must be in the form and include the content required by the BC Financial Services Authority.",
            "One of the supporting documents which must accompany the disclosure statement is a certificate from a lawyer who is a member of the Law Society of British Columbia confirming that a true copy of the disclosure statement will be delivered to the prospective purchaser or lessee."],
        correct: 3
    },
    {
        // Question 4
        question: `Elaine obtained a judgment against Jerry for $35,000. Several months have passed and Jerry continues to refuse to pay Elaine anything. Which of the following steps is open to Elaine to enforce the judgment?<br>
            <br>A. Elaine may register the judgment as a charge on Jerry's land; this would prevent any sale of it from completing because title to the property could not be transferred until the judgment was satisfied.
            <br>B. Elaine may apply to have a garnishing order served on Jerry's employer, ordering the employer to pay all of Jerry's wages into court; Elaine could then apply to have that money paid out to her.
            <br>C. Elaine may send a writ of execution to Jerry and then personally seize and sell enough of his assets to satisfy the judgment.
            <br>D. Elaine may register her judgment in the land title office and apply to the court for a judicial sale of Jerry's property, the proceeds of which would go towards paying off the judgment, following payment of prior charges.`,
        choices: ["All of the above",
                 "A and B",
                 "C and D",
                 "D only"],
        correct: 3
    },
    {
        // Question 5
        question: "Donna wishes to obtain her brokerage licence and intends to also be the managing broker of the brokerage. Once she obtains her managing brokers licence, which of the following rights and responsibilities does she have?",
        choices: ["Donna may employ representatives to work for her brokerage. ",
            "Each year, Donna must file an accountant's report specifying that she has properly maintained the brokerage's books, accounts and other records.",
            "The real estate service categories that Donna is permitted to provide will determine the services that her employee representatives are permitted to provide.",
            "Donna will be responsible for the acts of the brokerage's representatives in carrying out their duties as representatives."],
        correct: 0
    },
    {
        // Question 6
        question: `Which of the following statements is TRUE?<br>
            <br>A. The provincial government has exclusive responsibility for such areas as the administration of justice within the province, criminal matters, and education.
            <br>B. The federal government has exclusive responsibility over marriage and divorce, postal services and civil rights.
            <br>C. The residual power to legislate over areas not specifically covered in the constitution is left with the municipal governments.
            <br>D. Where the common law does not provide an answer to a legal question, the courts must then refer to statute law for guidance.`,
        choices: ["A, B, and C only",
            "A and B only",
            "All of the statements are true.",
            "None of the statements are true."],
        correct: 3
    },
    {
        // Question 7
        question: "An examination for discovery:",
        choices: ["usually takes place before the notice of civil claim is filed so that a person can ascertain whether a cause of action exists.",
            "may be a major factor in the settlement of a dispute.",
            "takes place before a judge, with all parties giving evidence under oath.",
            "is the process under which each party is required to provide all relevant documents to the other party."],
        correct: 1
    },
    {
        // Question 8
        question: "Abe, a managing broker, recently hired Vern as a strata management representative for his real estate brokerage. As Abe is wary of incurring any liability for the actions of his representatives, he insists that all of the employment contracts signed by his employees include a condition that Abe is not responsible for their conduct as representatives. An angry client has just filed a legal action against Vern for negligence. What will happen to Abe?",
        choices: ["He is safe because he has effectively contracted out of any liability.",
            "He is exempt from liability as long as he was not aware of the negligence and did not participate in it.",
            "In addition to his brokerage being vicariously liable for the negligence committed by his employee, Abe may also be disciplined by the BC Financial Services Authority in connection with Vern's actions.",
            "None of the above statements are true."],
        correct: 2
    },
    {
        // Question 9
        question: `Under the Real Estate Services Act, disciplinary action against a licensee normally begins with an investigation by the BC Financial Services Authority ("BCFSA"). Which of the following statements concerning an investigation to determine if disciplinary action should be taken against a licensee are TRUE?<br>
            <br>A.  BCFSA may conduct an investigation to determine whether a licensee may have committed professional misconduct or conduct unbecoming a licensee.
            <br>B.  BCFSA can conduct an investigation only after receiving a complaint.
            <br>C.  At any time during business hours, BCFSA can inspect the records that are located on the business premises of a licensee.
            <br>D.  A misleading statement in an accountant's report is not enough to trigger an investigation.`,
        choices: ["A, B, and C only",
            "A and C only",
            "B and D only",
        "All of the statements are true."],
        correct: 1
    },
    {
        // Question 10
        question: "Xavier has successfully sued Yolanda in the Supreme Court of British Columbia. The court has ordered Yolanda to pay court costs. Which of the following statements is FALSE?",
        choices: ["Court costs are always awarded against unsuccessful litigants like Yolanda.",
            "Court costs will only cover some of Xavier's legal fees.",
            "If the British Columbia Court of Appeal allows an appeal by Yolanda, Xavier might have to pay the court costs of both courts. ",
        "In general, the possibility of being ordered to pay court costs helps to discourage people from bringing weak cases before the courts."],
        correct: 0
    },
    {
        // Question 11
        question: "Joshua wishes to operate a corner store out of the basement of his Richmond home. However, he is not sure if this would be against the law, nor is he sure of who would be responsible for laws governing this situation. When Joshua questions his lawyer, she makes the following correct response.",
        choices: ["The matter would be governed by a zoning bylaw created by municipal authorities who derive their power from the federal government.",
            "The matter is governed by the law dealing with equitable rights, which puts fairness above all else.",
            "Joshua must deal with municipal authorities, a third level of government which derives its powers from the provincial government.",
        "Joshua should go ahead with his plans, as ignorance of the law is a valid defence to any legal action."],
        correct: 2
    },
    {
        // Question 12
        question: "Which of the following statements is TRUE?",
        choices: ["An appeal of the BC Financial Services Authority's (BCFSA's) decision to discipline a licensee will be heard by the Commercial Appeals Commission.",
            "An appeal of BCFSA's decision to discipline a licensee will be heard by the British Columbia Court of Appeal.",
            "An appeal of the BCFSA's decision to discipline a licensee will be heard by the Financial Services Tribunal.",
        "An appeal of BCFSA's decision to discipline a licensee will be heard by the Real Estate Foundation."],
        correct: 2
    }, 
    {
        // Question 13
        question: "Which of the following is a purpose of the Real Estate Services Act (\"RESA\")?",
        choices: ["The RESA aims to ensure that real estate licensees are reasonably competent in providing real estate services.",
            "The RESA aims to ensure that real estate licensees are of good reputation. ",
            "The RESA aims to discipline and, where necessary, re-educate real estate licensees if they breach the provisions of the Act.",
        "All of the above are goals of RESA."],
        correct: 3
    },
    {
        // Question 14
        question: "During which one of the stages of the trial process does the plaintiff (or their counsel) examine the opposing party under oath?",
        choices: ["Pleadings",
            "Discovery",
            "Judgment",
        "Execution"],
        correct: 1
    },
    {
        // Question 15
        question: "The Real Estate Services Act requires a brokerage providing strata management services to keep copies of certain documents. Which of the following is NOT such a document?",
        choices: ["The written service agreement between the strata corporation and the brokerage",
            "Invoices for expenditures made on behalf of the strata corporation",
            "Monthly financial statements of the strata corporation's trust accounts",
        "A listing of all the strata corporation members' telephone contact numbers"],
        correct: 3
    },
    {
        // Question 16
        question: "Where a licensee receives a deposit on account of a trade in real estate under the Real Estate Services Act and puts it into a trust account, it may only be withdrawn before completion for which one of the following reasons?",
        choices: ["To pay it to the seller or the party for whom the licensee is acting",
            "To pay the money into court under section 33 of the Real Estate Services Act",
            "To pay the brokerage to cover the amount of the commission once the offer has been accepted and any conditions precedent removed",
        "To cover any expenses incurred on behalf of the brokerage's principal"],
        correct: 1
    },
    {
        // Question 17
        question: "Which of the following transactions involving a developer of residential subdivisions located in British Columbia does NOT require a disclosure statement under the Real Estate Development Marketing Act?",
        choices: ["The strata lots in a ten-unit strata building located in a municipality are being sold individually.",
            "Fifteen lots of 35 hectares each in a subdivision located outside a municipality are being sold individually.",
            "All 5 strata lots of a development property located outside a municipality are being sold in a single transaction.",
        "A bank intends to individually resell to the residential market 20 of 25 lots in a subdivision after repossessing the lots when the developer filed in bankruptcy."],
        correct: 2
    },
    {
        // Question 18
        question: "Which of the following is NOT a possible meaning of the term \"common law\"?",
        choices: ["The law created by the courts, as opposed to statute law",
            "The principles derived from the common law courts in England, as opposed to the principles derived from the courts of chancery",
            "The laws created by the federal government in accordance with its power under the Constitution",
        "The system of law which relies upon the principle of stare decisis for its development"],
        correct: 2
    },
    {
        // Question 19
        question: "When commencing a lawsuit in Small Claims Court, the claimant may originate the action in the jurisdiction where:",
        choices: ["either the claimant resides or the defendant resides.",
            "the claimant resides.",
            "either the cause of action arose or the defendant resides.",
        "either the claimant resides or the cause of action arose."],
        correct: 2
    },
    {
        // Question 20
        question: "Which of the following would NOT qualify as a real estate service that could be subject to the requirements of the Real Estate Services Act (\"RESA\")?",
        choices: ["Finding real estate for a party to acquire",
            "Collecting rents or security deposits for the use of real estate",
            "Collecting strata fees on behalf of a strata corporation",
        "All of the above could be real estate services and subject to the requirements of the RESA."],
        correct: 3
    }
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

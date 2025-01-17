const questions = [
    {
        // Question 1
        question: "John has a fixed term tenancy in Bill's building that expires on August 31st. Previously, the tenancy was intended to continue as a periodic tenancy after the expiry of the fixed term. However, Bill has recently decided that he wants to renovate the suite and that it must be vacated in order for him to do so. John pays his rent on the first of the month. On March 20th, Bill obtains an Order from the Residential Tenancy Branch, approving Bill's application to end John's tenancy for renovations. What is the earliest possible date on which the Residential Tenancy Branch may order John to vacate?",
        choices: ["March 31<sup>st</sup>",
            "April 30<sup>th</sup>",
            "July 31<sup>st</sup>",
            "August 31<sup>st</sup>"],
        correct: 3
    },
    {
        // Question 2
        question: "A tenant has been renting a basement apartment from the landlord for over two years on a regular month to month periodic tenancy, without any rent increases. The tenant has received three months' written notice from his landlord that the rent will be increased from $1,600 to $1,625 per month. The tenant knows that similar basement suites in the neighbourhood are renting for only $1,500, and they think that the rent increase is the landlord's way of trying to get them to move out of the house. They are contemplating terminating the tenancy in order to find something cheaper, but before giving their notice to the landlord, they ask for your opinion. Assume that the government has not implemented a cap on rent increases in this scenario. You correctly advise them that:",
        choices: ["for periodic tenancies, the Residential Tenancy Act requires four months' written notice for a rent increase. Accordingly, the rent increase is not effective.",
            "provided the increase is not more than the change in the Consumer Price Index (CPI) over the past year, the increase is allowable, and the tenant has no right to dispute the increase.",
            "in periodic tenancies, the Residential Tenancy Act requires that the notice for rent increases be reasonable. As such, one month's notice would likely have been sufficient.",
            "the Residential Tenancy Act requires all rent increases to be justifiable. Because similar suites in the neighbourhood rent for significantly less, this rent increase will likely not be enforceable."],
        correct: 1
    },
    {
        // Question 3
        question: "Which of the following statements concerning the difference between a lease and a licence is FALSE?",
        choices: ["A lease is both a contract and an interest in land, whereas a licence is only a contract.",
            "Both leases and licences always confer an exclusive right to possession of the premises.",
            "A lease runs with the land and can bind third parties, whereas a licence is only binding on the parties to the contract.",
            "While licences and leases may appear to be similar, the legal rights involved are very different."],
        correct: 1
    },
    {
        // Question 4
        question: `Dorinda rents a shop in a building owned by Muhammad. She operates a fabric art studio and sells crafts there. Which of the following provisions of Dorinda's lease would be enforceable?<br>
            <br>A. The rent is $1,000 per month and the damage deposit is $3,000.
            <br>B. Dorinda agrees not to assign the lease.
            <br>C. The landlord may exercise the remedy of distress.
            <br>D. The lease term expires at the end of one year, and no notice of termination is required.`,
        choices: ["A, C, and D only",
            "A, B, and D only",
            "B and D only",
            "All of the above provisions are enforceable."],
        correct: 3
    },
    {
        // Question 5
        question: "Which of the following is an allowable rent increase under the Residential Tenancy Act? (Assume $50 is an allowable increase according to the Consumer Price Index and there are no caps on rent increases implemented by the government)",
        choices: ["On July 1, Linus lawfully raises Lucy's rent from $1,000 to $1,050 per month. Five months later, Lucy moves out and Linus rents to Charlie for $1,050. Two months later, Linus gives notice to Charlie of another $50 per month increase. Charlie objects to the increase.",
            "Linus raises Lucy's rent by $50 per month; seven months later, he loses his job and gives Lucy three months' written notice of a further $50 per month increase. Lucy objects to the increase.",
            "On July 1, Linus raises Lucy's rent from $1,000 to $1,050 per month. Two months later, Lucy is transferred to Campbell River and Linus re-rents to Charlie, but at a monthly rate of $1,200. Charlie knows Lucy only paid $1,050 and objects to the increase.",
            "Lucy has been paying $1,000 per month for the last three months, prior to which she paid $950. Her landlord, Linus, has sold the premises to Charlie, who immediately gives Lucy notice of a rent increase to $1,050 per month effective in two months. Lucy objects to the increase."],
        correct: 2
    },
    {
        // Question 6
        question: "Shannon rents a basement suite from Graham on a month-to-month periodic tenancy. Eight months ago the rent was lawfully raised to $750. Graham has recently agreed to sell his house to Robert, and in the agreement Robert has stipulated that he intends to occupy the basement area. Robert has requested in writing that Graham give the tenant a notice of the end of the tenancy agreement. Which of the following statements is FALSE?",
        choices: ["Graham must provide at least three months' notice to Shannon regarding the end of the tenancy, but he cannot do this until all conditions precedent in the contract have been satisfied.",
            "Graham may provide notice to Shannon regarding ending the tenancy. However, the effective date can be no earlier than 12 months from the last rental increase.",
            "If Shannon can prove that instead of occupying the basement after his purchase, Robert rented it out to an unrelated tenant, she may be entitled to compensation from Robert in the amount of 12 months' rent.",
            "On or before the effective date of the notice, Graham must provide Shannon with the equivalent of $750 as compensation."],
        correct: 1
    },
    {
        // Question 7
        question: `Alex leased a shop from Geoffrey for a term of 48 months at an expressed rent of $6,000 per month, commencing January 1, 2013 and terminating on December 31, 2016. On January 1, 2017, Alex paid Geoffrey $6,000, which Geoffrey accepted. On the first day of the next 8 months Alex paid the rent to Geoffrey, who continued to accept it. On September 20, Geoffrey had an offer from Peter to lease Alex's shop for $6,800 per month. Geoffrey immediately faxed notice to terminate to Alex, effective October 20, 2017. Which of the following is TRUE?<br>
            <br>A. Because this is a commercial periodic tenancy, either party can terminate.
            <br>B. On January 1, 2017, a new periodic lease was created by the actions of Geoffrey and Alex.
            <br>C. Geoffrey is entitled to terminate the lease because Alex did not increase his rental payments when the lease was renewed.
            <br>D. The notice period will be whatever is reasonable in the circumstances.`,
        choices: ["A, B, and D only",
            "A, B, and C only",
            "C and D only",
            "All of the statements are true."],
        correct: 0
    },
    {
        // Question 8
        question: `A commercial lease contains the following clause:<br><br>

<i>The Landlord shall have the right at all reasonable times to inspect or to authorize in writing an agent to inspect the Premises.</i><br><br>

Which one of the following correctly describes the reason for including such a clause?`,
        choices: ["The clause allows the landlord to avoid the notice provisions of the Residential Tenancy Act and ensures access to the property at any time.",
            "Without the clause, a lease would grant the tenant exclusive possession of the property, with a legal right to exclude even the landlord from the property.",
            "The clause is included to allow a real estate agent to inspect the premises for the purposes of writing a listing contract.",
            "The clause allows a hotel landlord to enter a hotel tenant's room without the tenant's permission to provide cleaning services."],
        correct: 1
    },
    {
        // Question 9
        question: "Tim rents an apartment from Larry under a periodic tenancy. Which of the following terms in their tenancy agreement would contradict a provision of the <i>Residential Tenancy Act</i> (\"RTA\")?",
        choices: ["Tim agrees to assume the responsibility to repair all wear and tear to the property when he moves out.",
            "Larry claims the right to distrain for rent that remains unpaid for 15 days after the date it is due.",
            "Tim agrees to vacate the premises upon one month's notice should Larry require the house for personal occupation.",
            "All of the above terms contradict a provision of the <i>Residential Tenancy Act</i>."],
        correct: 3
    },
    {
        // Question 10
        question: "Lucas, the owner of a movie theatre, agrees to let Spielberg sell popcorn, candy, and soft drinks from a small room opening off of the lobby. The oral agreement between Lucas and Spielberg provided that Spielberg may only use the room while there is a movie in progress and that for this right, Spielberg will pay a monthly fee of $500. Which of the following statement is/are TRUE?",
        choices: ["The agreement between Lucas and Spielberg is probably a licence because Spielberg is not given exclusive possession of the room by Lucas.",
            "The agreement between Lucas and Spielberg, if a licence, is not enforceable against a bona fide purchaser of the theatre.",
            "The agreement between Lucas and Spielberg should be in writing and signed by both parties to ensure that it is enforceable.",
            "All of the above"],
        correct: 3
    },
    {
        // Question 11
        question: "Laura, a commercial tenant, may sublet her lease:",
        choices: ["unless subletting is specifically prohibited in the lease.",
            "provided the landlord approves of the new tenant.",
            "even if subletting is prohibited in the lease.",
            "only where the term of the lease is greater than one year."],
        correct: 0
    },
    {
        // Question 12
        question: "Which of the following statements describe a similarity between a lease and a licence to occupy?",
        choices: ["Both are contractual agreements.",
            "Both convey exclusive possession.",
            "Both create an interest in land.",
            "Both are automatically binding on subsequent owners of the property."],
        correct: 0
    },
    {
        // Question 13
        question: "At the end of a fixed term residential tenancy agreement, if the tenancy agreement does not require the tenant to vacate the premises at the end of the term, and the landlord and tenant do not come to a new agreement before the expiry date:",
        choices: ["the tenancy is presumed to end on that date.",
            "the landlord and tenant must sign a new tenancy agreement.",
            "the tenancy is presumed to have been renewed for another fixed term of the same length if the tenant continues to occupy the premises.",
            "the tenancy is presumed to have been renewed on a month-to-month basis if the tenant continues to occupy the premises."],
        correct: 3
    },
    {
        // Question 14
        question: "Kate moved into a condo owned by Leroy. Leroy initially organized a meeting with Kate on July 15<sup>th</sup>, 2019 to fill out the condition inspection report. However, Kate could not attend, and Leroy rescheduled for July 17<sup>th</sup>. Kate cancelled again and the inspection eventually took place on July 20<sup>th</sup>. The tenancy began on August 1<sup>st</sup> as a one-year fixed term tenancy. Nearing the end of the tenancy, Kate decided that she would not like to renew the agreement; therefore, Kate moved out of the premises on July 31<sup>st</sup>, 2020. On August 5<sup>th</sup>, 2020, Kate met with Leroy to complete the condition inspection report. They determined that there was no damage done and Leroy would return Kate's security deposit to the forwarding address Kate provided that day. Which of the following statements is TRUE?",
        choices: ["The inspection report is invalid because it did not contain photographs of the apartment.",
            "The inspection report is invalid because Leroy was not obligated to provide a third opportunity to fill out a condition inspection report with Kate.",
            "Leroy must return Kate's security deposit on or before August 15<sup>th</sup>, 2020.",
            "Leroy must return Kate's security deposit on or before August 20<sup>th</sup>, 2020."],
        correct: 3
    },
    {
        // Question 15
        question: "Which of the following would likely NOT constitute a breach of a residential tenant's right to quiet enjoyment?",
        choices: ["Performing an elevator repair, which causes noise and inconvenience",
            "Entering the rental premises weekly to inspect the unit",
            "Failure of the landlord to pay bills resulting in a shut-off of electricity",
            "Forbidding the tenant from having guests over, without cause"],
        correct: 0
    },
    {
        // Question 16
        question: "Which of the following is a valid reason for a residential landlord to serve a 10 Day Notice to End Tenancy?",
        choices: ["The tenant has not paid the security deposit within 30 days of its due date.",
            "The tenant has not paid rent.",
            "The tenant has been repeatedly late paying rent in the past.",
            "The tenant has caused extraordinary damage to the leased property."],
        correct: 1
    },
    {
        // Question 17
        question: "Hillary rents an apartment in a strata property on a month-to-month basis from Chelsea. Hillary paid $650 as a security deposit, $650 as a pet deposit, and $25 as a key fob deposit. Her rent is $1,300 per month. Chelsea gives Hillary a valid notice to end the tenancy under section 49 of the Residential Tenancy Act (landlord's use of property). Provided that Chelsea does not intend to make any claims against any of the deposits, how much is Chelsea obligated to provide to Hillary as a result of ending the tenancy?",
        choices: ["$650",
            "$1,300",
            "$1,325",
            "$2,625"],
        correct: 3
    },
    {
        // Question 18
        question: "Leopold is the owner of a commercial building in Delta, British Columbia. Leopold's nephew, Harry, is an aspiring artist who needs space to produce and store his sculptures. Leopold has let Harry use the building for this purpose on an informal basis, but Leopold and Harry have not entered into a contract or lease agreement and Harry is paying no rent. What is the proper name for a tenancy of this sort?",
        choices: ["Periodic tenancy",
            "Fixed term tenancy",
            "Occupation licence",
            "Tenancy at will"],
        correct: 3
    },
    {
        // Question 19
        question: "In a commercial tenancy, a tenant has the duty to:",
        choices: ["deliver the premises at the end of the lease term exactly as they found them.",
            "make structural repairs to the leased building during the lease term.",
            "repair the \"wear and tear\" that has accrued to the building during the lease term.",
            "perform the odd jobs required to maintain the property in a reasonable state."],
        correct: 3
    },
    {
        // Question 20
        question: "The type of tenancy that automatically arises on the last day of a tenancy for a further term of the same length is referred to as a:",
        choices: ["tenancy at will.",
            "periodic tenancy.",
            "commercial tenancy.",
            "tenancy at sufferance."],
        correct: 1
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
        }
        */
    /*,*/
    // add more questions here...
];
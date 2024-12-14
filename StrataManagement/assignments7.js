const questions = [
    {
        // Question 1
        question: "Leroy Jenkins is the owner developer of a new strata complex. He has already sold the first strata lot title, but the first annual general meeting has not yet been held. Leroy now wishes to enter into a service agreement with one of the following strata management brokers. Assuming the developer has allocated the approval of funds for management services into the disclosure statement, which of the following candidates can Leroy contract with without first obtaining unanimous consent from the strata corporation?",
        choices: ["Himself",
        "Broken Down Bob’s Brokerage, a strata management brokerage that Leroy found in the yellow pages and has no previous experience with",
        "Reliable Rachel’s Strata Services, a strata management brokerage operated by Leroy’s close friend and occasional business partner, Rachel, whom Leroy knows to be honest and diligent",
        "Jim, an experienced caretaker and handyman, who, despite being unlicensed, is completely qualified for the job"],
        correct: 1
    },
    {
        // Question 2
        question: `A clause in a strata management service agreement states:<br>

<br><i>The strata corporation may cancel the contract at any time, free of penalty. The brokerage may cancel the contract with 3 months’ notice and a penalty fee of $1,000.</i>
<br>
<br>Assuming the strata corporation has received the appropriate approvals, which of the following statements is/are TRUE?
<br>
<br>A. The strata corporation may terminate the contract without notice at any time, without cause and without incurring any penalty.
<br>B. The brokerage may terminate the contract only by giving at least 3 months’ notice, and the $1,000 penalty is not enforceable.
<br>C. The brokerage may terminate the contract by giving 2 months’ notice, but the $1,000 penalty will be enforced against it.
<br>D. Neither party may terminate the contract before its expiry date.`,
        choices: ["A and B only",
        "A and C only",
        "D only",
        "None of the statements are true."],
        correct: 3
    },
    {
        // Question 3
        question: "Which of the following statements regarding remuneration under a strata management services agreement is FALSE?",
        choices: ["A strata manager may never receive remuneration for recommending a mortgage broker, lawyer, notary, or home inspector to the client strata corporation.",
        "The strata manager’s fiduciary duty to the strata corporation means that they may only receive compensation for services performed with the consent of the client.",
        "Remuneration is often a combination of a monthly fee plus other amounts triggered by the performance of certain tasks.",
        "If a strata manager expects to receive any benefits or payments from a third party as a result of making purchases on behalf of the strata corporation, he or she must disclose this to the strata corporation."],
        correct: 0
    },
    {
        // Question 4
        question: `Which of the following statements concerning service contracts that a strata manager might arrange on behalf of a client strata corporation is/are TRUE?<br>
<br>
<br>A. The terms and conditions of a service contract should be very clear so that no ambiguity results.
<br>B. Contracting with an insured and licensed service provider is a method strata managers can employ to shield themselves from liability that they might incur if they tried to provide the same service themselves.
<br>C. It is recommended that strata managers arrange for long-term contracts, lasting for at least two years, with service providers, as this will ensure quality service and competitive pricing.
<br>D. Strata managers should never arrange for service contracts, as doing so is the jurisdiction of the strata council.`,
        choices: ["A only",
        "A and B only",
        "A, B, and C only",
        "All of the statements are true."],
        correct: 1
    },
    {
        // Question 5
        question: "The responsibilities of a strata manager are governed largely by the strata management service agreement. Which of the following best describes a strata management service agreement?",
        choices: ["A contract between the strata manager and the client that outlines the services provided to or on behalf of the client",
        "A written or occasionally oral contract between the brokerage and the strata manager that outlines the services provided to or on behalf of the client",
        "A contract between the brokerage and the client that outlines the services provided to or on behalf of the client",
        "A contract between the strata corporation and the strata council that outlines the services provided to or on behalf of the client"],
        correct: 2
    },
    {
        // Question 6
        question: `Consider the following clause contained in a strata management service agreement:
        <br>
<br><i>The agent hereby covenants and agrees to receive, record and deposit all revenues and assessments due to the Strata Corporation diligently and in a timely fashion.</i>
<br>
<br>Which of the following best describes the responsibility imposed by the above clause?`,
        choices: ["The individual strata manager’s fiduciary duty owed to their client, the strata council",
        "The strata corporation’s contractual obligation to handle their revenue diligently",
        "The brokerage’s duty owed to the strata corporation to properly handle certain financial services",
        "The strata manager’s contractual duty to the brokerage to perform their terms of employment without negligence"],
        correct: 2
    },
    {
        // Question 7
        question: "Which of the following would NOT be a clause typically found in a strata management service agreement?",
        choices: ["The strata manager agrees to list strata units for sale on the Multiple Listing Service.",
        "The strata manager agrees to provide the strata council with monthly financial accounting records.",
        "The strata manager agrees to coordinate with contractors and service providers to perform maintenance as required.",
        "The strata corporation agrees to provide the strata manager with a copy of the bylaws and rules."],
        correct: 0
    },
    {
        // Question 8
        question: `Consider the following clause contained in a strata management service agreement:
<br>
<br><i>The Strata Corporation covenants and agrees to indemnify and save harmless the Brokerage from all claims, damages, costs, or liabilities arising out of any acts done by the Brokerage pursuant to the instructions received and actions taken in the fulfilment of the services required to be provided by the Brokerage.</i>
<br>
<br>Such a clause is an example of:`,
        choices: ["a clause that requires the strata corporation to cover the costs of litigation against the brokerage for actions taken in fulfillment of the service agreement.",
        "a clause that would rarely stand up in court.",
        "a clause that must be included in order to meet the minimum requirements of the <i>Real Estate Services Act</i>",
        "a clause that absolves the strata manager from all legal responsibility."],
        correct: 0
    },
    {
        // Question 9
        question: "Joe is Mario’s agent. Joe has acted beyond his authority in agreeing to sell Mario’s horse to Giuseppe for $1,200. The following statements deal with the legal consequences of ratification. Which one of them is TRUE?",
        choices: ["If Mario chooses not to ratify Joe’s action, he could sue Joe for breach of warranty of authority.",
        "If Mario chooses not to ratify Joe’s action, Giuseppe could sue Joe for breach of warranty of authority if Giuseppe suffers any damages.",
        "Even if Mario ratifies Joe’s action, Giuseppe can sue Joe for breach of contract.",
        "If Mario chooses not to ratify Joe’s action, Joe can sue Mario for breach of the agency contract."],
        correct: 1
    },
    {
        // Question 10
        question: "A seller agrees to pay her agent a commission if the agent can sell the seller’s motorcycle for $10,000. Although the seller never mentioned it specifically, the agent found it necessary to allow potential buyers to test drive the motorcycle before agreeing to a sale. What type of authority does the agent have to permit this?",
        choices: ["Implied authority",
        "Constructive authority",
        "Express authority",
        "Apparent authority"],
        correct: 0
    },
    {
        // Question 11
        question: "Corky is a new licensee who has just signed his first service agreement. Anxious to refresh his memory of his duties as an agent, he tries to recall his pre-licensing studies. Which one of the following is NOT one of the duties of an agent which Corky learned of in his course?",
        choices: ["The duty to make full disclosure of all material facts",
        "The duty not to act for more than one principal without disclosure and consent",
        "The duty to indemnify the principal",
        "The duty to follow lawful instructions from the principal"],
        correct: 2
    },
    {
        // Question 12
        question: "The functions of a strata management licensee typically include all of the following EXCEPT:",
        choices: ["administration of the common property of the strata corporation.",
        "administration of common facilities belonging to the strata corporation.",
        "signing service agreements on behalf of the brokerage with strata corporations the brokerage represents.",
        "marketing and selling strata units on behalf of the strata corporation."],
        correct: 3
    },
    {
        // Question 13
        question: "Which of the following statements about the common law of agency is TRUE?",
        choices: ["A person of unsound mind may still act as an agent.",
        "To be enforceable, an agency contract must be written.",
        "Anyone acting as an agent in British Columbia in any capacity must be licensed.",
        "A minor acting as an agent may bind a principal to a contract."],
        correct: 3
    },
    {
        // Question 14
        question: "Which of the following is NOT a common method of establishing an agency relationship?",
        choices: ["Ratification by the principal",
        "Express creation through contract",
        "Competently exceeding the authority given under an agency contract",
        "As a result of the doctrine of estoppel"],
        correct: 2
    },
    {
        // Question 15
        question: "Which of the following is NOT required to establish an agency relationship by estoppel?",
        choices: ["A written agency contract between the principal and agent",
        "Reliance by the third party on a representation by the principal",
        "A representation by the principal suggesting the existence of an agency relationship with the agent",
        "An alteration of the third party’s position resulting from reliance on the principal’s representation"],
        correct: 0
    },
    {
        // Question 16
        question: "Charlie is a strata manager who has diligently prepared the minutes of all strata council meetings. However, Charlie overlooked the fact that the service agreement to which he is bound requires him to distribute these minutes to all of the owners within one week of a meeting. Lorenzo, an owner, angrily leaves a voice message on Charlie’s voicemail two weeks after the most recent meeting, claiming that he has not received a copy of the minutes and threatening to sue Charlie for breach of contract. Which of the following actions could Charlie take to BEST avoid a litigation flashpoint?",
        choices: ["Ignore Lorenzo’s angry advances and send him the minutes when he has the time.",
        "Apologize for the mistake and promise to send Lorenzo the minutes promptly.",
        "Call Lorenzo back and demand an apology for the angry voice message.",
        "Consult his strata management contract to assess whether he would be protected by an indemnity clause"],
        correct: 1
    },
    {
        // Question 17
        question: "Happy Homes Strata Management Ltd. (“Happy Homes”) has had a difficult relationship with the strata corporation at Olympic Gardens, a strata property complex. Given the deteriorated state of the professional relationship, Happy Homes wishes to cancel an existing strata management contract with Olympic Gardens. The terms of the contract are silent on cancellation requirements. How can Happy Homes cancel the existing strata management contract?",
        choices: ["Pursuant to the <em>Strata Property Act</em>, strata management contracts can be cancelled if a prescribed amount is paid as a penalty.",
        "Happy Homes may only cancel the strata management contract before the expiration date if it reaches a mutual agreement with the strata corporation at Olympic Gardens on the termination of the contract.",
        "Pursuant to the <em>Strata Property Act</em>, strata management contracts can only be cancelled if cancellation is expressly provided for in the contract. As the contract in this case is silent on this issue, Happy Homes cannot cancel.",
        "Happy Homes may cancel the strata management contract by providing the strata corporation with 2 months’ notice of cancellation."],
        correct: 3
    },
    {
        // Question 18
        question: "Lisa is a sales representative. Most recently, she worked for a boutique soda company and specialized in soliciting orders from gourmet grocers. Unfortunately, due to a downturn in the economy, Lisa had her employment with the soda company terminated. Lisa is disappointed and, more than anything, is frustrated that her rival sales representative, Angelo, was not terminated. Lisa is convinced that if she solicits another purchase order, she could prove her worth to the company and get her old job back. Motivated, Lisa visits a grocery store which she had previously dealt with and which she knows was not notified of her termination. After a well delivered sales pitch, Lisa is able to obtain a purchase order from the grocer. Which of the following statements, related to this scenario, is TRUE?",
        choices: ["Because Lisa continued to possess actual authority to act, the soda company will be bound by the terms of the purchase order.",
        "Because of her actions, Lisa may be liable to the grocer for breach of warranty of authority.",
        "Because Lisa had already been terminated, she had no authority to enter the purchase order contract and therefore the soda company cannot be bound by the contract.",
        "The soda company will likely be liable to the grocer for breach of warranty of authority for failing to notify the grocer of Lisa’s termination."],
        correct: 1
    },
    {
        // Question 19
        question: "Taylor is a licensee acting for Louis, a seller. Louis knew of a material latent defect and told Taylor about it. However, Louis also told Taylor not to disclose the defect to potential buyers. When Sanjay, a prospective buyer, inquired about the existence of any defects, Taylor followed Louis’ instructions and advised Sanjay that there were none. Satisfied, Sanjay agreed to purchase the property. Upon inspection, however, the material latent defect was discovered. Sanjay is infuriated and has contacted his lawyer with the intention of suing. Who is potentially liable in this situation?",
        choices: ["Louis and Taylor are both potentially liable.",
        "Only Louis can be liable, as Taylor was authorized to make the misrepresentation.",
        "Only Taylor can be liable, as only Taylor actually made a misrepresentation.",
        "Neither Louis nor Taylor can be liable."],
        correct: 0
    },
    {
        // Question 20
        question: "Which of the following is TRUE regarding when a strata corporation enters into a strata management agreement with a real estate brokerage?",
        choices: ["The designated strata manager is the sole agent and the strata corporation is the sole principal.",
        "The brokerage is the sole agent and the strata council is the sole principal.",
        "The brokerage and all of its licensees are the agents and the strata corporation is the sole principal.",
        "The designated strata manager is the sole agent and the strata council is the sole principal."],
        correct: 2
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
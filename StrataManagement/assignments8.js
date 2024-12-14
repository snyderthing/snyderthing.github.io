const questions = [
    {
        // Question 1
        question: "Which of the following is NOT a recommended criterion for determining the success of a negotiation?",
        choices: ["The amount of effort put into the negotiation relative to the negotiation’s importance",
        "The overall level of satisfaction achieved by the two parties due to the negotiation’s outcome",
        "The financial distance created between the negotiated agreement and the initial offer",
        "The willingness of the two parties to deal with each other in the future"],
        correct: 2
    },
    {
        // Question 2
        question: "Preparation is crucial to any negotiation. Three of the following statements regarding preparing for a negotiation are true. Which one is FALSE?",
        choices: ["By preparing a list of all the potential issues that could come up during negotiations, the likelihood of developing a creative solution is increased.",
        "During preparations, if you can understand the interests of the opposing party and appreciate why they are seeking what they are, your negotiating position will be strengthened.",
        "An essential step during preparation is to determine possible alternatives to a negotiated solution so that you will know when it is appropriate to walk away.",
        "By prioritizing your issues in order of importance before negotiations take place, you can successfully achieve your goal: a zero-sum game."],
        correct: 3
    },
    {
        // Question 3
        question: `Which option best completes the following sentence?
<br>
<br><em>"Knowing your resistance point in a negotiation is important because…"</em>`,
        choices: ["it can remove some of the negotiator’s emotional tendencies.",
        "it helps avoid dirty tactics by the opposing party.",
        "it improves flexibility and muscle strength.",
        "it combines distributive and integrative perspectives."],
        correct: 0
    },
    {
        // Question 4
        question: `Good negotiators will attempt to develop creative ways to exchange resources so that both parties benefit from the agreement. Which of the following is/are FALSE regarding the facilitation of this exchanging of resources?
<br>
<br>A. By focusing on the parties’ underlying interests, negotiators can avoid becoming entrenched in, and unwilling to move from, their positions.
<br>B. By making multiple or successive concessions, a negotiator may be inadvertently establishing a climate whereby the opposing side is LESS likely to participate in the negotiations.
<br>C. “Packaging” issues together is not advisable, as a negotiator is left with fewer potential combinations of solutions and is LESS likely to come to a mutually satisfactory solution.
<br>D. By deciding on an objective standard prior to discussing potential solutions, the parties are more likely to come to a final agreement that both view as fair.`,
        choices: ["A only",
        "A and B only",
        "C and D only",
        "C only"],
        correct: 3
    },
    {
        // Question 5
        question: `Donny Dealmaker and Joe Rice are set to enter their second day of negotiations on an important, lucrative deal. During the first day, at a meeting room in a local hotel, both sides agreed to make minor concessions but the major issues still need to be resolved. Shortly before the negotiations are set to resume, Joe changes the location from the hotel to the backroom office in a factory that he operates. The room is hot and noisy. Donny arrives on time but is deliberately made to sit and wait for over 45 minutes before Joe, now accompanied by a team of lawyers, arrives to continue the negotiations.
<br>
<br>All of the following courses of action are appropriate responses that Donny could take, EXCEPT which of the following?`,
        choices: ["Donny could explicitly point out the dirty tactics to Joe and question whether they are beneficial for the negotiations.",
        "Donny could raise the issues of the temperature and noise and suggest an alternative location for the negotiations to continue.",
        "Donny could insist upon a break from the negotiations and refuse to continue until they find a more suitable location for the negotiations.",
        "Donny could show that he is not fazed by Joe’s attempts at intimidation by personally attacking Joe’s character during the negotiations."],
        correct: 3
    },
    {
        // Question 6
        question: "Which of the following would NOT be considered a form of alternative dispute resolution (ADR)?",
        choices: ["Using a mediator to resolve a dispute",
        "Using an arbitrator to resolve a dispute",
        "Using Small Claims Court to resolve a dispute",
        "All of the above are forms of ADR."],
        correct: 2
    },
    {
        // Question 7
        question: "All of the following are advantages to using alternative dispute resolution (ADR), EXCEPT:",
        choices: ["The rigid procedural requirements of the formal court system are relaxed.",
        "An ADR resolution will be made public so that others can learn from the parties’ mistakes.",
        "ADR is often quicker and less expensive than the formal court system.",
        "There is more communication between the parties, allowing them increased opportunity to come to a mutually beneficial solution."],
        correct: 1
    },
    {
        // Question 8
        question: "Three of the following statements are true. Which is FALSE?",
        choices: ["Mediation involves a neutral third party whose decision can be binding on the parties.",
        "Selecting a skilled and knowledgeable mediator is an essential part of mediation.",
        "Arbitration can be either binding or non-binding.",
        "Arbitration can take place in front of either an individual arbitrator or a multi-person arbitration panel."],
        correct: 0
    },
    {
        // Question 9
        question: "Both Bill and Ted operate competing driving school businesses that teach new drivers basics in road safety and driving technique. The two businesses are directly across the street from each other. Late one night after an adventurous night on the town, Bill drove his car into the front window of Ted’s shop, causing extensive damage and lost revenue (Bill has a very bad driving record that nobody is aware of). Ted is contemplating his various options for compensation. Which of the following is a TRUE statement regarding a potential resolution of the conflict?",
        choices: ["It is unlikely that a problem of this magnitude could ever be resolved using a form of alternative dispute resolution.",
        "Alternative dispute resolution only works after the parties attempt to use the court system but have no success.",
        "Bill will want to use the court system so that his driving school’s image isn’t tarnished by bad publicity surrounding the result of an alternative dispute resolution.",
        "Ted will want to use a form of alternative dispute resolution if he wants to get compensation as quickly as possible."],
        correct: 3
    },
    {
        // Question 10
        question: "Which of the following is a FALSE statement regarding negotiations?",
        choices: ["If a negotiated solution is unduly one-sided in your favour, the perceived benefits you have achieved may be offset by the negative impact the deal has on your relationship with the other party.",
        "Preparation is an essential aspect of successful negotiations.",
        "If negotiations do not succeed, alternative dispute resolution (ADR) should be considered in order to find a mutually beneficial compromise.",
        "Expert negotiators view negotiations as a conflict in which they attempt to be on the \"winning\" side."],
        correct: 3
    },
    {
        // Question 11
        question: "Which of the following statements about a party’s satisfaction with the outcome of a negotiation is TRUE?",
        choices: ["Sometimes parties can be satisfied with a negotiation that does not conclude in an agreement.",
        "Parties should try to evaluate their satisfaction using objective criteria.",
        "An outcome that satisfies one party will always satisfy the other party as well.",
        "The party who is the most satisfied with the outcome of a negotiation is considered the winner."],
        correct: 0
    },
    {
        // Question 12
        question: "Jack is a manufacturer of a well-respected brand of widgets and wishes to sell his widgets in Ally’s hardware store, which is one of two hardware stores in town. Which of the following statements correctly describes the use of an integrative approach to negotiation by Jack and Ally?",
        choices: ["Jack and Ally fixate on the issue of price in their negotiations. Ally suggests that she will successfully acquire her competitor and become the only hardware store in town and threatens to pull Jack’s widgets from all her stores if Jack does not offer to sell Ally the widgets at $3 each. Jack realizes the situation and gives in to Ally’s terms.",
        "Jack and Ally discuss the problems that both parties have had in competing against lower-quality substitute widgets sold at dollar stores. Jack and Ally decide on a collaborative marketing agreement in which Jack will personally run widget demonstrations in Ally’s store, and Ally will put the widgets on sale for $1 off whenever Jack is running a demonstration.",
        "Jack would like to receive the price of $5 per widget, as he is trying to achieve higher revenues that will best position his company for a potential sale when he retires. Ally would like to pay the price of $3 per widget so that she can sell widgets for the same price as her much larger competitor. Jack and Ally both initially refuse to compromise, but after 3 days of meetings, they agree on a price of $4.",
        "Jack realizes that Ally has a very high quantity of unsold widget inventory on hand from last year, but Jack’s priority is to flood the market with his new and exciting model of widget. Jack tells Ally that unless Ally stops selling her old inventory, he will sell the new model of widgets exclusively to Ally’s competitor."],
        correct: 1
    },
    {
        // Question 13
        question: "A labour union and an employer are engaged in contract negotiations. Which of the following statements identifies an underlying interest of the employer?",
        choices: ["The employer wants a contract length of two years, with a further option to renew the contract for two additional years.",
        "The employer wants the entitlement to enhanced severance pay for employees with over 20 years’ service to be removed from the contract.",
        "The employer plans to sell the business within the next two years and wants a contract that will be attractive to a potential purchaser.",
        "The employer wants to offer a $500 signing bonus to each full-time employee and a 2% wage increase next year conditional upon the company achieving 10% revenue growth within the next 12 months."],
        correct: 2
    },
    {
        // Question 14
        question: "Which of the following statements about alternatives in negotiation is TRUE?",
        choices: ["It is important to always share your alternatives with the other party in the negotiation.",
        "A strong alternative will help the negotiator appear calm and confident.",
        "Conducting too much research into the feasibility of alternatives is an unnecessary distraction in the process of preparing for a negotiation.",
        "The strength of the other negotiator’s alternatives is not relevant to your power in a negotiation."],
        correct: 1
    },
    {
        // Question 15
        question: "In what circumstances is it appropriate to make a series of multiple concessions during a negotiation?",
        choices: ["The negotiation process seems to have stopped.",
        "The other negotiator does not respond to the concession and causes an awkward silence in the negotiation.",
        "The other negotiator firmly reiterates that they are not interested in making any concessions.",
        "The other negotiator meets your concessions at each stage with a comparable gesture."],
        correct: 3
    },
    {
        // Question 16
        question: "Adib is negotiating to purchase Nick’s house. Adib and Nick have agreed to nearly all of the terms of their agreement, but at the last moment before the contract is signed, Adib asks that Nick add one more item to the list of fixtures, such that Adib will get to keep the custom-built countertop espresso machine that he saw in the kitchen. How should Nick respond to this request?",
        choices: ["Nick should reopen the negotiation and ask for something in return for the espresso machine.",
        "Nick should nod quietly and then \"forget\" to insert the term regarding the espresso machine into their written agreement.",
        "Nick should agree to leave the espresso machine behind, as the amount he is receiving for the house is so great that it will not be worth discussing this demand.",
        "Nick should threaten to sue Adib for breaching their agreement."],
        correct: 0
    },
    {
        // Question 17
        question: "Frequently in negotiations over price, most offers and concessions will be made in reference to the first number that is proposed, because the negotiators will not make sufficient adjustments away from that number. What is the name given to this psychological phenomenon?",
        choices: ["False authority",
        "Anchoring effect",
        "Deception effect",
        "Price fixation"],
        correct: 1
    },
    {
        // Question 18
        question: "Which of the following statements about mediators is TRUE?",
        choices: ["Mediators typically meet only once with each party before making a recommendation to both parties.",
        "Mediators will usually be paid for solely by the party who first suggests the mediation.",
        "Negotiators can share their true priorities or interests with a mediator who promises to hold this information in confidence.",
        "Mediators should never provide their opinion on whether a negotiator’s arguments are justified."],
        correct: 2
    },
    {
        // Question 19
        question: "Which of the following statements about Alternative Dispute Resolution (ADR) is TRUE?",
        choices: ["Using the court system to resolve a dispute may be preferable to ADR because judges tend to have specific expertise in the industry that is the subject of the dispute.",
        "ADR processes are usually less adversarial than court proceedings and thus are less likely to destroy the relationship between the parties.",
        "Non-binding mediation is usually the fastest way to resolve a dispute through ADR.",
        "ADR procedures usually involve very little active participation on the part of the parties."],
        correct: 1
    },
    {
        // Question 20
        question: "Nirosh and Donna are former business partners who are negotiating how the legal expenses for dissolving their partnership will be paid. The negotiation has been making little progress. Partway through a stressful meeting, Donna raises her voice and tells Nirosh that if he refuses to concede to her demand that he pay all the expenses, she will spread negative rumours about him among his friends and make sure he is never able to find a new business partner. What is an appropriate course of action that Nirosh could take?",
        choices: ["Call for a break to give Donna some time to calm down.",
        "Threaten to spread rumours Donna as retaliation if Donna follows through on her threat.",
        "Attempt to carry on the negotiation by offering to cover a greater share of the dissolution expenses.",
        "Demand that Donna pay all of the legal expenses, to demonstrate that he will also refuse to be flexible in negotiation."],
        correct: 0
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
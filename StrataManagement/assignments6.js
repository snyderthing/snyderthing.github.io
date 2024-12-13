const questions = [
    {
        // Question 1
        question: "Francis recently immigrated to British Columbia and decided to buy a condominium. Because Francis does not speak or read English, his English speaking (and reading) brother comes along with him to translate. Francis decides to make an offer on a False Creek strata unit he really likes. He asks his brother where on the document he should sign the contract of purchase and sale. His brother points to the spot and Francis signs and later delivers the properly executed offer to the vendor along with the deposit. At no time does his brother or anyone else read the document to him. When the vendor accepts his offer and Francis discovers he is bound by the contract he is shocked. He thought the contract he signed was merely part of ongoing negotiations. He demands a return of his deposit. Which of the following is a TRUE statement of Francis’ legal position?",
        choices: ["Because of his inability to understand English, Francis did not have the legal capacity to enter a contract. He is therefore not bound by the agreement.",
        "Francis neglected to find out the contents and true nature of the contract he signed. He is bound by the contract and if he cannot complete he may forfeit his deposit.",
        "Because Francis has demanded the return of his deposit there is no consideration. Because there was no consideration, a contract cannot be said to be formed.",
        "Because Francis did not understand the contract, the offer was not made in clear and unambiguous terms. The contract is therefore voidable at Francis’s option and he should get his deposit back."],
        correct: 1
    },
    {
        // Question 2
        question: "A journalist visited the house of an art collector to study the collector’s various paintings. The journalist later published a book on the collection, praising the collection as truly one of a kind. Flattered by this review, the art collector phoned the journalist and said, “In exchange for your kind words, I shall give you any piece from my collection that you wish”. When the journalist arrived at the collector’s house to claim the art promised to them, the art collector’s partner refused to let the journalist take anything from the collector’s collection. The journalist plans to sue the art collector for breach of contract. Which of the following statements is TRUE?",
        choices: ["Where the parties have not set a monetary value to the consideration for a contract, a court will not enforce the contract.",
        "The promise of art from the art collector’s collection was not given in exchange for the praise published within the journalist’s book. The praise occurred before the promise of artwork, and is thus considered past consideration; therefore, it cannot support a binding contract.",
        "When the art collector told the journalist that they could have a piece of art in exchange for their publication of a book on the collection, those mutual promises formed a binding contract.",
        "Because the art collector’s promise was made orally, the art collector and the journalist have not entered into a legally binding contract."],
        correct: 1
    },
    {
        // Question 3
        question: "Jae Hee is a strata manager who enters into a contract with Winny’s Landscaping to provide landscaping services to the strata corporation on the 15<sup>th</sup> of every month. On March 1<sup>st</sup>, Winny’s Landscaping informs Jae Hee that it will not be able to perform any landscaping services this month. In this situation, Jae Hee:",
        choices: ["must wait until March 15<sup>th</sup> to pursue any action against Winny’s Landscaping.",
        "may sue immediately for specific performance but must wait until March 15<sup>th</sup> to sue for damages.",
        "may immediately sue Winny’s Landscaping for damages.",
        "is limited to suing for damages."],
        correct: 2
    },
    {
        // Question 4
        question: `Angela was talking to Moira in a cafe and offered to sell her two-year-old car to Moira for the very low price of $7,000. Moira said that she wasn’t certain whether she wanted to buy the car and that she would think about it. Hector, who was eavesdropping on the women’s conversation, spoke up to say, "You’ve got a deal! I’ll buy your car for that price." Angela replied that she did not want to sell the car to Hector. Hector insisted that they had a contract. Angela felt that she was obligated to sell the car to Moira, if she did decide she wanted to purchase it.

        <br><br>Which of the following statements is TRUE?`,
        choices: ["Angela is not required to agree to sell her car to Hector for $7,000.",
        "At this point Moira and Angela have made a contract for the sale of the car.",
        "If Angela accepts Hector’s offer she will be liable to Moira for damages for breach of contract.",
        "Angela is not free to sell the car to anyone else unless she actually receives Moira’s rejection of her offer."],
        correct: 0
    },
    {
        // Question 5
        question: `On Monday, Peter mailed an offer to Beth to buy her horse for a price of $400. The offer was stated to be open for acceptance until 9:00 a.m. on Friday. It also stated, “Reply by telephone.” Beth considered the offer, and decided to accept. However, she wanted all dealings to be in writing, so she wrote a letter of acceptance and mailed it on Thursday morning at 10:00 a.m. On Thursday afternoon, Peter found a better horse and telephoned Beth, telling her that he was revoking his offer. Beth’s letter of acceptance arrived at 8:00 a.m. Friday morning. One or more of the following statements may be true.<br>

<br>A. Since Beth mailed her acceptance prior to Friday morning at 9:00 a.m., she has a valid contract with Peter.
<br>B. Since Beth’s letter of acceptance was received by 9:00 a.m. on Friday, she has a valid contract with Peter.
<br>C. Since Peter revoked his offer prior to Beth communicating her acceptance there is no contract.
<br>D. Since Peter’s offer was sent by mail, he was not legally entitled to require Beth to reply by telephone.<br>

<br>Which statements are TRUE?`,
        choices: ["A and D only",
        "B only",
        "C only",
        "None of the statements are true."],
        correct: 2
    },
    {
        // Question 6
        question: "Ranjit and Ab enter into a contract with Ivan, under which Ranjit and Ab agree to paint the exterior of Ivan’s house by October 31 for a price of $5,000. Which one of the following incidents would terminate the contract?",
        choices: ["After seeing the completed job, Ivan thinks the colour of the paint he agreed to looks too bright in such large quantities on his house.",
        "On October 13, Ranjit and Ab ask Ivan if they can have an extension of 2 days beyond the completion date, which would enable them to enter into another contract with one of Ivan’s neighbours.",
        "Ranjit and Ab complete the job on October 20, and Ivan pays them the agreed price.",
        "On October 18, Ivan sells his house to Juan, agreeing to complete the sale on December 11."],
        correct: 2
    },
    {
        // Question 7
        question: "Harry orally offered to give Mary a one-hour piano lesson for $25. Which of the following statements is TRUE?",
        choices: ["If Susan overhears Harry’s offer, and Mary is not interested in accepting, Susan can accept.",
        "If Mary accepts, and Harry does not honour the contract, Mary cannot successfully sue Harry because the contract was not in writing.",
        "If Harry did not specify a time limit for acceptance, Mary can accept at any future date.",
        "None of the above"],
        correct: 3
    },
    {
        // Question 8
        question: `Which of the following statements regarding conditions in a contract of purchase and sale are TRUE?<br>

<br>A. A condition is a promise which is not fundamental to the contract.
<br>B. In most cases, the breach of a condition permits the innocent party to terminate the contract.
<br>C. A “time is of the essence” clause indicates that timely performance is a condition of the contract.
<br>D. If a term is not a condition, then a breach of that term will not result in any remedies for the innocent party.`,
        choices: ["A and C only",
        "A and D only",
        "C and D only",
        "B and C only"],
        correct: 3
    },
    {
        // Question 9
        question: "In which of the following situations would <i>quantum meruit</i> apply?",
        choices: ["John is a real estate agent. His neighbour, Bill, asks John to sell his house. While they enter into a formal listing contract, the actual amount of commission which is to be paid is not inserted into the written agreement. John sells Bill’s home but Bill will not pay any commission.",
        "Carey and Brett entered into a contract whereby Brett agreed to build a home for Carey on the vacant lot she just purchased. Brett’s full price for building the home was $40,000. Brett did approximately $12,000 worth of work, but Carey refused to pay any instalments which were required under the contract. Brett is now suing Carey for breach of contract.",
        "George performs $300 worth of services under a contract entered into by Shelagh and himself, which is later discovered to be void because of the omission of an essential term from their written agreement.",
        "<i>Quantum meruit</i> would apply in all of the above situations."],
        correct: 3
    },
    {
        // Question 10
        question: "Which of the following constitutes a valid offer?",
        choices: ["George places an advertisement in the newspaper advertising his house for sale at a price of $250,000.",
        "Joe tells a used car dealer, \"I’ll buy a car from you for $450.\" (There are 75 cars on the dealer’s lot).",
        "Maggie offers to place a free half-page advertisement for Tim's sailboard equipment business in her local newspaper, if Tim will lend her a sailboard over the long weekend.",
        "All of the above are valid offers."],
        correct: 2
    },
    {
        // Question 11
        question: "EFG Strata Corporation (\"EFG\") has an enforceable contract with Peter Plumber. It provides that Peter Plumber will provide plumbing services to EFG as needed, in exchange for payment. Peter arrives one Saturday and fixes a pipe running to the common area hot tub. Unfortunately, EFG has budgeted poorly and has insufficient funds to cover this expense. EFG refuses to pay Peter Plumber. Which of the following statements is TRUE?",
        choices: ["This is a breach of condition, so Peter Plumber may sue for specific performance or damages.",
        "This is a breach of a warranty, so Peter Plumber is limited to suing for damages.",
        "This is a breach of a warranty, so Peter Plumber may sue for specific performance or damages.",
        "This is a breach of condition, so Peter Plumber must terminate the contract to sue."],
        correct: 0
    },
    {
        // Question 12
        question: `Lance and Gwen entered into a contract of purchase and sale for Gwen’s house in the country. It had a wonderful unique conservatory wing that Lance thought ideal for opening a restaurant. Lance knew the restaurant would prosper because it was very near a racecourse and all the punters would come for dinner on their way home after the races. Prior to the completion date Gwen told Lance she did not intend to go ahead with the sale. The next day Lance learned she intended to demolish the conservatory because it was too expensive to heat. Which of the following remedies could Lance seek?<br>

        <br>A. Lance could bring an action for specific performance of his contract with Gwen.
        <br>B. Lance’s only remedy is to seek damages for breach of contract if Gwen refuses to complete on the required date.
        <br>C. Lance could seek an injunction prohibiting Gwen from demolishing the conservatory.
        <br>D. Lance is entitled to sue Gwen for misrepresentation and rescind the contract.`,
        choices: ["B only",
        "B and D only",
        "A and C only",
        "D only"],
        correct: 2
    },
    {
        // Question 13
        question: `Which of the following is NOT one of the essentials of a contract?<br>

<br>A. Signatures of the parties
<br>B. Reduced to writing
<br>C. Consideration of more than $1.00
<br>D. Promise made by one party to another`,
        choices: ["A and D only",
        "D only",
        "A, B, and C only",
        "A and C only"],
        correct: 2
    },
    {
        // Question 14
        question: "Which of the following statements regarding the remedy of specific performance is TRUE?",
        choices: ["Whenever a condition of a contract is breached, the innocent party has a right to specific performance.",
        "Specific performance is a statutory remedy granted at the discretion of the court.",
        "Specific performance is often an appropriate remedy when a contract respecting land is breached, if the land is unique.",
        "Judges choose the remedy of specific performance rather than damages in order to punish the party who is in breach of the contract."],
        correct: 2
    },
    {
        // Question 15
        question: `Fred offered to buy Doctor Bindley’s horse for $6,000, but Bindley refused this offer, saying that he wanted $8,000 for the horse. Fred later wrote to Bindley offering to split the difference in price and included a cheque for $7,000 as payment for the horse. In his letter, Fred said, “If I hear no more from you, I consider the horse mine.” Bindley did not cash Fred’s cheque and subsequently sold his horse at auction for $8,000. One or more of the following statements are FALSE.<br>

<br>A. Fred’s letter is an “invitation to treat” and is not binding on Bindley.
<br>B. This is a valid contract because Fred, the offeror, indicated that silence by Bindley would be an acceptable method of accepting his offer.
<br>C. Bindley can ask the court to void this contract because Fred used the $7,000 cheque as an inducement, which is an example of undue influence.
<br>D. This is a classic example of frustration of a contract, by reason of which Bindley is relieved of any obligations under the contract.<br>

<br>Which of the above statements are FALSE?`,
        choices: ["A and B only",
        "A and C only",
        "B, C, and D only",
        "All of the statements are false."],
        correct: 3
    },
    {
        // Question 16
        question: `Hoping to become rich before the age of 45, Hersche hatched a plan to finance and build houses for resale. He was convinced that the way to make a good profit was to purchase a large lot in the neighbourhood surrounding Swan Lake, on which he could build very large houses. Manjeet, who owned the only existing large vacant and wooded lot in the Swan Lake area, entered into a contract of purchase and sale with Hersche for $250,000. Soon after the parties enter into the contract, the Swan Lake area is rezoned to allow for multi-family residential housing. A number of developers approach Manjeet to purchase his lot, offering more than twice what Hersche will pay according to the contract of purchase and sale. Manjeet would like to terminate the contract with Hersche in order to sell the property to one of the developers who approached him. Hersche still wants to purchase the lot to build his house.<br>

<br>Which of the following statements is TRUE?`,
        choices: ["Manjeet’s lot is unique; therefore, the courts will likely grant Hersche an order for specific performance.",
        "Hersche should sue Manjeet to recover damages on the grounds that Manjeet’s breach of contract is unconscionable.",
        "Manjeet can frustrate the contract with Hersche by cutting down all of the trees on the lot and beginning construction of his own house, as this will change the essential character of the contract with Hersche.",
        "This is an example of common mistake because at the time of entering into the contract, neither Hersche nor Manjeet were aware that the owner of the Swan Lake property could build multi-family housing on it; therefore, the contract is void and Hersche cannot recover the property."],
        correct: 0
    },
    {
        // Question 17
        question: "Hugh submitted by mail an offer to buy Oswald’s house. The offer did not set out an expiry time, but required acceptance by mail. The next day, Oswald executed a formal acceptance letter but forgot to mail it. One week later, Hugh decided to revoke his offer. In the meantime, Oswald had discovered his unsent acceptance letter on his desk. Oswald walked over to the post office. Just before Oswald placed the acceptance letter in the mailbox, his cell phone rang – it was Hugh. “Hello,” said Oswald, “I’m just about to mail my letter of acceptance of your offer.” Hugh responded, “Oswald, I am calling to revoke my offer.” Oswald then placed the acceptance letter in the mailbox. Which of the following statements is TRUE?",
        choices: ["Oswald properly communicated his acceptance to Hugh before Hugh revoked his offer. A binding contract formed.",
        "The proper method of acceptance was by mail. The offer was properly cancelled because Hugh revoked the offer before Oswald mailed the acceptance. No contract was formed.",
        "The proper method of acceptance was by mail. Hugh’s revocation was not effective because it was not in writing. A binding contract formed.",
        "None of the above is correct."],
        correct: 1
    },
    {
        // Question 18
        question: "Melissa contracts to supply 1,000 maple trees to Bill’s landscaping company, and 800 to Mike’s landscaping company. Melissa’s inventory sheet shows that she has 2,000 trees, but in the tree yard there are only 1,500 trees. Melissa is unable to get any more trees in time to satisfy the contract. Assuming that Melissa completes the contract with Bill, but is unable to get any more trees for Mike, what legal remedies, if any, will be available to Mike?",
        choices: ["Specific performance",
        "<i>Quantum meruit</i>",
        "Damages",
        "All of the above are legal remedies available to Mike."],
        correct: 2
    },
    {
        // Question 19
        question: `Helen was a shipping agent for a specialized Canadian publishing company. Janet worked for W.H. Jones Ltd., an international retail bookstore. Janet arrived at Helen’s office and they entered into a contract which provided that Helen’s company would deliver 5,000 copies of an anthology of Canadian poetry to W.H. Jones Ltd.’s London offices. Although Helen assumed that this meant London, Ontario, Janet was in fact the purchasing agent for the London, England office of the company. When Helen and Janet discovered the mistake they also discovered that the difference in shipping costs between London, England and London, Ontario was three times the amount of the original contract.<br>

<br>Which of the following is TRUE?`,
        choices: ["The contract cannot be enforced because neither Helen nor Janet had the necessary intention to create legal obligations in making the contract.",
        "There never was a contract in this situation because there was no consideration given for the promises of either party.",
        "This contract cannot be enforced because section 54 of the Statute of Frauds requires the contract to be in writing.",
        "This is a case of mutual mistake because Helen and Janet each had a different, reasonable intention when making the contract."],
        correct: 3
    },
    {
        // Question 20
        question: "Which of the following is TRUE about common law duress?",
        choices: ["Unlike undue influence, duress does not affect the genuine consent of a party to the contract.",
        "Duress requires actual physical injury.",
        "The only remedy courts will award if duress is found is damages.",
        "Where a person is forced to enter into a contract against their will by a threat of imprisonment against one of their close associates, the threat can be considered an act of duress."],
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
        }
        */
    /*,*/
    // add more questions here...
];
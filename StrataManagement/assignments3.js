const questions = [
    {
        // Question 1
        question: `Mike, Dave, John and Kevin are joint tenants of a very large condominium that they all occupy. Kevin suddenly dies in an unfortunate accident. In his will, Kevin leaves his interest in the property to his sisters, Sarah and Jennifer. Upon learning of Sarah’s and Jennifer’s intention to move into the condominium, Dave sells his interest in the condo to Fred, without the knowledge or consent of anyone else. When John and Mike learn of these events, they decide not to let Fred, Sarah or Jennifer onto the property, arguing that the entire tenancy now remains in their hands.

Which of the following statements is/are TRUE?<br>

    <br>A.   Fred, Sarah and Jennifer have each acquired a legal interest in the condominium.
    <br>B.   For the transfer to Fred to be valid, he required the consent of John and Mike.
    <br>C.   John and Mike are tenants in common with each other in the condominium.
    <br>D.   Because neither Fred, Sarah nor Jennifer occupy the condominium, they have not acquired an interest in the condominium.`,
        choices: ["A only",
            "B and C only",
            "D only",
            "None of the statements are true."],
        correct: 3
    },
    {
        // Question 2
        question: "Hiroj dies leaving a will that states: “I leave my property to my brother Hafiz for life without impeachment for waste, with remainder to my son Rafi.” Which of the following statements is TRUE?",
        choices: ["If Hafiz tears down the garage to make way for a basketball court, he will be liable to Rafi for voluntary waste.",
            "If Hafiz plants an apple orchard in the back yard, he will be liable to Rafi for permissive waste.",
            "Hafiz can destroy the buildings on the property so that Rafi has nothing of value to inherit because he is not liable for any category of waste.",
            "If Hafiz decided to destroy the buildings in order to spite Rafi, Hafiz would be liable to Rafi for equitable waste."],
        correct: 3
    },
    {
        // Question 3
        question: `When Andy gave up surfing, he decided to sell his beachfront bungalow to Bertrand. Shortly afterwards, he was struck with remorse and wanted his bungalow back. Checking the state of title at the land title office, Andy learned that Bertrand had not registered the transfer; he immediately mailed the purchase monies to Bertrand and demanded that he return the premises to Andy. Which of the following statements is/are TRUE?<br>

    <br>A.   Under the Land Title Act, a conveyance must be registered in order to be enforceable between the parties to the contract.
    <br>B.   If, before Bertrand registers the transfer, Andy sells the property to Clara for valuable consideration, (and she is unaware of the earlier sale to Bertrand), and she registers the transfer, she would take title subject to Bertrand’s superior right to the property
    <br>C.   If Andy completed a second sale with an unsuspecting third party who registered the transfer before Bertrand, Bertrand could lose his interest in the property.
    <br>D.   Bertrand will be able to enforce the contract against Andy.`,
        choices: ["A and B only",
            "C and D only",
            "A and C only",
            "D only"],
        correct: 1
    },
    {
        // Question 4
        question: "Heinrich is developing a 20-lot subdivision in the Fraser Valley in British Columbia. The area is heavily wooded and Heinrich wants to ensure that it will stay that way. He has included a building scheme in the development plan that is registered in the land title office. The building scheme limits the circumstances in which the existing trees on any of the lots can be cut down. Which of the following statements is TRUE?",
        choices: ["This type of provision will not be enforceable unless the original owner reserves the right to waive it as against individual lots.",
            "This type of provision must apply to at least half of the lots in the development unless certain lots are specified as exempt at the time of registration of the plan.",
            "For a provision like this one to be valid, all the original purchasers must purchase their lots from the same seller.",
            "All of the above statements are true."],
        correct: 2
    },
    {
        // Question 5
        question: "Alana owns an old marble statue that has been firmly affixed to the floor of the largest room in her house for nearly 50 years. She is planning on selling her house, but she wants to make sure that she can take the statue with her when she leaves. How should Alana proceed?",
        choices: ["The statute is definitely a fixture, so Alana can be certain that it will remain her property following the sale of her house.",
            "The statue is definitely a chattel, so when Alana sells the house, the statute will become the property of the new owners.",
            "Alana should ensure that the contract of purchase and sale makes it clear that the statue will remain Alana’s property following the sale of the house.",
            "Alana should wait until after the contract of purchase and sale is completed, and then mention that she wants to keep the statue."],
        correct: 2
    },
    {
        // Question 6
        question: "When William subdivided his property and sold three lake front lots, he retained a large lot back from the water, with a panoramic view. To protect the value of the lot he retained, he sold each lot subject to a restrictive covenant prohibiting any commercial use. These were properly registered. Over the next 10 years, the various owners of Lots 1 and 2 had operated a campground and a motel on their lots, with no objection from William. However, when the new owner of Lot 3 opened a marina, which meant too many boats around for William’s liking, he brought an action for an injunction against the owner of Lot 3 to prevent the operation of the marina because it contravened the restrictive covenant. Which of the following is TRUE?",
        choices: ["William would easily succeed in an injunction against the owners of all three lots for the various commercial enterprises being operated.",
            "William's failure to take action against the owners of Lots 1 and 2 for 10 years may give a court grounds to cancel or modify the restrictive covenant.",
            "A restrictive covenant cannot limit a person’s ability to make a livelihood.",
            "None of the above"],
        correct: 1
    },
    {
        // Question 7
        question: "Which of the following statements about the subdivision of land is TRUE?",
        choices: ["Land can only be subdivided in compliance with section 73 of the Land Title Act, and regulatory approval is required.",
            "The common law rules for subdividing land continue to govern. Fee simple owners can subdivide their land as they please, without any requirement to seek government or regulatory approval.",
            "While fee simple owners can subdivide their land without regulatory approval, persons with life estate interests may not do so.",
            "Land can no longer be subdivided."],
        correct: 0
    },
    {
        // Question 8
        question: "Which of the following is an example of a restrictive covenant that is positive in nature and, as such, will NOT run with the land and bind subsequent owners?",
        choices: ["No trees shall be planted on the northern 10 feet of the property.",
            "Every subsequent owner must paint the fence once per year.",
            "No pesticides shall be used on the property.",
            "If a shed is built on the property, it shall not be taller than 10 feet."],
        correct: 1
    },
    {
        // Question 9
        question: "Alex owns real property in Vancouver, British Columbia. Wishing to improve his property, Alex hired Bill as a contractor to complete some renovations. Bill, in turn, hired Catherine as a subcontractor to help with some of the renovations. The renovations are done and Catherine is upset because Bill refuses to pay her for her work. Catherine registers a lien against Alex’s property through the Land Title Office. Which of the following is TRUE regarding the lien that Catherine registered?",
        choices: ["The registration of the lien will impact Alex’s ability to sell the property, but will not impact Alex’s ability to mortgage the property.",
            "To enforce the lien, Catherine must begin a lawsuit and separately file a certificate of pending litigation.",
            "The lien will be valid for a period of six months.",
            "The lien is not legally binding, as subcontractors do not have lien rights in British Columbia."],
        correct: 1
    },
    {
        // Question 10
        question: "Which of the following properties could be converted into a strata development pursuant to the Strata Property Act?",
        choices: ["An existing apartment building with no strata plan currently filed",
            "10 acres of bare land with several buildings constructed upon the land",
            "A newly created duplex or \"townhouse\" with two separate entrances and separated living spaces",
            "All of the above can be converted into strata developments."],
        correct: 3
    },
    {
        // Question 11
        question: "Sharon, the registered fee simple owner of Whiteacre, sold her interest to Anne. Anne did not register the transfer she received from Sharon. Some months later, Sharon discovered that she was still the registered owner, so she “sold” the property again to Myron, who registered his transfer. Myron did not know about Anne’s purchase and paid market value for the property. Anne has now discovered what has happened. Which of the following statements is TRUE?",
        choices: ["Anne is the rightful owner of the property and she can have Myron removed from the title.",
            "Although Anne cannot remove Myron from the title, she has a valid claim against the assurance fund.",
            "Myron's title is indefeasible because he purchased bona fide for value from the registered owner.",
            "Both (2) and (3) are true."],
        correct: 2
    },
    {
        // Question 12
        question: "Three years ago, Bernard leased a warehouse from Harold for a 5-year term. Although Bernard was given a properly executed lease agreement, he failed to register it in the land title office. Which of the following statements is FALSE?",
        choices: ["Bernard's interest is protected in any event because there are only two years left on the lease. Therefore, it is a lease for less than 3 years and does not have to be registered.",
            "Harold is prohibited under section 20(1) of the Land Title Act from denying Bernard's leasehold interest on the grounds that the agreement was not registered.",
            "Bernard's interest is still valid as against Harold.",
            "Unregistered leases greater than 3 years in length are not protected from third party buyers."],
        correct: 0
    },
    {
        // Question 13
        question: "Which of the following statements about a caveat is TRUE?",
        choices: ["A caveat may be registered for up to three months without renewal to protect a claimed interest in land.",
            "A caveat is not of itself a cause of action or an interest in land.",
            "It is usual to register a certificate of pending litigation before a caveat.",
            "The use of a caveat is a good way to tie up any further dealing in land regardless of the validity of the underlying claim."],
        correct: 1
    },
    {
        // Question 14
        question: "Under the Land Title Act, registration:",
        choices: ["is NOT required by the Act for a conveyance of land to be enforceable between the parties to the transfer.",
            "is not necessary for leases of terms greater than five years, as they are effective against all parties even if they are unregistered.",
            "renders a charge indefeasible.",
            "does not permit any indication of a trust on a registered title to land."],
        correct: 0
    },
    {
        // Question 15
        question: "Alvin, Boris, Claus and Daria are the joint tenants of a property. Daria sells her interest to Xander. Which of the following statements is TRUE?",
        choices: ["The sale destroys the joint tenancy and Alvin, Boris, Claus and Xander now hold the property as tenants in common with each other.",
            "Daria cannot legally dispose of her interest without the permission of the other joint tenants, as it would affect the interests of the others.",
            "Alvin, Boris and Claus remain joint tenants with each other, but become tenants in common with Xander.",
            "None of the above statements are true."],
        correct: 2
    },
    {
        // Question 16
        question: "In which of the following situations would someone have a successful claim against the assurance fund?",
        choices: ["Black owns Whiteacre. Mary forges a transfer to herself, registers it and then obtains a bank loan for $50,000, giving a mortgage of Whiteacre as security.",
            "Bob owns Blackacre, which is worth $1 million. Martin forges a transfer to himself, registers it and then sells the property for $1.2 million to Jim who registers the property and is unaware of the fraud. Upon completion of the sale to Jim, Martin disappears and cannot be found.",
            "Gerald, the owner of Greenacres, gives a life estate in his property to his companion Jasmine. Subsequently, Jasmine sells her life estate to John. All necessary documents are registered in the land title office. In a fit of rage Gerald kills Jasmine to get his property back.",
            "In all of the above situations, a successful claim against the assurance fund might be brought."],
        correct: 1
    },
    {
        // Question 17
        question: "A strata plan must show all of the following EXCEPT:",
        choices: ["a unique registration number.",
            "the names of all of the registered owners of the strata lots.",
            "the boundaries of the land.",
            "the area of each strata lot in square meters."],
        correct: 1
    },
    {
        // Question 18
        question: `In which of the following examples could a joint tenancy exist between all of the parties?<br>
    <br>A.   Laura transferred her summer cottage to her three children. The eldest received a ½ undivided interest, and the two younger children each received a ¼ undivided interest.
    <br>B.   Leopold and Nan purchased property as equal owners of an undivided interest. Later, Leopold transferred his share in the property to Wolfgang, who then shared the property equally with Nan.
    <br>C.   Robert owned a house. When he married Lina, he transferred the property to himself and Lina as equal owners of an undivided interest.
    <br>D.   Jen and Dawn owned a house together as equal owners entitled to an undivided interest. Dawn became increasingly jealous of Jen and secretly sold her interest to her mother, who registered the transfer.`,
        choices: ["C only", "B, C, and D only", "All of the above", "None of the above"],
        correct: 0
    },
    {
        // Question 19
        question: "Which of the following individuals holds an interest in land that is less than an estate?",
        choices: ["Meredith has the right to live in Greyacre until the death of her mother.",
            "Avram has a licence to sell popcorn from a street vendor's stall on the Stanley Park seawall.",
            "Under his uncle’s will, Ian inherited a remainder fee simple interest in a farm after the death of his aunt, who was left a life interest in the farm.",
            "Hiram has a registered easement over the property of his neighbour granting him access to a fishing lake."],
        correct: 3
    },
    {
        // Question 20
        question: "Kevin is the registered fee simple owner of Orangeacre. David forged a transfer of the fee simple from Kevin to himself and registered the transfer. David then approached ABC Trust Company and arranged a mortgage of Orangeacre. ABC advanced $100,000 to David and registered its mortgage against Orangeacre. Kevin has just discovered what has occurred. Which of the following is TRUE?",
        choices: ["Because David forged the transfer of the fee simple to himself, Kevin can have David removed from the title.",
            "ABC is entitled to its mortgage because it dealt with the registered fee simple owner of Orangeacre.",
            "ABC can successfully claim against the assurance fund for money to satisfy the mortgage.",
        "All of the above"],
        correct: 0
    },

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

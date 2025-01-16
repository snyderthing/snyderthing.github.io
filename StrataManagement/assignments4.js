const questions = [
    {
        // Question 1
        question: `Which of the following constitutes trespass?<br>

    <br>A.   Charles sells magazines from door to door. When he approaches the Jones’ house, he sees a “No Soliciting” sign on the gate but he goes up to the door anyway.
    <br>B.   In order to avoid a mud puddle, Julie leaves the sidewalk and makes a small circle onto Marilyn’s property.
    <br>C.   When he was hiking in the park, Williams lost his bearings and wandered around for hours. Without realizing it, he wandered onto Graham’s land.
    <br>D.   Joyce was asked by the owner to leave the local store, which she did as quickly as possible.`,
        choices: ["A, B, C, and D", "A, B, and C only", "A and B only", "C only"],
        correct: 1
    },
    {
        // Question 2
        question: `Which of the following constitutes a trespass?<br>

    <br>A.   John enters the corner grocery store owned and operated by Fred. After John accidentally tips over a carton of fruit, Fred asks John to leave. John apologizes for his mistake and continues to shop.
    <br>B.   Kevin parachutes out of a plane. Unfortunately, Kevin misses his target field and lands on the roof of Fred’s corner grocery store.
    <br>C.   Cathy lives next door to Fred. On Cathy’s land is an old water tower that she has negligently let deteriorate into disrepair. Finally, the water tower collapses, falling directly onto Fred’s store and damaging the roof.
    <br>D.   Steven, a baseball player, hits a ball so hard that it leaves the baseball stadium and lands harmlessly on the front steps of Fred’s store.`,
        choices: ["B and D only", "A and C only", "A, B, and D only", "All of the above"],
        correct: 2
    },
    {
        // Question 3
        question: "Schroeder developed a strata complex and was looking for a suitable strata manager. Schroeder asked Lucy, a friend who was a property manager, to recommend a good strata management firm for his development. Lucy said she had heard great things about Shifty’s Strata Services, but advised Schroeder not to rely on her opinion because she had not dealt with them personally. Without checking into the matter further, Schroeder hired Shifty’s and paid them a significant advance retainer fee. The managing broker of Shifty’s disappeared with Schroeder’s money. Which of the following statements is TRUE?",
        choices: ["Lucy owed no duty of care to Schroeder because she was only giving advice as a friend.",
            "Lucy’s qualification of her statement effectively released her from any liability.",
            "Schroeder can successfully sue Lucy for negligent misrepresentation because she had a duty, as a professional in the area, to take all reasonable care that the information she supplied to him was correct.",
            "Schroeder cannot sue Lucy for negligent misrepresentation because there was no contractual relationship between them."],
        correct: 1
    },
    {
        // Question 4
        question: `Emilia lives in a house which she has leased from Johan while he is on an exchange program in Finland. Recently, Anika, a boarder in the house, noticed that their neighbour, Sloppy Joe, had entered the property to repair a hole in the fence through which his dog had a habit of escaping. After the repairs were made, a pile of lumber, some tools, and a can of nails remained on the property leased by Emilia. While the presence of these objects has caused no damage to the property, Anika finds them unsightly and has asked for your opinion. Which of the following is/are correct?<br>

<br>A. Johan, as owner of the property, can bring an action in trespass against Joe for wrongfully entering the property and leaving the objects behind.
<br>B. Emilia will most likely succeed in a trespass action against Sloppy Joe for the wrongful placing of the materials on the land she has leased.
<br>C. Anika, as a boarder, has a right to bring an action in trespass against Joe.
<br>D. Because Joe’s actions had a legitimate purpose, he is not liable in trespass.`,
        choices: ["A, B, and C only", "A only", "B only", "D only"],
        correct: 2
    },
    {
        // Question 5
        question: `A landlord owned acreage which she leased to a tenant to use as an explosives testing site. The landlord’s neighbour operated a turkey farm on the property adjacent to the acreage. As a result of the explosions taking place at the tenant’s site, every year for three years the neighbour’s turkeys became distraught and died. Which of the following statements are TRUE?<br>

<br>A. The tenant is responsible for the nuisance and will be liable to the neighbour for their losses.
<br>B. The landlord is not liable for nuisance because she has no control over what the tenant does on the leased property.
<br>C. The landlord is liable to the neighbour in nuisance because she leased the property to the tenant for a purpose which would necessarily cause a nuisance to the neighbour.
<br>D. The landlord cannot be responsible for the nuisance created by the tenant because the landlord is not the occupier of the acreage.`,
        choices: ["C and D only", "A and C only", "A and B only", "B and D only"],
        correct: 1
    },
    {
        // Question 6
        question: "Which of the following statements regarding the Occupiers Liability Act (\"OLA\") is FALSE?",
        choices: ["Under the OLA, the occupier must take such care as in all the circumstances is reasonable to see that visitors coming onto the property will be reasonably safe.",
            "The duty of care owed under the OLA applies to the condition of, the activities occurring on, and the conduct of third parties on the premises.",
            "An occupier will not owe a duty of care under the OLA to visitors who, with full knowledge of the risks, unequivocally waives their rights to the protection of the Act, other than a duty not to intentionally harm or act with reckless disregard towards the visitor or visitor's property.",
            "The OLA provides injured parties with a statutory remedy against only the registered owner of the unsafe premises."],
        correct: 3
    },
    {
        // Question 7
        question: "Jane moved to a rural area home and installed a hot tub in the side yard. She filled the tub with water in anticipation of using it. Her property was, however, invaded by hundreds of bees apparently seeking water. As a result of these bees, Jane and her friends and family cannot safely use the hot tub or the side yard from April to September of each year. Silver Maple Apiaries, a licensed honey farm, is located in the area. Silver Maple places its bee hives on the property it leases from Gus who is Jane’s neighbour. Jane is now suing both Gus and Silver Maple. Which one of the following is TRUE?",
        choices: ["Because Silver Maple is licensed to raise and keep bees it is not liable to Jane.",
            "Because Silver Maple leases the land from Gus, it is liable to Jane under the Occupiers Liability Act.",
            "Gus is liable to Jane in trespass.",
            "Silver Maple may be liable to Jane under the tort of private nuisance."],
        correct: 3
    },
    {
        // Question 8
        question: "Which of the following statements regarding the Occupiers Liability Act (\"OLA\") is TRUE?",
        choices: ["The definition of an \"occupier\" in the OLA includes people who may have temporary control over the premises.",
            "The OLA preserves the common law where the standard of care is based on the category of visitor.",
            "The OLA specifies the different standards of care that are required in different circumstances.",
            "The OLA relieves occupiers of other higher standards of care that may be imposed on the occupier by other statutes."],
        correct: 0
    },
    {
        // Question 9
        question: "Jim Young recently lost his job and is finding it difficult to make the mortgage payments on his strata unit. As a result, Jim decides to sell the unit and hires the services of Carol, a trading services licensee. In an effort to make his unit more attractive, Jim immediately starts minor repairs to the premises. Jim is not the most organized handyman and often leaves tools, boards and scrap material lying around. One night, Carol arrives with John and Sarah Middleton, a newly married couple looking for a reasonably priced home. While looking at the unit, Sarah walks down a corridor in the unit and steps on a board full of nails and injures herself.",
        choices: ["Jim did not take the care that a reasonable person would have taken in the circumstances.",
            "It is reasonably foreseeable that a person might step on the board full of nails and suffer injury.",
            "Sarah's actions represented a reasonable use of the corridor.",
        "Jim owed Sarah a duty to take care."],
        correct: 2
    },
    {
        // Question 10
        question: "Chuck owns a retail store. The floor of the store is checked 4 times a day and there are many spot cleanups during the course of the day. In fact, the majority of Chuck’s time is spent touring the store to ensure, among other things, that the floors are clear. However, 15 minutes after the last complete floor check, Manjit slips on a small hard-coated candy lying on the floor of the store. Manjit sues Chuck. Which of the following statements is TRUE?",
        choices: ["Because Chuck is aware of the danger created by objects lying on the floor, he is liable for Manjit’s injuries.",
            "By entering the store, Manjit has willingly accepted the risk that she might fall and therefore is not protected by the provisions of the Occupiers Liability Act.",
            "Chuck may be protected by the Occupiers Liability Act because his housekeeping provisions are reasonably intended to prevent this type of injury.",
        "All of the statements are true."],
        correct: 2
    },
    {
        // Question 11
        question: "Eli was anxious to sell his house because he knew it was badly infested with termites. Sydney expressed an interest in buying the property after inspecting it. Before making an offer, she asked Eli whether there were any problems that she should know about. Eli assured Sydney that the structure was sound and free of any defects. Sydney subsequently bought the house and within one month discovered that the damage caused by the termites had seriously threatened its structural soundness, requiring thousands of dollars' worth of repair work. Which of the following statements is TRUE?",
        choices: ["Sydney can probably sue Eli under both tort and contract law.",
            "Eli cannot be held liable for his misrepresentation because he is not a professional real estate licensee.",
            "As there was no special relationship between Eli and Sydney giving rise to a duty of care, Eli cannot be held liable.",
        "Sydney's remedies are limited to those provided for under contract law."],
        correct: 0
    },
    {
        // Question 12
        question: "Dermot owns a flower shop and his deliveries are made by his employee, Gus. While picking up fish and chips to take home for his evening meal, Gus fell asleep at the wheel of his van and injured Molly. Which of the following statements correctly describes Molly’s rights?",
        choices: ["Molly can sue Gus for nuisance.",
            "Molly can sue Dermot for Gus' negligence under the principle of vicarious liability.",
            "Molly can only sue Gus in negligence because the accident occurred when Gus was doing something outside the ordinary scope of employment.",
        "Dermot’s liability to Molly would change if Gus were an independent contractor."],
        correct: 2
    },
    {
        // Question 13
        question: "Shelby is a real estate licensee who works in Olympus Towne, a neighbourhood with many newly constructed condominium towers. Olympus Towne has experienced extremely fast growth, and unfortunately many of the towers were poorly constructed. Last year, Shelby sold three units in Palisades Pavilion, a condominium tower in central Olympus Towne. In each of the three units, inspections revealed water damage resulting from leaks. Recently, Shelby found a purchaser for another client’s condo in Palisades Pavilion. The buyer was familiar with Olympus Towne’s “leaky condo” reputation, and inquired about the issue. Shelby assured the buyer that this condo was free from leaks. In reality, Shelby did not know whether this unit was affected by leaks or water damage, as she had been too busy to have an inspection done. One week after the purchase completed, the purchaser was notified of an assessment for water damage to the condominium. The purchaser is suing Shelby. Which of the following statements about this situation is TRUE?",
        choices: ["Shelby is likely not liable to the purchaser because she did not know that the condo had water damage.",
            "Shelby is likely liable to the purchaser for making a negligent misrepresentation.",
            "Shelby is likely liable to the purchaser for making a fraudulent misrepresentation.",
        "Shelby is likely liable to the purchaser for breaching her fiduciary obligations."],
        correct: 1
    },
    {
        // Question 14
        question: "Asha recently purchased a strata lot in a mixed-use residential and industrial zone. She is aware that the strata building is directly next to an industrial factory that produces medical equipment. Upon moving in, she notices that the factory next-door produces an irritating noise for approximately ten minutes per day at the beginning of each workday. Asha discusses this concern with the factory manager, who informs her that the sound is produced each time the machines are turned on for the day. Unsatisfied by this response, Asha decides she would like to initiate legal proceedings against the factory for private nuisance. Which of the following might serve a valid defence to Asha’s proposed legal action?",
        choices: ["Because the factory was in the neighborhood before Asha, she came to the nuisance and therefore the factory can claim volenti non fit injuriae.",
            "Because the factory produces medical equipment, the factory can claim that the act of turning on the factory machines is a public benefit.",
            "Because the zone is for mixed residential and industrial use, the factory can claim that there is no other suitable place to conduct their operations.",
        "Because the noise only lasts for ten minutes, the factory can claim that the damage caused is trifling and of little consequence."],
        correct: 3
    },
    {
        // Question 15
        question: "Travis is furious because his neighbour, Michael, without warning, cut a sizeable branch off of a tree that sits in Travis’ front yard. Michael cut off the branch because it was overhanging his driveway, where Michael parks his valuable 1966 Ford Mustang. Michael was worried that the branch could fall during a severe windstorm and damage his car. Michael correctly believed that this situation was a private nuisance and cut the branch to abate the nuisance. Which of the following is TRUE about abatement?",
        choices: ["Michael was required to seek recourse to the courts for approval before proceeding with the remedy of abatement.",
            "Abatement was not an appropriate remedy for Michael to pursue in this situation.",
            "Abatement was an appropriate remedy in this scenario and was properly applied by Michael.",
        "While abatement was an appropriate remedy in this situation, it was wrongly applied by Michael."],
        correct: 3
    },
    {
        // Question 16
        question: "Ivan is the owner and resident of a residential property. While Ivan is away on vacation, he gives his friend Frankie permission to enter the premises to water his plants. One evening, after having watered the plants earlier that day, Frankie returns to the property for the purpose of using Ivan’s indoor swimming pool. This is an example of:",
        choices: ["trespass by wrongful purpose.",
            "trespass by wrongful placing.",
            "trespass by wrongful entry.",
        "trespass by wrongful remaining."],
        correct: 2
    },
    {
        // Question 17
        question: "Which of the following is the most common ground of liability for real estate licensees, as measured by the Real Estate Errors and Omissions Insurance claims?",
        choices: ["Negligence",
            "Negligent misrepresentation",
            "Breach of fiduciary duties",
        "Negligent drafting"],
        correct: 1
    },
    {
        // Question 18
        question: "Juan is a residential tenant in a property owned and leased by Quinn. Juan and Quinn, who were previously long-term friends, get into a personal dispute and are no longer on speaking terms. While the tenancy is ongoing, Quinn changes the locks to prevent Juan from entering the premises. As a result, Juan picks the lock and resumes occupancy. If Quinn decides to sue Juan in trespass, which of the following arguments can Juan use as a valid defence?",
        choices: ["Express or implied permission of the occupier",
            "Entry by a person in order to abate a nuisance",
            "Entry by a landlord or sheriff in order to levy a distress",
        "Peaceable entry by a person entitled to possession"],
        correct: 3
    },
    {
        // Question 19
        question: "Tanya has a repeated habit of crossing through Albert’s driveway in order to get to her mailbox. She does so out of convenience, not malice. There is no actual damage to the property, but Albert grows increasingly frustrated with Tanya’s behaviour and looks to the court for a remedy. Which of the following is likely the most effective court-ordered remedy?",
        choices: ["Injunction","Abatement" ,"Damages" ,"Punitive damages"],
        correct: 0
    },
    {
        // Question 20
        question: "A strata corporation would likely incur liability as a result of breaching privacy legislation in which of the following situations?",
        choices: ["Appointing the strata manager as the \"privacy officer\" required by the Personal Information Protection Act.",
            "Disclosing personal information to the police where the request for information is bona fide in aid of an investigation but is not accompanied by a warrant.",
            "Disposing of correspondence received by the strata council after one year has passed.",
        "Recording the personal information of attendants at an annual general meeting in the strata corporation’s minutes."],
        correct: 2
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
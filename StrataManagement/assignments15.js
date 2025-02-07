const questions = [
    {
        // Question 1
        question: "Which of the following statements regarding purchase orders is TRUE?",
        choices: ["There is no need to use a purchase order for making purchases except in emergencies; in emergencies, purchase orders are absolutely required.",
        "Purchase orders should spell out exactly what product or service the strata manager wishes to purchase, but it is not necessary to include the price, since this would necessitate filling out another purchase order if the price of the product changes.",
        "Purchase orders serve internally as a budget control and inventory control tool.",
        "It is advisable that the person who fills out the purchase order be the person to sign the cheque paying the invoice, so that they can confirm that the purchase authorized by the purchase order was actually made.v"],
        correct: 2
    },
    {
        // Question 2
        question: "Which one of the following scenarios shows the BEST example of good control of a contract by the strata manager?",
        choices: ["The strata manager has hired a landscape maintenance company to maintain the lawn, trees, and flowers surrounding the building. The contract contains the following statement describing the work to be done: \"The landscaper will do regular upkeep of the lawn and garden to keep it in acceptable condition.\"",
        "The strata manager of a condominium building has hired a painter to paint the hallways on a rotating basis. The contract with the painter describes the job as \"painting of hallways on a rotating basis. Painting will take no more than two days per hallway.\"",
        "The janitorial service that has been hired by the manager of an office building is instructed in their contract to perform \"cleaning of all the washrooms twice a day using cleaning supplies provided by the strata manager; vacuuming of all carpeted hallways once a day using vacuum cleaners to be provided by the janitor; and buffing of the floors in the entrance lobby once a day using a buffer to be provided by the janitor.\"",
        "The strata manager has hired an elevator service company to do what the contract describes as \"regular inspections of elevator cabs and mechanical operations, and all required maintenance to keep the elevators in safe working order.\""],
        correct: 2
    },
    {
        // Question 3
        question: "Why is it valuable to have an inspection log sheet for components of a mechanical system such as the heating, ventilating, and air conditioning (HVAC) system?",
        choices: ["So that owners can file complaints on the log sheet when the equipment is not working",
        "So that the strata manager can ensure that maintenance personnel are making routine checks and recording any essential information",
        "So that the strata council can confirm that the strata manager has personally inspected the equipment on a regular basis to ensure that it is working properly",
        "So that owners can confirm that the strata manager is doing all of the required work to ensure that HVAC system continues to work as required in their leases"],
        correct: 1
    },
    {
        // Question 4
        question: "Which of the following statements regarding preventive maintenance is TRUE?",
        choices: ["An effective mechanical preventive maintenance program requires inspection of certain equipment, such as boilers, several times daily.",
        "Since maintenance of the structural elements of a building is vital to its longevity, structural preventive maintenance programs are generally more detailed and frequent than mechanical preventive maintenance programs.",
        "All items that are included in a structural preventive maintenance program should be maintained every three months.",
        "Effective structural and mechanical preventive maintenance programs should entirely eliminate the need for corrective maintenance."],
        correct: 0
    },
    {
        // Question 5
        question: "Which of the following is NOT included in a structural preventive maintenance program?",
        choices: ["Cleaning out gutters and downspouts",
        "Inspecting refrigeration units",
        "Curb painting",
        "Replacing carpets"],
        correct: 1
    },
    {
        // Question 6
        question: "Which of the following is NOT an example of a scenario where it may be acceptable for a strata manager to recommend deferred maintenance?",
        choices: ["If the strata corporation is to be dissolved and the building is to be sold, and the onus of repairs is to be passed on to the new owner",
        "If the strata owners do not have sufficient funds to pay for the repairs and will not authorize the expense",
        "If the problem is not highly visible and the strata council and owners will not notice if the repair was deferred",
        "If the strata owners do not authorize a special levy, which would be necessary to fund the repair"],
        correct: 2
    },
    {
        // Question 7
        question: "Which of the following statements regarding corrective and routine maintenance is FALSE?",
        choices: ["Owners and tenants should be prohibited from operating trash compactors due to the potential liability risk.",
        "Maintenance crews should periodically check catch basins when snow is thawing to avoid flooding.",
        "Maintenance crews should respond to reports or complaints of damage or malfunction as soon as possible.",
        "Frozen water lines, broken fan belts, and broken windows all fall under the routine maintenance category."],
        correct: 3
    },
    {
        // Question 8
        question: "You are the strata manager of a building where all janitorial and maintenance personnel are in-house. You are considering contracting out these services. Which of the following situations does NOT provide a valid reason for contracting out maintenance and janitorial services?",
        choices: ["Frank the janitor did not show up for work again last night and you could not find a substitute.",
        "Sally the landscaper now needs to spend so much time servicing the old equipment that she must constantly work overtime to get her regular duties completed.",
        "You have replaced the artificial plants in the lobby with live plants and you now want maintenance staff to water them periodically.",
        "You find that you are devoting too much time to organizing the cleaning of staff uniforms."],
        correct: 2
    },
    {
        // Question 9
        question: "Which of the following is MOST likely to be categorized as routine maintenance?",
        choices: ["Repairing damaged washroom fixtures",
        "Replacing broken fan belts",
        "Caulking around windows",
        "Removing snow and ice from external paths"],
        correct: 3
    },
    {
        // Question 10
        question: "Which of the following statements regarding fire prevention systems is FALSE?",
        choices: ["According to municipal bylaws, fire hoses must be pressure tested on-site.",
        "Hand-held fire extinguishers must be checked periodically to ensure they are fully charged, which entails reading the pressure dial.",
        "It is important to ensure that fire doors and their automatic closers are operational.",
        "The compressor maintaining the air pressure in a dry line sprinkler system must be checked."],
        correct: 0
    },
    {
        // Question 11
        question: "You are the strata manager of eight condominium buildings. Which of the following actions will help you to minimize operating costs?",
        choices: ["One of the buildings has a swimming pool and you bought a large quantity of replacement plumbing fixtures in order to receive the bulk purchase discount.",
        "You have installed identical light fixtures in the halls of all of the buildings in order to take advantage of bulk purchasing.",
        "You have renewed the contract of your maintenance contractor in order to avoid the costly process of putting the contract to tender.",
        "All of the above actions will minimize operating expenses."],
        correct: 1
    },
    {
        // Question 12
        question: "Which of the following BEST describes the fundamental purpose of an Operations Manual?",
        choices: ["It summarizes all the buildings under a brokerage’s management.",
        "It outlines all of the legislation that applies to a building’s operations.",
        "It provides generalized operations procedures that can be applied to any multi-family residential building.",
        "It provides staff members with guidance in the maintenance and operations of the building."],
        correct: 3
    },
    {
        // Question 13
        question: "Which of the following is the BEST reason for maintaining a detailed inventory control program for lighting fixtures?",
        choices: ["To standardize common products in order to assist in bulk purchasing",
        "To identify the types of fixtures used in order to facilitate prompt replacement",
        "To ensure that all fixtures are being inspected with the necessary frequency",
        "To familiarize all staff with procedures in case of an emergency"],
        correct: 1
    },
    {
        // Question 14
        question: "When planning energy conservation in a building, which of the following is the MOST important criterion that will govern the decision of the strata manager to proceed with a measure?",
        choices: ["The cost of the proposed energy conservation measure",
        "The savings resulting from the proposed energy conservation measure",
        "The net savings (savings minus cost) of the proposed energy conservation measure",
        "The generating capacity of the utility company"],
        correct: 2
    },
    {
        // Question 15
        question: "Which of the following statements regarding voltage is TRUE?",
        choices: ["Voltage measures the rate of electrical flow.",
        "Voltage is equal to watts divided by amperage.",
        "Voltage measures the power consumption.",
        "Voltage measures electrical pressure in kilowatt hours."],
        correct: 1
    },
    {
        // Question 16
        question: "Which of the following is an example of heat transfer caused by radiation?",
        choices: ["Energy flows between the basement wall and the adjacent soil",
        "Warm air escapes from a window on the upper floor",
        "The chimney effect",
        "Your hands get warm while sitting near a campfire"],
        correct: 3
    },
    {
        // Question 17
        question: "Which of the following is an example of heat transfer caused by conduction?",
        choices: ["A home is warmed by means of a forced air heating system",
        "When looking out of a window towards the sun, your face feels warm",
        "Heat leaves a building through an insufficiently insulated basement wall that is in contact with the soil outside",
        "None of the above"],
        correct: 2
    },
    {
        // Question 18
        question: "Which of the following CORRECTLY describes the result of applying low-emissivity film to a window?",
        choices: ["A decrease in heat gain in the interior of the building from the sun",
        "An increase in the heat loss from the interior of the building to the exterior",
        "Increased durability because of less rotting of window frames",
        "A reduction in heat gain through radiation, but an increase in the glare"],
        correct: 0
    },
    {
        // Question 19
        question: "Which of the following statements regarding energy conservation is TRUE?",
        choices: ["The purpose of converting past and current energy consumption into common units such as British Thermal Units is to be able to determine the real rate of energy consumption, without the effect of fluctuating energy costs.",
        "Utility companies base their maximum generating capacity on the average demand for energy.",
        "The energy efficiency of the space occupied by the owners is the sole responsibility of the owners.",
        "Increasing the energy efficiency of a building will always mean a reduction in the comfort of the occupants."],
        correct: 0
    },
    {
        // Question 20
        question: "Which of the following describes the PRIMARY purpose of a building audit?",
        choices: ["To inform the strata council of how much money is being earned from the building on an annual basis",
        "To determine which windows to seal permanently in a building in order to reduce energy loss",
        "To inspect the building to see if it passes the existing building code",
        "To reveal where in the operation of a building energy conservation measures can be taken"],
        correct: 3
    }
];
import {
    captureHistoricEvent,
    DAYS_BACK,
    getSemiRandomElement, getRandomInt,
    NUM_USERS,
    randomUsers
} from "./utils.mjs";

const seed = Math.random();

const getRandomFAQEvent = () => ({
    eventName: "faq_section_clicked",
    properties: { section: getSemiRandomElement([
            "how-to-fill-form",
            "accepted-payment-methods",
            "reset-password",
            "refund-policy",
            "contact-support"
        ], seed)
    }
})

const simulateFAQClicks = () => {
    const users = randomUsers(NUM_USERS);
    users.forEach(user => {
        for (let daysAgo = DAYS_BACK; daysAgo>=0; daysAgo--) {
            const numberOfClicks = getRandomInt(0, 5);
            const event = getRandomFAQEvent();
            console.log("simulating number of clicks: ", numberOfClicks);
            Array.from({ length: numberOfClicks }).forEach(() => captureHistoricEvent(
                user,
                daysAgo,
                event.eventName,
                event.properties
            ))
        }
    })
}

simulateFAQClicks();
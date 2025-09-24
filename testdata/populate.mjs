import axios from 'axios';
import * as uuid from 'uuid';
import {xxx} from "./event.mjs";


// === CONFIGURATION ===
const POSTHOG_API_KEY = 'phc_yd39noV71UiAx6q7W9lqaWrXJNUigN790PMY28VEm8P';
const POSTHOG_HOST = 'https://eu.i.posthog.com';

const NUM_USERS = 1;
const DAYS_BACK = 1;
const EVENTS_PER_USER_PER_DAY = 10;

// === HELPERS ===
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomTimestamp(daysAgo) {
    const now = new Date();
    const date = new Date(now);
    date.setDate(now.getDate() - daysAgo);
    date.setHours(getRandomInt(8, 22), getRandomInt(0, 59), getRandomInt(0, 59));
    return date.toISOString();
}

function getRandomElement(arr) {
    return arr[getRandomInt(0, arr.length - 1)];
}

// === USERS ===
const users = Array.from({ length: NUM_USERS }, () => uuid.v4());

// === EVENT TYPES ===
const eventNames = ['$pageview', 'button_clicked', 'signup', 'product_viewed', 'checkout_started'];
const browsers = ['Chrome', 'Firefox', 'Safari', 'Edge'];
const devices = ['desktop', 'mobile', 'tablet'];
const referrers = ['Google', 'Twitter', 'LinkedIn', 'Direct'];
const urls = ['about', 'funnel'];

const chance = (p) => Math.random() < p;

const simulateSingleUser = (daysBack) => {
    const userId = uuid.v4();
    const userMetadata = {
        $browser: getRandomElement(browsers),
        $lib: 'web',
        $lib_version: '1.224.0',
        url: `http://localhost:3000/${page}`,
        // current_url: `http://localhost:3000/${page}`,
        host: "localhost",
        // pathname: "/" + page,
        email: `user-${userId.slice(0, 8)}@example.com`
    }
    // const eagerness = Math.random();
    // const visitsSite = chance(eagerness);

    for (let day = 0; day < DAYS_BACK; day++) {
        const dayMetadata = {
            device: getRandomElement(devices),
            referrer: getRandomElement(referrers),
        }

        const visitsSite = chance(0.5);
        if (visitsSite) {

        }
    }


}

// === MAIN FUNCTION ===

async function sendEvents() {
    for (const userId of users) {
        for (let day = 0; day < DAYS_BACK; day++) {
            for (let i = 0; i < EVENTS_PER_USER_PER_DAY; i++) {
                const page = getRandomElement(urls);
                const event = {
                    api_key: POSTHOG_API_KEY,
                    event: getRandomElement(eventNames),
                    distinct_id: userId,
                    properties: {
                        $browser: getRandomElement(browsers),
                        $lib: 'web',
                        $lib_version: '1.224.0',
                        device: getRandomElement(devices),
                        referrer: getRandomElement(referrers),
                        url: `http://localhost:3000/${page}`,
                        current_url: `http://localhost:3000/${page}`,
                        host: "localhost",
                        pathname: "/" + page,
                        email: `user-${userId.slice(0, 8)}@example.com`
                    },
                    timestamp: getRandomTimestamp(3)
                };

                try {
                    const response = await axios.post(`${POSTHOG_HOST}/capture/`, event);
                    console.log("event sent", event);
                    console.log("response", response);
                    if (response.status !== 200) {
                        console.error(`Failed: ${response.status} - ${response.data}`);
                    }
                } catch (error) {
                    console.error(`Error sending event: ${error.message}`);
                }
            }
        }
    }

    console.log('✅ Finished sending demo data!');
}
xxx();
sendEvents();
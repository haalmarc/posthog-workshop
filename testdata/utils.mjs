import * as uuid from "uuid";
import axios from "axios";
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export const NUM_USERS = 10;
export const DAYS_BACK = 7;


// === EVENT TYPES ===
const eventNames = ['$pageview', 'button_clicked', 'signup', 'product_viewed', 'checkout_started'];
const browsers = ['Chrome', 'Firefox', 'Safari', 'Edge'];
const devices = ['desktop', 'mobile', 'tablet'];
const referrers = ['Google', 'Twitter', 'LinkedIn', 'Direct'];
const urls = ['about', 'funnel'];

export const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

export const getRandomIntNonnormalDistribution = (min, max, seed) =>
    Math.floor(Math.pow(Math.random(), 4 * seed) * (max - min + 1) + min);

export const getRandomTimestamp = (daysAgo) => {
    const now = new Date();
    const date = new Date(now);
    date.setDate(now.getDate() - daysAgo);
    date.setHours(
        getRandomInt(8, 22),
        getRandomInt(0, 59),
        getRandomInt(0, 59)
    );
    return date.toISOString();
};

export const getRandomElement = (arr) => arr[getRandomInt(0, arr.length - 1)];
export const getSemiRandomElement = (arr, seed) => arr[getRandomIntNonnormalDistribution(0, arr.length - 1, seed)];

export const randomUsers = (n) =>
    Array.from({ length: n }, () => uuid.v4())
        .map(userId => ({
            userId,
            userProperties: {
                $browser: getRandomElement(browsers),
                $lib: 'web',
                $lib_version: '1.224.0',
                host: "localhost",
                email: `user-${userId.slice(0, 8)}@example.com`
            }
        }));

export const captureHistoricEvent = async (user, daysAgo, eventName, properties) => {
    const page = getRandomElement(urls);
    const event = {
        api_key: process.env.NEXT_PUBLIC_POSTHOG_KEY,
        event: eventName,
        distinct_id: user.userId,
        properties: {
            referrer: getRandomElement(referrers),
            url: `http://localhost:3000/${page}`,
            current_url: `http://localhost:3000/${page}`,
            pathname: "/" + page,
            ...user.userProperties,
            ...properties
        },
        timestamp: getRandomTimestamp(daysAgo)
    };

    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_POSTHOG_HOST}/capture/`, event);
        if (response.status !== 200) {
            console.error(`Failed: ${response.status} - ${response.data}`);
        }
    } catch (error) {
        console.error(`Error sending event: ${error.message}`);
    }
}
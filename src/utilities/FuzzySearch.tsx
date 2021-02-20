import Fuse from 'fuse.js'
import { FighterType } from "../types";

/**
 * Sleep
 * @param delay delay in ms
 */
const sleep = (delay = 0) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

/**
 * Fuzzy search an array of objects
 * @param pattern Fuzzy search pattern
 */
export const fuzzySearch = async (pattern: string) => {
    const options = {
        keys: [
            "firstName",
            "lastName",
        ]
    };
    const fuse = new Fuse(fighters, options);
    await sleep(1e3); // Fake async fetch
    return fuse.search(pattern)
}

/**
 * Mock data.
 */

const fighters: FighterType[] = [
    {
        firstName: "Niina",
        lastName: "Aaltonen",
        fighterId: "3043549",
    },
    {
        firstName: "Tom",
        lastName: "Aaron",
        fighterId: "2504991",
    },
    {
        firstName: "Joshua",
        lastName: "Aarons",
        fighterId: "3088828",
    },
    {
        firstName: "Mike",
        lastName: "Aarts",
        fighterId: "3089919",
    },
    {
        firstName: "Zyad",
        lastName: "Abada",
        fighterId: "2511451",
    },
]
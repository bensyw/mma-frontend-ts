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
        keys: ["fighterName"]
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
        fighterName: 'A',
        fighterId: "1",
    },
    {
        fighterName: 'B',
        fighterId: "2",
    },
    {
        fighterName: 'C',
        fighterId: "3",
    },
    {
        fighterName: 'D',
        fighterId: "4",
    },
    {
        fighterName: 'E',
        fighterId: "5",
    },
    {
        fighterName: 'F',
        fighterId: "6",
    },
    {
        fighterName: 'G',
        fighterId: "7",
    },
]
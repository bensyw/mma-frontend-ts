import Fuse from 'fuse.js'
import { fighters } from "./data";

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

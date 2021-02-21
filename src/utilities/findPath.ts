import { FighterType } from '../types';
import { FighterGraphType } from '../types';
import { fighters } from "./data";

/**
 * Use BFS or Dijkstra's algo to find the shortest path of victory
 * @param startId Starting node. fighterId as the key.
 * @param endId Destination node. fighterId as the key.
 * @param graph Adjacency list.
 * @param fighters FighterType Array
 */
export const bfs = (startId: string, endId: string, graph: FighterGraphType, fighters: FighterType[]): FighterType[] => {
    // Convert path to an array of FighterType.
    const path: string[] = [];
    const fighterError = {
        fighterName: 'Error: cannot find fighter',
        fighterId: 'undefined',
        winOver: [],
    };
    // Fallback to fighterError in case find returns undefined
    const fighterPath = path.map(node => {
        return (fighters.find(fighter => fighter.fighterId === node) || fighterError)
    });
    return fighterPath
}
import { FighterType } from '../types';
import { fighters, fighterGraph } from "./data";

/**
 * Use BFS or Dijkstra's algo to find the shortest path of victory
 * @param startId Starting node. fighterId as the key.
 * @param endId Destination node. fighterId as the key.
 */
const bfs = (startId: string, endId: string): string[] => {
    // BFS
    const queue = [{
        vertex: startId,
        path: [startId]
    }];
    const visited = new Set();
    while (queue.length) {
        const { vertex, path } = queue.shift() || { vertex: '0', path: [] }; // In case undefined
        visited.add(vertex);
        for (const node of fighterGraph[vertex]) {
            if (node === endId) {
                return path.concat(endId);
            } else {
                if (!visited.has(node)) {
                    visited.add(node);
                    queue.push(
                        {
                            vertex: node,
                            path: path.concat(node)
                        }
                    )
                }
            }

        }
    }
    return []
}

const pathToFighters = (path: string[]): FighterType[] => {
    // Convert path to an array of FighterType.
    const fighterError = {
        fighterName: 'Error: cannot find fighter',
        fighterId: 'undefined',
        winOver: [],
    };
    // Fallback to fighterError in case find returns undefined
    const fighterPath = path.map(vertex => {
        return (fighters.find(fighter => fighter.fighterId === vertex) || fighterError)
    });
    return fighterPath
}

export const mmaMath = (startId: string, endId: string): FighterType[] => {
    const path = bfs(startId, endId);
    return pathToFighters(path);
}
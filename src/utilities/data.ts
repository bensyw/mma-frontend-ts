import { FighterType } from '../types';

/**
 * Mock data.
 */
export const fighters: FighterType[] = [
    {
        fighterName: 'A',
        fighterId: '1',
        winOver: ['2', '4'],
    },
    {
        fighterName: 'B',
        fighterId: '2',
        winOver: ['3', '5'],
    },
    {
        fighterName: 'C',
        fighterId: '3',
        winOver: [],
    },
    {
        fighterName: 'D',
        fighterId: '4',
        winOver: ['2', '5'],
    },
    {
        fighterName: 'E',
        fighterId: '5',
        winOver: ['3'],
    },
]
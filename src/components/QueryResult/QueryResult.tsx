import React from 'react'
import { FighterType } from "../../types/FighterType";
interface QueryResultProps {
    fighterPath: FighterType[] | null;
};

export const QueryResult: React.FunctionComponent<QueryResultProps> = ({ fighterPath }) => {

    const fighterPathToList = (fighterPath: FighterType[]): string[] => {
        if (fighterPath.length <= 1) {
            return ['Cannot find a path of victory.']
        } else {
            const winner = fighterPath.slice(0, -1);
            const loser = fighterPath.slice(1);
            const result = winner.map((value, index) => {
                return `${value.fighterName} def. ${loser[index].fighterName}`
            })
            return result
        }
    }

    const result = fighterPath === null ?
        (<b>Enter fighter names</b>) :
        (
            <ul>
                {fighterPathToList(fighterPath).map((value, index) => {
                    return (<li key={index}> {value} </li>)
                })}
            </ul>
        )

    return (
        <div className="query-result">
            {result}
        </div>
    )
}
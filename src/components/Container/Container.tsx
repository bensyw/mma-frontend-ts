import React, { useState } from 'react'
import { ComboBox } from "../ComboBox";
import { QueryButton } from "../QueryButton";
import { QueryResult } from "../QueryResult";
import { FighterType } from "../../types/FighterType";
import { mmaMath } from "../../utilities/";

export const Container: React.FunctionComponent<{}> = () => {
    const [fighterA, setFighterA] = useState<FighterType | null>(null);
    const [fighterB, setFighterB] = useState<FighterType | null>(null);
    const [message, setMessage] = useState<string>('MMA Math')

    const handleOnChangeFighterA = (event: React.ChangeEvent<{}>, newValue: FighterType | null) => {
        setFighterA(newValue);
    };

    const handleOnChangeFighterB = (event: React.ChangeEvent<{}>, newValue: FighterType | null) => {
        setFighterB(newValue);
    };

    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const fighterAFullName = fighterA != null ? `${fighterA.fighterName}` : 'null';
        const fighterBFullName = fighterB != null ? `${fighterB.fighterName}` : 'null';
        const newMessage = `Prove that ${fighterAFullName} can beat ${fighterBFullName}`;
        if (fighterA && fighterB) {
            const result = mmaMath(fighterA?.fighterId, fighterB?.fighterId);
            console.log(result);
        }
        setMessage(newMessage);
    }

    return (
        <>
            <ComboBox handleOnChange={handleOnChangeFighterA} value={fighterA} />
            <ComboBox handleOnChange={handleOnChangeFighterB} value={fighterB} />
            <QueryButton handleOnClick={handleOnClick} />
            <QueryResult message={message} />
        </>
    )
}
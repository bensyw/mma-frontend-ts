import React, { useState } from 'react'
import { ComboBox } from "../ComboBox";
import { QueryButton } from "../QueryButton";
import { QueryResult } from "../QueryResult";
import { FighterType } from "../../types/FighterType";
import { mmaMath } from "../../utilities/";

export const Container: React.FunctionComponent<{}> = () => {
    const [fighterA, setFighterA] = useState<FighterType | null>(null);
    const [fighterB, setFighterB] = useState<FighterType | null>(null);
    const [fighterPath, setfighterPath] = useState<FighterType[] | null>(null);

    const handleOnChangeFighterA = (event: React.ChangeEvent<{}>, newValue: FighterType | null) => {
        setFighterA(newValue);
    };

    const handleOnChangeFighterB = (event: React.ChangeEvent<{}>, newValue: FighterType | null) => {
        setFighterB(newValue);
    };

    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (fighterA && fighterB) {
            const newFighterPath = mmaMath(fighterA.fighterId, fighterB.fighterId);
            setfighterPath(newFighterPath);
        }
    }

    return (
        <>
            <ComboBox handleOnChange={handleOnChangeFighterA} value={fighterA} />
            <ComboBox handleOnChange={handleOnChangeFighterB} value={fighterB} />
            <QueryButton handleOnClick={handleOnClick} />
            <QueryResult fighterPath={fighterPath} />
        </>
    )
}
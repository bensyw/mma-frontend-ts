import React from 'react'
import { ComboBox } from "../ComboBox";
import { QueryButton } from "../QueryButton";
import { QueryResult } from "../QueryResult";

export const Container: React.FunctionComponent<{}> = () => {
    return (
        <>
            <ComboBox />
            <ComboBox />
            <QueryButton />
            <QueryResult />
        </>
    )
}
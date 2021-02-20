import React from 'react'
import { ComboBox } from "../ComboBox";
import { QueryButton } from "../QueryButton";

export const Container: React.FunctionComponent<{}> = () => {
    return (
        <>
            <ComboBox />
            <ComboBox />
            <QueryButton />
        </>
    )
}
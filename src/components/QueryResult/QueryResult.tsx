import React from 'react'
interface QueryResultProps {
    message: string;
};

export const QueryResult: React.FunctionComponent<QueryResultProps> = ({ message }) => {

    return (
        <div className="mock-result">
            {message}
        </div>
    )
}
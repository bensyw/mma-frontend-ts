import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }),
);

interface QueryButtonProps {
    handleOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const QueryButton: React.FunctionComponent<QueryButtonProps> = ({ handleOnClick }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary" onClick={handleOnClick}>
                Primary
            </Button>
        </div>
    );
}
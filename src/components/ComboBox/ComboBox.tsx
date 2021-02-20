import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { FilmOptionType } from "../../types/FilmOptionType";
import { fuzzySearch } from "../../utilities";
import throttle from 'lodash/throttle';

const styles = { width: 300 };

/**
 * A search field for fighter names, with autocompletion.
 */
export const ComboBox: React.FunctionComponent<{}> = () => {
    const [value, setValue] = useState<FilmOptionType | null>(null);
    const [inputValue, setInputValue] = useState('');
    // For async requests
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState<FilmOptionType[]>([]);
    const loading = open && options.length === 0;

    const fetch = throttle(async (inputValue: string, active: boolean) => {
        const response = await fuzzySearch(inputValue);
        const movies = response.map(ref => ref.item);
        if (active) {
            setOptions(movies);
        }
    }, 200)

    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        fetch(inputValue, active);

        return () => {
            active = false;
        }
    }, [loading, inputValue, fetch])

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    const handleOnChange = (event: React.ChangeEvent<{}>, newValue: FilmOptionType | null) => {
        setValue(newValue);
    };
    const handleOnInputChange = (event: React.ChangeEvent<{}>, newInputValue: string) => {
        setInputValue(newInputValue);
    };

    return (
        <div>
            <div>{`value: ${value != null ? `'{title: ${value.title}, year: ${value.year}}'` : 'null'}`}</div>
            <div>{`inputValue: '${inputValue}'`}</div>
            <br />
            <Autocomplete
                id='fighter-search-combo-box'
                style={styles}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                value={value}
                onChange={handleOnChange}
                inputValue={inputValue}
                onInputChange={handleOnInputChange}
                options={options}
                getOptionLabel={(option) => option.title}
                getOptionSelected={(option, value) => option.title === value.title}
                loading={loading}
                renderInput={(params) =>
                    <TextField {...params}
                        label="Fighter Name"
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            ),
                        }}
                    />}
            />
        </div>
    )
}

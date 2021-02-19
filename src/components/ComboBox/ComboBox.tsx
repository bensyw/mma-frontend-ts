import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const options = ['Fighter 1', 'Fighter 2'];
const styles = { width: 300 };

/**
 * A search field for fighter names, with autocompletion.
 */
export const ComboBox: React.FunctionComponent<{}> = () => {
    const [value, setValue] = useState<string | null>(options[0]);
    const [inputValue, setInputValue] = useState('');

    const handleOnChange = (event: React.ChangeEvent<{}>, newValue: string | null) => {
        setValue(newValue);
    };
    const handleOnInputChange = (event: React.ChangeEvent<{}>, newInputValue: string) => {
        setInputValue(newInputValue);
    };

    return (
        <div>
            <div>{`value: ${value != null ? `'${value}'` : 'null'}`}</div>
            <div>{`inputValue: '${inputValue}'`}</div>
            <br />
            <Autocomplete
                value={value}
                onChange={handleOnChange}
                inputValue={inputValue}
                onInputChange={handleOnInputChange}
                id='fighter-search-combo-box'
                options={options}
                style={styles}
                renderInput={(params) =>
                    <TextField {...params} label="Fighter Name" variant="outlined" />}
            />
        </div>
    )
}
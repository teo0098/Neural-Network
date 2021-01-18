import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import inputStyles from '../../../styles/inputStyles';

const LearningProcess = () => {
    return (
        <div>
            <form noValidate style={{display: 'flex', flexDirection: 'column'}}>
                <TextField inputProps={{min: 0, step: 0.1}} style={inputStyles} type="number" label="Współczynnik uczenia" variant="outlined" />
                <TextField inputProps={{min: 0, step: 0.1}} style={inputStyles} type="number" label="Współczynnik momentu" variant="outlined" />
                <TextField inputProps={{min: 0, step: 0.1}} style={inputStyles} type="number" label="Maksymalna wartość wag +/-" variant="outlined" />
                <FormControl style={inputStyles}>
                    <InputLabel id="demo-simple-select-label">Rozmiar cyklu uczącego</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={"n"}>n</MenuItem>
                    </Select>
                </FormControl>
                <FormControlLabel
                    style={inputStyles}
                    control={<Checkbox color="primary" name="patterns" />}
                    label="Mieszanie wzorców"
                />
            </form>
        </div>
    )
}

export default LearningProcess;
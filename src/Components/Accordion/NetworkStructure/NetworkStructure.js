import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import inputStyles from '../../../styles/inputStyles';

const NetworkStructure = () => {
    return (
        <div>
            <form noValidate style={{display: 'flex', flexDirection: 'column'}}>
                <TextField inputProps={{min: 0}} style={inputStyles} type="number" label="Warstwa wejściowa" variant="outlined" />
                <TextField inputProps={{min: 0}} style={inputStyles} type="number" label="Warstwa wyjściowa" variant="outlined" />
                <TextField inputProps={{min: 0}} style={inputStyles} type="number" label="Warstwa ukryta 1" variant="outlined" />
                <TextField inputProps={{min: 0}} style={inputStyles} type="number" label="Warstwa ukryta 2" variant="outlined" />
                <TextField inputProps={{min: 0}} style={inputStyles} type="number" label="Warstwa ukryta 3" variant="outlined" />
                <FormControlLabel
                    style={inputStyles}
                    control={<Checkbox color="primary" name="bias" />}
                    label="Bias"
                />
            </form>
        </div>
    )
}

export default NetworkStructure;
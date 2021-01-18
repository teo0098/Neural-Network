import React from 'react';
import TextField from '@material-ui/core/TextField';

const TestingProcess = () => {
    return (
        <div>
             <form noValidate>
                <TextField inputProps={{min: 0}} type="number" label="Częstotliwość testowania" variant="outlined" />
            </form>
        </div>
    )
}

export default TestingProcess;
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'

import mapDispatchToProps from '../../../store/mapDispatchToProps'

const TestingProcess = ({ testing_frequency, change_testing_frequency }) => {
    return (
        <div>
             <form noValidate>
                <TextField value={testing_frequency} onChange={e => change_testing_frequency(e.target.value)} inputProps={{min: 0}} type="number" label="Częstotliwość testowania" variant="outlined" />
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    testing_frequency: state.testing_frequency
})

export default connect(mapStateToProps, mapDispatchToProps)(TestingProcess);
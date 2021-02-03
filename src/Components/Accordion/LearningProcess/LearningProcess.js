import React from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'

import inputStyles from '../../../styles/inputStyles';
import mapDispatchToProps from '../../../store/mapDispatchToProps'

const LearningProcess = ({
    learning_rate,
    max_weights_value,
    change_learning_rate,
    change_max_weights_value
}) => {
    return (
        <form noValidate style={{display: 'flex', flexDirection: 'column'}}>
            <TextField onChange={e => change_learning_rate(+e.target.value)} value={learning_rate} inputProps={{min: 0, step: 0.1}} style={inputStyles} type="number" label="Współczynnik uczenia" variant="outlined" />
            <TextField onChange={e => change_max_weights_value(+e.target.value)} value={max_weights_value} inputProps={{min: 0, step: 0.1}} style={inputStyles} type="number" label="Maksymalna wartość wag +/-" variant="outlined" />
        </form>
    )
}

const mapStateToProps = state => ({
    learning_rate: state.learning_rate,
    max_weights_value: state.max_weights_value,
})

export default connect(mapStateToProps, mapDispatchToProps)(LearningProcess);
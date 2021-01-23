import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux'

import inputStyles from '../../../styles/inputStyles';
import mapDispatchToProps from '../../../store/mapDispatchToProps'

const NetworkStructure = ({
    input_layer_neurons,
    hidden_layer_1_neurons,
    hidden_layer_2_neurons,
    output_layer_neurons,
    bias,
    change_bias,
    change_hidden_layer_1_neurons,
    change_hidden_layer_2_neurons
}) => {
    return (
        <div>
            <form noValidate style={{display: 'flex', flexDirection: 'column'}}>
                <TextField value={input_layer_neurons} disabled inputProps={{min: 0}} style={inputStyles} type="number" label="Warstwa wejściowa" variant="outlined" />
                <TextField value={output_layer_neurons} disabled inputProps={{min: 0}} style={inputStyles} type="number" label="Warstwa wyjściowa" variant="outlined" />
                <TextField onChange={e => change_hidden_layer_1_neurons(e.target.value)} value={hidden_layer_1_neurons} inputProps={{min: 0}} style={inputStyles} type="number" label="Warstwa ukryta 1" variant="outlined" />
                <TextField onChange={e => change_hidden_layer_2_neurons(e.target.value)} value={hidden_layer_2_neurons} inputProps={{min: 0}} style={inputStyles} type="number" label="Warstwa ukryta 2" variant="outlined" />
                <FormControlLabel
                   onChange={() => bias === 0 ? change_bias(1) : change_bias(0)}
                    style={inputStyles}
                    control={<Checkbox checked={bias === 0 ? false : true} color="primary" name="bias" />}
                    label="Bias"
                />
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    input_layer_neurons: state.input_layer_neurons,
    hidden_layer_1_neurons: state.hidden_layer_1_neurons,
    hidden_layer_2_neurons: state.hidden_layer_2_neurons,
    output_layer_neurons: state.output_layer_neurons,
    bias: state.bias
})

export default connect(mapStateToProps, mapDispatchToProps)(NetworkStructure);
import {
    change_bias,
    change_hidden_layer_1_neurons,
    change_hidden_layer_2_neurons,
    change_learning_rate,
    change_max_weights_value,
    change_testing_frequency
} from './actionCreators'

const mapDispatchToProps = dispatch => ({
    change_bias: newBias => dispatch(change_bias(newBias)),
    change_hidden_layer_1_neurons: new_hidden_layer_1_neurons => dispatch(change_hidden_layer_1_neurons(new_hidden_layer_1_neurons)),
    change_hidden_layer_2_neurons: new_hidden_layer_2_neurons => dispatch(change_hidden_layer_2_neurons(new_hidden_layer_2_neurons)),
    change_learning_rate: new_learning_rate => dispatch(change_learning_rate(new_learning_rate)),
    change_max_weights_value: new_max_weights_value => dispatch(change_max_weights_value(new_max_weights_value)),
    change_testing_frequency: new_testing_frequency => dispatch(change_testing_frequency(new_testing_frequency))
})

export default mapDispatchToProps
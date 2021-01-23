import actionTypes from './actionTypes'

export const change_bias = newBias => ({
    type: actionTypes.CHANGE_BIAS,
    bias: newBias
})

export const change_hidden_layer_1_neurons = new_hidden_layer_1_neurons => ({
    type: actionTypes.CHANGE_HIDDEN_LAYER_1_NEURONS,
    hidden_layer_1_neurons: new_hidden_layer_1_neurons
})

export const change_hidden_layer_2_neurons = new_hidden_layer_2_neurons => ({
    type: actionTypes.CHANGE_HIDDEN_LAYER_2_NEURONS,
    hidden_layer_2_neurons: new_hidden_layer_2_neurons
})

export const change_learning_rate = new_learning_rate => ({
    type: actionTypes.CHANGE_LEARNING_RATE,
    learning_rate: new_learning_rate
})

export const change_max_weights_value = new_max_weights_value => ({
    type: actionTypes.CHANGE_MAX_WEIGHTS_VALUE,
    max_weights_value: new_max_weights_value
})

export const change_testing_frequency = new_testing_frequency => ({
    type: actionTypes.CHANGE_TESTING_FREQUENCY,
    testing_frequency: new_testing_frequency
})
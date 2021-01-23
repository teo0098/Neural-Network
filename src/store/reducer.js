import initialState from './initialState'
import actionTypes from './actionTypes'

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_BIAS:
            return {
                ...state,
                bias: action.bias
            }
        case actionTypes.CHANGE_HIDDEN_LAYER_1_NEURONS:
            return {
                ...state,
                hidden_layer_1_neurons: action.hidden_layer_1_neurons
            }
        case actionTypes.CHANGE_HIDDEN_LAYER_2_NEURONS:
            return {
                ...state,
                hidden_layer_2_neurons: action.hidden_layer_2_neurons
            }
        case actionTypes.CHANGE_LEARNING_RATE:
            return {
                ...state,
                learning_rate: action.learning_rate
            }
        case actionTypes.CHANGE_MAX_WEIGHTS_VALUE:
            return {
                ...state,
                max_weights_value: action.max_weights_value
            }
        case actionTypes.CHANGE_TESTING_FREQUENCY:
            return {
                ...state,
                testing_frequency: action.testing_frequency
            }
        default:
            return state
    }
}

export default reducer
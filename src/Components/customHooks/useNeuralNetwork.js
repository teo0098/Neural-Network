import { random } from 'mathjs'

const useNeuralNetwork = ({ 
    input_layer_neurons,
    hidden_layer_1_neurons,
    hidden_layer_2_neurons,
    output_layer_neurons,
    epochs: epochs_number,
    learning_rate: learning_r,
    bias: b,
    max_weights_value
   }) => {

    const input_layer_n = input_layer_neurons
    const hidden_layer_1_n = hidden_layer_1_neurons
    const hidden_layer_2_n = hidden_layer_2_neurons
    const output_layer_n = output_layer_neurons
    const epochs = epochs_number
    const learning_rate = learning_r
    const weights1 = [...Array(input_layer_n * hidden_layer_1_n)].map( value => {
        return value = random(max_weights_value * -1, max_weights_value)
    })
    const weights2 = [...Array(hidden_layer_1_n * hidden_layer_2_n)].map( value => {
        return value = random(max_weights_value * -1, max_weights_value)
    })
    const weights3 = [...Array(hidden_layer_2_n * output_layer_n)].map( value => {
        return value = random(max_weights_value * -1, max_weights_value)
    })
    /*
    const weights1 = random([input_layer_n, hidden_layer_1_n], -1 * max_weights_value, max_weights_value)
    const weights2 = random([hidden_layer_1_n, hidden_layer_2_n], -1 * max_weights_value, max_weights_value)
    const weights3 = random([hidden_layer_2_n, output_layer_n], -1 * max_weights_value, max_weights_value)
    */
    const bias = b

    return { epochs, learning_rate, weights1, weights2, weights3, bias, input_layer_n, hidden_layer_1_n, hidden_layer_2_n, output_layer_n }
}

export default useNeuralNetwork
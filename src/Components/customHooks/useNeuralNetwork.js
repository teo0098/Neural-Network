import { random } from 'mathjs'

const useNeuralNetwork = (input_n, hidden_n, output_n, epocs_number, learning_r, b) => {

    const input_neurons = input_n
    const hidden_neurons = hidden_n
    const output_neurons = output_n
    const epocs = epocs_number
    const learning_rate = learning_r
    const output = 0
    const weight1 = random([input_neurons, hidden_neurons], -1, 1)
    const weight2 = random([hidden_neurons, output_neurons], -1, 1)
    const bias = b

    return { input_neurons, hidden_neurons, output_neurons, epocs, learning_rate, output, weight1, weight2, bias }
}

export default useNeuralNetwork
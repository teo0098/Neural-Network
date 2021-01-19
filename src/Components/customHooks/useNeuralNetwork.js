import { random, matrix } from 'mathjs'

const useNeuralNetwork = (input_n, hidden_n, hidden_n_2, output_n, epochs_number, learning_r, b) => {

    const input_neurons = input_n
    const hidden_neurons = hidden_n
    const hidden_neurons_2 = hidden_n_2
    const output_neurons = output_n
    const epochs = epochs_number
    const learning_rate = learning_r
    const weights1 = matrix(random([input_neurons, hidden_neurons], -1, 1))
    const weights2 = matrix(random([hidden_neurons, hidden_neurons_2], -1, 1))
    const weights3 = matrix(random([hidden_neurons_2, output_neurons], -1, 1))
    const bias = b

    console.log('Input layer neurons amount', input_neurons)
    console.log('Hidden layer neurons amount', hidden_neurons)
    console.log('Hidden layer 2 neurons amount', hidden_neurons_2)
    console.log('Output layer neurons amount', output_neurons)
    console.log('Epocs amount', epochs)
    console.log('Network learning rate', learning_rate)
    console.log('Weights from input layer to hidden layer', weights1)
    console.log('Weights from hidden layer to hidden layer 2', weights2)
    console.log('Weights from hidden layer 2 to output layer', weights3)
    console.log('Bias', bias)

    return { epochs, learning_rate, weights1, weights2, weights3, bias }
}

export default useNeuralNetwork
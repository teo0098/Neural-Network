import { multiply, subtract, dotMultiply, transpose, add } from 'mathjs'

import useActivationFunction from './useActivationFunction'

const useTrainNetwork = () => {

    const { sigmoidFunction } = useActivationFunction()

    const train = (input, target, epochs, weights1, weights2, weights3, learning_rate) => {
        for (let i = 0; i < epochs; i++) {
            let hidden_layer = multiply(input, weights1)
            hidden_layer = hidden_layer.map(single_weight => sigmoidFunction(single_weight, false))
            let hidden_layer_2 = multiply(hidden_layer, weights2)
            hidden_layer_2 = hidden_layer_2.map(single_weight => sigmoidFunction(single_weight, false))
            let output_layer = multiply(hidden_layer_2, weights3)
            output_layer = output_layer.map(single_weight => sigmoidFunction(single_weight, false))

            const output_error = subtract(target, output_layer)
            const output_delta = dotMultiply(output_error, output_layer.map(single_weight => sigmoidFunction(single_weight, true)))
            const hidden_error_2 = multiply(output_delta, transpose(weights3))
            const hidden_delta_2 = dotMultiply(hidden_error_2, hidden_layer_2.map(single_weight => sigmoidFunction(single_weight, true)))
            const hidden_error = multiply(hidden_delta_2, transpose(weights2))
            const hidden_delta = dotMultiply(hidden_error, hidden_layer.map(single_weight => sigmoidFunction(single_weight, true)))

            weights1 = add(weights1, multiply(transpose(input), multiply(hidden_delta, learning_rate)))
            weights2 = add(weights2, multiply(transpose(hidden_layer), multiply(hidden_delta_2, learning_rate)))
            weights3 = add(weights3, multiply(transpose(hidden_layer_2), multiply(output_delta, learning_rate)))

            console.log(`Error: ${output_layer}`)
        }
    }

    return { train }
}

export default useTrainNetwork
import { multiply } from 'mathjs'

import useActivationFunction from './useActivationFunction'

const usePredictResult = () => {

    const { sigmoidFunction } = useActivationFunction()

    const predict = (input, weights1, weights2, weights3) => {
        //console.log(`Input layer data`, input)
        //console.log(`Weights from input layer to hidden layer`, weights1)
        //console.log(`Weights from hidden layer to hidden layer 2`, weights2)
        //console.log(`Weights from hidden layer 2 to output layer`, weights3)

        let hidden_layer = multiply(input, weights1)

        //console.log(`Hidden layer before sigmoid function activation`, hidden_layer)

        hidden_layer = hidden_layer.map(single_weight => sigmoidFunction(single_weight, false))

        //console.log(`Hidden layer after sigmoid function activation`, hidden_layer)

        let hidden_layer_2 = multiply(hidden_layer, weights2)

        //console.log(`Hidden layer 2 before sigmoid function activation`, hidden_layer_2)

        hidden_layer_2 = hidden_layer_2.map(single_weight => sigmoidFunction(single_weight, false))

        //console.log(`Hidden layer 2 after sigmoid function activation`, hidden_layer_2)

        let output_layer = multiply(hidden_layer_2, weights3)

        //console.log('Output layer before sigmoid function activation', output_layer)

        output_layer = output_layer.map(single_weight => sigmoidFunction(single_weight, false))

        //console.log('Output layer after sigmoid function activation', output_layer)

        return output_layer
    }

    return { predict }
}

export default usePredictResult
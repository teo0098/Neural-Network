import { multiply, subtract, dotMultiply, transpose, add } from 'mathjs'

import useActivationFunction from './useActivationFunction'

const useTrainNetwork = () => {

    const { sigmoidFunction } = useActivationFunction()

    const assignLayerValues = (prev_layer, layer_neurons, prev_layer_neurons, weights, bias) => {
        let weights_index = 0
        const filledLayer = [...Array(layer_neurons)].map( value => {
            value = 0
            for (let i = 0; i < prev_layer_neurons; i++) {
                value += (prev_layer[i] * weights[weights_index++])
            }
            value = sigmoidFunction(value + bias, false)
            return value
        })
        return filledLayer
    }

    const train = (data, epochs, weights1, weights2, weights3, learning_rate, bias, input_layer_n, hidden_layer_1_n, hidden_layer_2_n, output_layer_n) => {
        for (let i = 0; i < epochs; i++) {

            // * FORWARD PROPAGATION

            const hidden_layer = assignLayerValues(data[0].input, hidden_layer_1_n, input_layer_n, weights1, bias)
            const hidden_layer_2 = assignLayerValues(hidden_layer, hidden_layer_2_n, hidden_layer_1_n, weights2, bias)
            const output_layer = assignLayerValues(hidden_layer_2, output_layer_n, hidden_layer_2_n, weights3, bias)

            // * OUTPUT ERROR

            data[0].learning_error = data[0].target - output_layer[0]

            // * BACK PROPAGATION

            

            /*
            // * FORWARD PROPAGATION

            let hidden_layer = multiply(input, weights1) // * hidden_layer - warstwa ukryta 1 zawiera teraz nowe dane w wyniku operacji mnozenia macierz danych wejsciowych z ich wagami pomiedzy wartswa wejsciowa a warstwa ukryta 1
            hidden_layer = hidden_layer.map(value => sigmoidFunction(value + bias, false)) // * hidden_layer - warstwa ukryta 1 zawiera teraz nowe dane powstale w wyniku aktywacji neuronow poprzez funkcje aktywacji
            let hidden_layer_2 = multiply(hidden_layer, weights2) // * hidden_layer_2 - warstwa ukryta 2 zawiera teraz nowe dane w wyniku operacji mnozenia macierz danych z warstwy ukrytej 1 z wagami pomiedzy warstwa ukryta 1 a warstwa ukryta 2
            hidden_layer_2 = hidden_layer_2.map(value => sigmoidFunction(value + bias, false)) // * hidden_layer_2 - warstwa ukryta 2 zawiera teraz nowe dane powstale w wyniku aktywacji neuronow poprzez funkcje aktywacji
            let output_layer = multiply(hidden_layer_2, weights3) // * output_layer - warstwa wyjsciowa zawiera teraz nowe dane w wyniku operacji mnozenia macierz danych z warstwy ukrytej 2 z wagami pomiedzy warstwa ukryta 2 a warstwa wyjsciowa
            output_layer = output_layer.map(value => sigmoidFunction(value + bias, false)) // * output_layer - warstwa wyjsciowa zawiera teraz nowe dane powstale w wyniku aktywacji neuronow poprzez funkcje aktywacji

            // * BACK PROPAGATION

            const output_error = subtract(target, output_layer) // * outout_error - obliczamy bledy na warstwie wyjsciowej w porownaniu do naszego poszukiwanego celu
            const output_delta = dotMultiply(output_error, output_layer.map(value => sigmoidFunction(value, true))) // * output_delta - obliczamy bledy popelnione przez kazdy z neuronow w warstwie wyjsciowej
            const hidden_error_2 = multiply(output_delta, transpose(weights3)) // * hidden_error_2 - obliczamy bledy na warstwie ukrytej 2
            const hidden_delta_2 = dotMultiply(hidden_error_2, hidden_layer_2.map(value => sigmoidFunction(value, true))) // * hidden_delta_2 - obliczamy bledy popelnione przez kazdy z neuronow w warstwie ukrytej 2
            const hidden_error = multiply(hidden_delta_2, transpose(weights2)) // * hidden_error - obliczamy bledy na warstwie ukrytej 1
            const hidden_delta = dotMultiply(hidden_error, hidden_layer.map(value => sigmoidFunction(value, true))) // * hidden_delta - obliczamy bledy popelnione przez kazdy z neuronow w warstwie ukrytej 1

            // * Aktualizujemy wagi aby siec coraz precyzyjniej sie uczyla

            weights1 = add(weights1, multiply(transpose(input), multiply(hidden_delta, learning_rate)))
            weights2 = add(weights2, multiply(transpose(hidden_layer), multiply(hidden_delta_2, learning_rate)))
            weights3 = add(weights3, multiply(transpose(hidden_layer_2), multiply(output_delta, learning_rate)))

            console.log(`Error: ${output_error}`)
            console.log(`Nauka: ${output_layer}`)
            */
        }
    }

    return { train }
}

export default useTrainNetwork
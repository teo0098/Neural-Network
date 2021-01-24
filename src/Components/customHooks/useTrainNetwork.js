import { multiply, subtract, dotMultiply, transpose, add, mean } from 'mathjs'

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

    const assignLayerErrors = (layer_neurons, next_layer_neurons, next_layer_errors, weights) => {
        const layerErrors = [...Array(layer_neurons)].map( (value, index) => {
            value = 0
            for (let i = 0; i < next_layer_neurons; i++) {
                value += (next_layer_errors[i] * weights[(i * layer_neurons) + index])
            }
            return value
        })
        return layerErrors
    }

    const upadateWeights = (weights, learning_rate, layer_errors, layer, layer_n) => {
        let layer_index = 0
        let layer_errors_index = 0
        const alteredWeights = weights.map( weight => {
            weight = weight + (learning_rate * layer_errors[layer_errors_index] * layer[layer_index])
            layer_index++
            if (layer_index === layer_n) {
                layer_index = 0
                layer_errors_index++
            }
            return weight
        })
        return alteredWeights
    }

    const train = (data, epochs, weights1, weights2, weights3, learning_rate, bias, input_layer_n, hidden_layer_1_n, hidden_layer_2_n, output_layer_n) => {
        for (let j = 0; j < data.length; j++) {
            for (let i = 0; i < epochs; i++) {

                // * FORWARD PROPAGATION
    
                const hidden_layer_1 = assignLayerValues(data[j].input, hidden_layer_1_n, input_layer_n, weights1, bias)
                const hidden_layer_2 = assignLayerValues(hidden_layer_1, hidden_layer_2_n, hidden_layer_1_n, weights2, bias)
                const output_layer = assignLayerValues(hidden_layer_2, output_layer_n, hidden_layer_2_n, weights3, bias)
    
                // * OUTPUT ERROR
    
                data[j].learning_error = data[j].target - mean(output_layer)
    
                // * BACK PROPAGATION
    
                let hidden_layer_2_errors = [...Array(hidden_layer_2_n)].map( (value, index) => {
                    return value = data[j].learning_error + weights3[index]
                })
                let hidden_layer_1_errors = assignLayerErrors(hidden_layer_1_n, hidden_layer_2_n, hidden_layer_2_errors, weights2)
                hidden_layer_2_errors = hidden_layer_2_errors.map( value => sigmoidFunction(value + bias, true))
                hidden_layer_1_errors = hidden_layer_1_errors.map( value => sigmoidFunction(value + bias, true))
    
                // * UPDATING WEIGHTS
    
                weights1 = upadateWeights(weights1, learning_rate, hidden_layer_1_errors, data[j].input, input_layer_n)
                weights2 = upadateWeights(weights2, learning_rate, hidden_layer_2_errors, hidden_layer_1, hidden_layer_1_n)
                weights3 = weights3.map( (weight, index) => weight = weight + (learning_rate * data[j].learning_error * hidden_layer_2[index]))
    
                data[j].learning_success = mean(output_layer)
    
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
            console.log(`Dane nr ${j + 1}; Error: `, data[j].learning_error)
            console.log(`Dane nr ${j + 1}; Nauka: `, data[j].learning_success)
            console.log(`Dane nr ${j + 1}; Cel: `, data[j].target)
        }
    }

    return { train }
}

export default useTrainNetwork
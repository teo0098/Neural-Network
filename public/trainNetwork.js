const sigmoidFunction = (argument, derivative) => {
    const y = 1 / (1 + Math.exp(argument * -1))
    return derivative ? y * (1 - y) : y
}

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

self.addEventListener('message', e => {
    const train = (data, {
        weights1, 
        weights2, 
        weights3, 
        epochs, 
        learning_rate, 
        bias, 
        input_layer_n, 
        hidden_layer_1_n, 
        hidden_layer_2_n, 
        output_layer_n
    }) => {
        for (let j = 0; j < data.length; j++) {
            for (let i = 0; i < epochs; i++) {
    
                // * FORWARD PROPAGATION
    
                const hidden_layer_1 = assignLayerValues(data[j].input, hidden_layer_1_n, input_layer_n, weights1, bias)
                const hidden_layer_2 = assignLayerValues(hidden_layer_1, hidden_layer_2_n, hidden_layer_1_n, weights2, bias)
                const output_layer = assignLayerValues(hidden_layer_2, output_layer_n, hidden_layer_2_n, weights3, bias)
    
                // * OUTPUT ERROR
    
                data[j].learning_error = data[j].target - (output_layer[0] * data[j].target)
    
                // * BACK PROPAGATION
    
                let hidden_layer_2_errors = [...Array(hidden_layer_2_n)].map( (value, index) => {
                    return value = data[j].learning_error * weights3[index]
                })
                let hidden_layer_1_errors = assignLayerErrors(hidden_layer_1_n, hidden_layer_2_n, hidden_layer_2_errors, weights2)
                hidden_layer_2_errors = hidden_layer_2_errors.map( value => sigmoidFunction(value + bias, true))
                hidden_layer_1_errors = hidden_layer_1_errors.map( value => sigmoidFunction(value + bias, true))
    
                // * UPDATING WEIGHTS
    
                weights1 = upadateWeights(weights1, learning_rate, hidden_layer_1_errors, data[j].input, input_layer_n)
                weights2 = upadateWeights(weights2, learning_rate, hidden_layer_2_errors, hidden_layer_1, hidden_layer_1_n)
                weights3 = weights3.map( (weight, index) => weight = weight + (learning_rate * data[j].learning_error * hidden_layer_2[index]))
    
                data[j].learning_success = data[j].target - data[j].learning_error
            }
            data[j].learning_error = data[j].learning_error < 0 ? data[j].learning_error * -1 : data[j].learning_error
        }
        return data
    }
    const d = train(e.data[0], e.data[1])
    self.postMessage(JSON.stringify(d))
})
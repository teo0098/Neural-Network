import { exp } from 'mathjs'

const useActivationFunction = () => {

    const sigmoidFunction = (argument, derivative) => {
        const pattern = 1 / (1 + exp(argument * -1))
        return derivative ? pattern * (1 - pattern) : pattern
    }

    return { sigmoidFunction }
}

export default useActivationFunction
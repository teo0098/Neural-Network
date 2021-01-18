import { exp } from 'mathjs'

const useActivationFunction = () => {

    const sigmoidFunction = (argument, derivative) => {
        const pattern = 1 / (1 + exp(argument * -1))
        if (!derivative) return pattern
        return pattern * (1 - pattern)
    }

    return { sigmoidFunction }
}

export default useActivationFunction
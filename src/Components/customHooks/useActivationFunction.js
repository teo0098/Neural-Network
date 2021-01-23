import { exp } from 'mathjs'

const useActivationFunction = () => {

    /**
     * * Funkcja aktywacji sluzy do obliczenia wartosci wyjscia neuronu
     * 
     * @param {number} argument - argument x, wartosc liczbowa, ktora bedzie podawana jako argument do funkcji sigmoidalnej w celu obliczenia wartosci y
     * @param {boolean} derivative - wartosc okreslajaca czy ma byc obliczana pochodna z funkcji sigmoidalnej czy tez nie
     * @return {number} wynik obliczony z funkcji sigmoidalnej lub jej pochodnej dla podanego argumentu
     */

    const sigmoidFunction = (argument, derivative) => {
        const y = 1 / (1 + exp(argument * -1))
        return derivative ? y * (1 - y) : y
    }

    return { sigmoidFunction }
}

export default useActivationFunction
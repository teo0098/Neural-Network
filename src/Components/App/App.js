import { matrix } from 'mathjs'

import useNeuralNetwork from '../customHooks/useNeuralNetwork';
import usePredictResult from '../customHooks/usePredictResult';
import useTrainNetwork from '../customHooks/useTrainNetwork';
import Navigation from '../Navigation/Navigation'

const input = matrix([[0,0], [0,1], [1,0], [1,1]])
const target = matrix([[0], [1], [1], [0]])

const App = () => {

  const { weights1, weights2, weights3, epochs, learning_rate } = useNeuralNetwork(2, 4, 4, 1, 50000, 0.5, true)
  const { predict } = usePredictResult()
  const { train } = useTrainNetwork()

  return (
    <>
      <Navigation />
      {train(input, target, epochs, weights1, weights2, weights3, learning_rate)}
      {console.log(predict(input, weights1, weights2, weights3))}
    </>
  );
}

export default App;
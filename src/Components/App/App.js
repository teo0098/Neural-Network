import { matrix } from 'mathjs'
import { connect } from 'react-redux'

import useNeuralNetwork from '../customHooks/useNeuralNetwork';
import useTrainNetwork from '../customHooks/useTrainNetwork';
import Navigation from '../Navigation/Navigation'

//const input = matrix([[0,0], [0,1], [1,0], [1,1]])
//const target = matrix([[0], [1], [1], [0]])

const data = [
  {
    input: [0,0],
    target: 0,
    learning_error: undefined,
    learning_success: undefined
  },
  {
    input: [0,1],
    target: 1,
    learning_error: undefined,
    learning_success: undefined
  },
  {
    input: [1,0],
    target: 1,
    learning_error: undefined,
    learning_success: undefined
  },
  {
    input: [1,1],
    target: 0,
    learning_error: undefined,
    learning_success: undefined
  },
]

const App = (props) => {

  const { weights1, weights2, weights3, epochs, learning_rate, bias, input_layer_n, hidden_layer_1_n, hidden_layer_2_n, output_layer_n } = useNeuralNetwork(props)
  const { train } = useTrainNetwork()

  return (
    <>
      <Navigation />
      {train(data, epochs, weights1, weights2, weights3, learning_rate, bias, input_layer_n, hidden_layer_1_n, hidden_layer_2_n, output_layer_n)}
    </>
  );
}

const mapStateToProps = state => ({
  input_layer_neurons: state.input_layer_neurons,
  hidden_layer_1_neurons: state.hidden_layer_1_neurons,
  hidden_layer_2_neurons: state.hidden_layer_2_neurons,
  output_layer_neurons: state.output_layer_neurons,
  epochs: state.epochs,
  learning_rate: state.learning_rate,
  bias: state.bias,
  max_weights_value: state.max_weights_value
})

export default connect(mapStateToProps)(App);
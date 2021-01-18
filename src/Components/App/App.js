import useNeuralNetwork from '../customHooks/useNeuralNetwork';
import Navigation from '../Navigation/Navigation'

const App = () => {

  const { weight1, weight2 } = useNeuralNetwork(1, 2, 1, 50000, 0.5, true)

  return (
    <>
      <Navigation />
      {console.log(weight1)}
    </>
  );
}

export default App;
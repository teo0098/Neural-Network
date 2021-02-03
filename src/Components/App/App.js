import { connect } from 'react-redux'

import Navigation from '../Navigation/Navigation'
import Network from '../Navigation/Network/Network'
import useApp from '../customHooks/useApp';
import Table from '../Table/Table'

const App = props => {

  const { setIsTraning, isLoading, isTraining, diseases, data, netSuccess } = useApp(props)

  return (
    <>
      <Navigation>
        <Network setIsTraning={setIsTraning} />
      </Navigation>
      {isLoading ? 
        <p style={{ color: 'white', fontSize: '30px', padding: '10px', textAlign: 'center' }}>Wczytywanie...</p>
        :
        <p style={{ color: 'white', fontSize: '30px', padding: '10px', textAlign: 'center' }}> Poprawność procesu nauczania wszystkich danych: {netSuccess.toFixed(2)}% </p>
      }
      {isTraining ? <p style={{ color: 'white', fontSize: '30px', padding: '10px', textAlign: 'center' }}>Trwa proces uczenia...</p> : null}
      {diseases.length !== 0 && data.length !== 0 && !isLoading ?
        <Table 
          diseases={diseases}
          data={data}
        />  
      : null}
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
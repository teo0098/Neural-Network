import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import useNeuralNetwork from '../customHooks/useNeuralNetwork';
import useFile from '../customHooks/useFile';
import Navigation from '../Navigation/Navigation'
import Network from '../Navigation/Network/Network'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const App = props => {

  const parameters = useNeuralNetwork(props)
  const { readDataFile, readDiseasesFile } = useFile()
  const [data, setData] = useState([])
  const [diseases, setDiseases] = useState([])
  const [isTraining, setIsTraning] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [netSuccess, setNetSuccess] = useState(0)

  const classes = useStyles()

  useEffect(() => {
    const getData = async () => {
      const d = await readDataFile()
      const dis = await readDiseasesFile()
      setData(d)
      setDiseases(dis)
      setIsLoading(false)
    }
    getData()
  }, [])

  useEffect(() => {
    if (isTraining) {
      const worker = new Worker(`${process.env.PUBLIC_URL}/trainNetwork.js`)
      worker.postMessage([data, parameters])
      worker.addEventListener('message', function(e) {
        setIsTraning(false)
        setData(JSON.parse(e.data))
        const averageLearnRate = JSON.parse(e.data).reduce((prevValue, currentValue) => prevValue + currentValue.average_learning_rate, 0)
        const percentages = averageLearnRate / JSON.parse(e.data).length
        setNetSuccess(percentages)
      }, false)
    }
  }, [isTraining])

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
        <div style={{ padding: '20px' }}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell> Nr </TableCell>
                    {diseases[0].split(';').map( (value, index) => (
                        <TableCell key={index}> {value} </TableCell>
                    ))}
                    <TableCell> Cel nauki </TableCell>
                    <TableCell> Nauczono </TableCell>
                    <TableCell> Poprawność procesu nauczania </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                    <TableCell> # </TableCell>
                    {diseases[1].split(';').map( (value, index) => (
                        <TableCell key={index}> {value} </TableCell>
                    ))}
                    <TableCell> # </TableCell>
                    <TableCell> # </TableCell>
                    <TableCell> # </TableCell>
                </TableRow>
                {diseases.map( (symptoms, index) => {
                    if (index >= 2) {
                        return (
                            <TableRow key={index}>
                                <TableCell> { index - 1 } </TableCell>
                                {symptoms.split(';').map( (symptom, index2) => (
                                    <TableCell key={index2}> {symptom} </TableCell>
                                ))}
                                <TableCell> {data[index - 2].target.map( value => (
                                  <span style={{ display: 'block' }}> {value} </span>
                                ))} </TableCell>
                                <TableCell> {data[index - 2].learning_success.map( value => (
                                  <span style={{ display: 'block' }}> {value} </span>
                                ))} </TableCell>
                                <TableCell> {Number(data[index - 2].average_learning_rate).toFixed(2)}% </TableCell>
                            </TableRow>
                        )
                    }
                    else return null
                })}
                </TableBody>
            </Table>
          </TableContainer>
        </div>
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
import { useEffect, useState } from 'react'

import useNeuralNetwork from './useNeuralNetwork';
import useFile from './useFile';

const useApp = (props) => {

    const parameters = useNeuralNetwork(props)
    const { readDataFile, readDiseasesFile } = useFile()
    const [data, setData] = useState([])
    const [diseases, setDiseases] = useState([])
    const [isTraining, setIsTraning] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [netSuccess, setNetSuccess] = useState(0)

    useEffect(() => {
      const getData = async () => {
        const d = await readDataFile()
        const dis = await readDiseasesFile()
        setData(d)
        setDiseases(dis)
        setIsLoading(false)
      }
      getData()
    }, [readDataFile, readDiseasesFile])
    
    useEffect(() => {
      if (isTraining) {
        const worker = new Worker(`${process.env.PUBLIC_URL}/trainNetwork.js`)
        worker.postMessage([data, parameters])
        worker.addEventListener('message', function(e) {
          setIsTraning(false)
          setData(JSON.parse(e.data))
          const averageLearnRate = JSON.parse(e.data).reduce((prevValue, currentValue) => {
            return currentValue.average_learning_rate >= 75 ? prevValue + 1 : prevValue + 0
          }, 0)
          const percentages = (averageLearnRate / JSON.parse(e.data).length) * 100
          setNetSuccess(percentages)
        }, false)
      }
    }, [isTraining, data, parameters])
    
    return { diseases, isLoading, netSuccess, setIsTraning, isTraining, data }
}

export default useApp
const useFile = () => {

    const readDataFile = async () => {
        let data = []
        try {
            const fetchedData = await fetch(`${process.env.PUBLIC_URL}/data.txt`)
            let parsedFetchedData = await fetchedData.text()
            parsedFetchedData = parsedFetchedData.split('\n')
            const [, , ...rest] = parsedFetchedData
            data = rest.map( value => {
                return {
                    input: value.split(';').map(v => +v).slice(0, value.split(';').length - 1),
                    target: +value.split(';')[value.split(';').length - 1],
                    learning_error: undefined,
                    learning_success: undefined
                }
            })
        }   
        catch {
            data = []
        }
        return data
    }

    const readDiseasesFile = async () => {
        let data = []
        try {
            const fetchedData = await fetch(`${process.env.PUBLIC_URL}/diseases.txt`)
            let parsedFetchedData = await fetchedData.text()
            data = parsedFetchedData.split('\n')
        }   
        catch {
            data = []
        }
        return data
    }

    return { readDataFile, readDiseasesFile }
}

export default useFile
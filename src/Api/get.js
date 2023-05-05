import axios from 'axios'

const fetchData = async() => {
    try {
        const {data} = await axios.get('https://api.tvmaze.com/search/shows?q=all')
        return data
    } catch (error) {
        console.log(error)
    }
}

export {fetchData}
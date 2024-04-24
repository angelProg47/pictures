import axios from 'axios'

const searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=8e2_J0QJtEG0TOvMjhm9CvxvsgI4jjvnOKzd-wflRxI'
    const response = await axios.get(url, {
        params: {
            query: term
        }
    })

    console.log(response.data.results)
    console.log(term)

    return response.data.results
}

export default searchImage
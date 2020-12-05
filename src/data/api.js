import axios from 'axios'
const base = 'https://products-api-e6dfd.web.app/api'

export const getApiProducts = async () => {
    return await axios.get(base)
    .then( function (response) {
        return response
    })
    .catch(function (error) {
        return error
    })
}

export const getApiProduct = async (id) => {
    const products = await getApiProducts();
    return products.data[id]
}



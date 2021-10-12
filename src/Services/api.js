import axios from "axios";

const BASE_URL = 'https://fakestoreapi.com'

export const getProduct = async () => {
    const response = await axios.get(`${BASE_URL}/products`)
    // console.log(response.data)
    return response.data
}
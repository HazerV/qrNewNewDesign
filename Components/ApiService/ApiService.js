import axios from "axios";
import {useState} from "react";

const server = 'https://api.menu.true-false.ru/api'

const ApiService = () => {
    const [loading, setLoading] = useState(true)
    const getCategories = async (url) => {
        const data = await axios.get(`$server}/${url}`, {headers: {SubDomain: 'zaryadye'}});
        if (data.status === 200) {
            setLoading(false);
        }
        return data.data;
    }

    const getProducts = async (url) => {
        const data = await axios.get(`$server}/${url}`, {headers: {SubDomain: 'zaryadye'}});
        if (data.status === 200) {
            setLoading(false)
        } return data.data
    }

    return {getProducts, getCategories}
}

export default ApiService

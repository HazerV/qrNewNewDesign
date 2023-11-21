import React, {useState, useEffect} from "react";
import axios from "axios";

const _apiBase = 'https://api.menu.true-false.ru/api'

const ApiService = () => {
    const [loading, setLoading] = useState(true)
    const getCategories = async (url) => {
        const data = await axios.get(`${_apiBase}/${url}`, {headers: {SubDomain: 'zaryadye'}});
        if (data.status === 200) {
            setLoading(false);
        }
        return data.data;
    }

    return {getCategories}
}

export default ApiService
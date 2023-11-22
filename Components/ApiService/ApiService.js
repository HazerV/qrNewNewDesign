import React, {useState, useEffect} from "react";
import axios from "axios";

const _apiBase = 'https://api.menu.true-false.ru/api/config'

const ApiService = () => {

    const getConfig = () => {
        axios.get(_apiBase, {
            headers: {'SubDomain': 'zaryadye'}
        })
            .then (
                res => {

                }
            )
    }
}

export default ApiService
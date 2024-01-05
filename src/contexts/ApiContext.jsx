import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

// eslint-disable-next-line react/prop-types
const ApiContextProvider = ({children})=>{

    const [exchangeApi, setExchangeApi] = useState([])
    const [currency, setCurrency] = useState("inr")
    const Base_URL = "https://api.coingecko.com/api/v3"

    useEffect(()=>{
        fetch(`${Base_URL}/coins/markets?vs_currency=inr&x_cg_demo_api_key=CG-NoKwAbkgJSXrr1AymgNnqMhb`)
        .then((res)=>res.json())
        .then((data)=>setExchangeApi(data))
    },[])

    useEffect(()=>{
        fetch(`${Base_URL}/coins/markets?vs_currency=${currency}&x_cg_demo_api_key=CG-NoKwAbkgJSXrr1AymgNnqMhb`)
        .then((res)=>res.json())
        .then((data)=>setExchangeApi(data))
    },[currency])

    const currencyHandler=()=>{
        if(currency==="inr"){
            setCurrency("usd")
        }
        else{
            setCurrency("inr")
        }
    }


    return <ApiContext.Provider value={{exchangeApi, currencyHandler, currency, Base_URL}}>{children}</ApiContext.Provider>
}

export default ApiContextProvider
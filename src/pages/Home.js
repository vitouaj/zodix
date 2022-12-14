import Loading from '../components/Loading'
import Fot from '../components/Fot'
import Search from '../components/Search'
import Result from '../components/Result'

import { useEffect, useState } from 'react'
import axios from 'axios'


const Home = (props) => {



    const [data, setData] = useState('')
    const [loading, setLoading] = useState(false)
    const [showResult, setShowResult] = useState(false)
    const [sign, setSign] = useState('')
    const [date, setDate] = useState('')

    const onChangeSign = (e) => {
        setSign(e.target.value)
    }

    const onChangeDate = (e) => {
        setDate(e.target.value)
    }

    const search = async () => {
        setLoading(true)
        setShowResult(false)

        const res = await axios({
            method: 'POST',
            url: process.env.REACT_APP_API_BASE_URL,
            params: {sign: sign, day: date},
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_ZODIX_XKEY,
              'X-RapidAPI-Host': process.env.REACT_APP_ZODIX_XHOST
            }
        })

        setLoading(false)
        setShowResult(true)
        console.log(res.data)
        setData(res.data)
    }

    useEffect(()=>{
        
    })

    return (
        <>
            (<Search onChangeSign={onChangeSign} onChangeDate={onChangeDate} search={search}/>
            {loading ? (
                <Loading/>
            ) : (
                <></>
            )}

            { showResult ? (
                <Result fetchedData={data}/>
            ):(<></>)}

            
            <Fot/>)
        </>
    )
}

export default Home
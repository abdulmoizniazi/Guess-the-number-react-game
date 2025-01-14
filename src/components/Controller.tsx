// import React from 'react'
import { useState, useEffect } from "react"
import Button from "./Button"
import Betbox from "./Betbox"
import axios from "axios"

function Controller() {
    const [wonbet, setWonbet] = useState(false)
    const [betDirection, setBetDirection] = useState('up')
    const [isLoading, setIsLoading] = useState(false)
    const [valueStored, setValueStored] = useState(0)

    const placeBetfn = async () => {
        // setWonbet(!wonbet)

        setIsLoading(true)
        let isWinner = false 
        const url = "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"
        await axios.get(url).then((res) => {
            if (res.status == 200) {
                // console.log(res.data)
                const val = res.data
                setValueStored(val)
                if (val >= 50 && betDirection=="up") {
                    isWinner= true
                } else if (val <= 50 && betDirection == "down") {
                    isWinner= true
                 } //else {
                //     isWinner= false
                // }
            } else {
                console.error("There is some kind of error in controller file fetching process...!")
            }
        }).catch((err) => {
            console.log(err.data, err.message)
        })
        setWonbet(isWinner)
        setIsLoading(false)
    }
    
    useEffect(() => {
        console.log(wonbet)
    }, [wonbet])
    return (
        <>
        <div className="w-full md:[850px] lg:[1200px] bg-gray-500 mx-auto py-5 px-20">
                <Button placeBet={placeBetfn}></Button>
                <Betbox betDirection={betDirection} setBetDirection={setBetDirection}
                isLoading={isLoading}
                valueStored={valueStored}
                wonbet={wonbet}></Betbox>
        </div>
        </>
  )
}

export default Controller
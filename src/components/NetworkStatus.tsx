import React, {useState, useEffect, Fragment} from 'react'
import {toastify} from '../helpers'

export const NetworkStatus = () => {
    const [, setConnected]=useState(false)
   useEffect(() => {
    window.addEventListener("load",()=>{
        navigator.onLine ? setConnected(true):setConnected(false)
        window.addEventListener("online",()=>{
            toastify.alertSuccess('You are back online', 2000)
        })
        window.addEventListener("offline",()=>{
            toastify.alertError('Connection has been lost',2000)
        })
    }, false)
   }, [])
    return (
       <Fragment>
       </Fragment>
    )
}

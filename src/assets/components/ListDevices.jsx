import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../lib/init-firebase";

export default function ListDevices() {
    const [devices, setDevices] = useState([])

    useEffect(() => {
        getDevices()
    }, [])

    useEffect(() => {
        
    }, setDevices)

    function getDevices() {
        const deviceCollectionRef = collection(db, 'devices')
        getDocs(deviceCollectionRef)
            .then(response => {
                const dvcs = response.docs.map(doc => ({
                    data: doc.data(), 
                    id: doc.id
                }))
                setDevices(dvcs)
            }).catch(e => console.log(e.message))
    }
    return (
        <div>
            <h1>Devices</h1>
            <button onClick={getDevices}>Refresh</button>
            <ul>
                {devices.map(device => <li key={device.id}>{device.data.hostname} - <small>{device.id}</small></li>)}
            </ul>
        </div>
    )
}
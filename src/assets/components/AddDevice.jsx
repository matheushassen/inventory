import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../lib/init-firebase";


export default function AddDevice() {
    const [hostname, setHostname] = useState('')
    const [patrimonium, setPatrimonium] = useState()
    const [room, setRoom] = useState('')
    const [serial, setSerial] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if( room === '') {
            return
        }
        
        const deviceCollectionRef = collection(db, 'devices')
        addDoc(deviceCollectionRef, {hostname, patrimonium, room, serial})
            .then(response=>{console.log(response)})
            .catch(error => {console.log(error)})

        alert(room)
    }
    
    return (
        <div>
            <h1>Add Device</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="hostname">Hostname: </label>
                <input type="text" name="hostname" id="hostname" value={hostname} onChange={e => setHostname(e.target.value)}/>

                <label htmlFor="patrimonium">Patrimonium: </label>
                <input type="number" name="patrimonium" id="patrimonium" value={patrimonium} onChange={e => setPatrimonium(e.target.value)}/>

                <label htmlFor="room">Room: </label>
                <input type="text" name="room" id="room" value={room} onChange={e => setRoom(e.target.value)}/>

                <label htmlFor="serial">Serial: </label>
                <input type="text" name="serial" id="serial" value={serial} onChange={e => setSerial(e.target.value)}/>

                <button type="submit">Save</button>
            </form>
        </div>
    )
}
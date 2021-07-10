import React from "react"
import { Infobox } from "../containers"
import { Dashboard } from "../components"
import bookingsData from "../fixtures/bookedActivities.json"
import waitingData from "../fixtures/waitingActivities.json"

export default function dashboard(){
    return(
        <Dashboard>
            <Dashboard.Frame>
                <Dashboard.Column marginLeft="8rem" marginRight="0rem">
                    <Dashboard.Title color="#d4df64">LE TUE PROSSIME ATTIVITA</Dashboard.Title>
                    {bookingsData.map((data, index) => (
                        index < 2 ? <Infobox key={data.id} data={data} type="bookings"/> : null
                    ))}
                </Dashboard.Column>
            </Dashboard.Frame>

            <Dashboard.Frame>
                <Dashboard.Column marginLeft="0rem" marginRight="8rem">
                    <Dashboard.Title color="#053968">HAI 1 ATTIVITA IN LISTA D'ATTESA</Dashboard.Title>
                    {waitingData.map((data, index) => (
                        index < 2 ? <Infobox key={data.id} data={data} type="waiting-list"/> : null
                    ))}
                </Dashboard.Column>
            </Dashboard.Frame>
        </Dashboard>
    )
}
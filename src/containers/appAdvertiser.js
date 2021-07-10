import React from "react"
import { Advertiser } from "../components"

export default function appAdvertiser(){
    return(
        <Advertiser>
            <Advertiser.Frame>
                <Advertiser.GroupContainer>
                    <Advertiser.Group>
                        <Advertiser.Title color="#d4df64">
                            SCARICA ORA LA NUOVA APP
                        </Advertiser.Title>
                    </Advertiser.Group>
                </Advertiser.GroupContainer>
            </Advertiser.Frame>
        </Advertiser>
    )
}
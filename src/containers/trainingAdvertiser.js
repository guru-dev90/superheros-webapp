import React from "react"
import { Advertiser } from "../components"

export default function trainingAdvertiser(){
    return(
        <Advertiser>
            <Advertiser.Frame>
                <Advertiser.GroupContainer>
                    <Advertiser.Group>
                        <Advertiser.Title color="white">
                            Allenati con noi all'arco della pace<br/>
                            Tutte le domeniche
                        </Advertiser.Title>
                        <Advertiser.Button>
                            SCOPRI DI PIU
                        </Advertiser.Button>
                    </Advertiser.Group>
                </Advertiser.GroupContainer>
            </Advertiser.Frame>
        </Advertiser>
    )
}
import React from "react"
import { Infobox } from "../components"

export default function infobox({data, type}){
    return(
      <Infobox>
          <Infobox.Frame size="35%">
              <Infobox.Image src={data.image}></Infobox.Image>
          </Infobox.Frame>
          <Infobox.Frame size="65%">
              <Infobox.Title>{data.name}</Infobox.Title>
              <Infobox.Date>{data.date}</Infobox.Date>
              <Infobox.Grid margin="0rem">
                <Infobox.ActivityTime>{data.startingTime} - {data.endingTime}</Infobox.ActivityTime>
                <Infobox.Duration>{data.duration}</Infobox.Duration>
              </Infobox.Grid>
              
              { type === "bookings" 
              ?
                <Infobox.Grid margin="1rem">
                    <Infobox.GridColumn>
                        <Infobox.GridTitle>Club</Infobox.GridTitle>
                        <Infobox.GridValue>{data.club}</Infobox.GridValue>
                    </Infobox.GridColumn>
                    <Infobox.GridColumn>
                        <Infobox.GridTitle>Sala</Infobox.GridTitle>
                        <Infobox.GridValue>{data.sala}</Infobox.GridValue>
                    </Infobox.GridColumn>
                </Infobox.Grid>
              :
                <Infobox.Grid margin="1rem">
                    <Infobox.WaitingBeforeMe>{`${data.waitingBeforeMe} persone prima di te`}</Infobox.WaitingBeforeMe>
                    <Infobox.ButtonText>{data.buttonText}</Infobox.ButtonText>
                </Infobox.Grid>
              }
          </Infobox.Frame>
      </Infobox>
    )
}
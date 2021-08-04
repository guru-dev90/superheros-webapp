import React from "react"
import { Infobox } from "../components"

export default function InfoboxContainer({data}){
    return(
      <Infobox>
          <Infobox.Frame size="35%">
              <Infobox.Image src={data.images.sm}>
                {
                //<Infobox.Icon src={process.env.PUBLIC_URL + '/images/assets/small-heart/small-heart.svg'} alt="Like"/>
                }
              </Infobox.Image>
          </Infobox.Frame>
          <Infobox.Frame size="65%">
              <Infobox.Title>{data.name}</Infobox.Title>
              <Infobox.Text>{data.biography.fullName}</Infobox.Text>
              <Infobox.Text><p style={{color:'white', fontSize: '0.7rem', display: 'inline'}}>9.7</p>/10</Infobox.Text>
          </Infobox.Frame>
      </Infobox>
    )
}
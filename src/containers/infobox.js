import React from "react"
import { Infobox, HeartIcon } from "../components"
import fistIcon from '../icons/fist/fist.svg';

export default function InfoboxContainer({iconType, data, onClick}){

  let sum= 0
  
  for (const property in data.powerstats) {
    sum = sum + data.powerstats[property]
  }

  let power = Math.floor((sum * 10) / 600)

    return(
      <Infobox onClick={onClick} background={data.images.sm}>
          <Infobox.Frame size="35%">
            <div style={{position: 'relative', width: "fit-content", height: "fit-content"}}>
              <Infobox.Image src={data.images.sm}/>
              <HeartIcon.Container>
                <HeartIcon.Icon active={true} src={iconType}/>
              </HeartIcon.Container>
            </div>
          </Infobox.Frame>
          <Infobox.Frame size="65%">
              <Infobox.Title>{data.name}</Infobox.Title>
              <Infobox.Text>{data.biography.fullName ? data.biography.fullName : 'Name not available'}</Infobox.Text>
              <Infobox.Text>
                <img src={fistIcon} alt="Fist Icon"/>
                <p style={{color:'white', fontSize: '0.9em', display: 'inline'}}>{power}</p>/10
              </Infobox.Text>
          </Infobox.Frame>
      </Infobox>
    )
}
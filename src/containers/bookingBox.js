/*import { white } from "jest-matcher-utils/node_modules/chalk";*/
import React, { useState } from "react"
import Select from "react-select";

import { Bookingbox, SelectContainer } from "../components"
import activities from "../fixtures/activities.json"


const allActivities = [
  { label: 'All', value: 'All' },
  { label: 'Hatha Yoga', value: 'Hatha Yoga' },
  { label: 'Pancafit', value: 'Pancafit' },
  { label: 'Body Pump', value: 'Body Pump' },

];

const categories = [
  { label: 'All', value: 'All' },
  { label: 'Attività in acqua', value: 'Attività in acqua' },
  { label: 'Cardiovascolari e tonificazione', value: 'Cardiovascolari e tonificazione' },
  { label: 'Danza', value: 'Danza' },

];

const clubAvailables = [
  { label: 'All', value: 'All' },
  { label: 'Ravizza', value: 'Ravizza' },
];


export default function BookingboxContainer(){

  const [ activity, setActivity ] = useState('All')
  const [ category, setCategory ] = useState('All')
  const [ club, setClub ] = useState('All')


  const customSelectStyles = {

    control: (styles) => ({
          ...styles,
          borderTop: '0px hidden white',
          borderBottom: '1px solid black',
          borderRight: '0px hidden white',
          borderLeft: '0px hidden white',
          borderRadius: '0px',
          borderColor: 'black !important ',
          boxShadow: 'none',
          width: '200px',
    }),
    indicatorContainer: (styles) => ({
      ...styles,
      color: '#053968'
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      display: 'none'
    }),
    singleValue: (styles) => ({
      ...styles,
      fontSize: '0.8rem',
      color: '#053968',
      fontWeight: 'bold'
    }),
    option: (styles) => ({
      ...styles,
      fontSize: '0.8rem',
      color: '#053968',
      fontWeight: 'bold'
    })
  }

  const result = activities.map((data) => (
    ( ( activity === data.name || activity === 'All' ) && 
    ( category === data.category || category === 'All' ) &&
    ( club === data.club || club === 'All' ) )
    ?
      <Bookingbox.Frame key={data.id}>
        <Bookingbox.Group padding="0em">
          <Bookingbox.Image src={process.env.PUBLIC_URL + data.image }></Bookingbox.Image>
        </Bookingbox.Group>
        <Bookingbox.Group width="15%">
          <Bookingbox.Title>{data.name}</Bookingbox.Title>
        </Bookingbox.Group>
        <Bookingbox.Group width="5%">
          <Bookingbox.Duration>{data.duration}</Bookingbox.Duration>
        </Bookingbox.Group>
        <Bookingbox.Group width="15%">
          <Bookingbox.ActivityTime>{data.startingTime} - {data.endingTime}</Bookingbox.ActivityTime>
        </Bookingbox.Group>
        <Bookingbox.Group width="15%">
          <Bookingbox.Duration>
            {
              data.bookingState === "Sei iscritto"
              ? "Sei iscritto"
              :data.bookingState.hasOwnProperty("availableSeat") 
              ? data.bookingState.availableSeat + "\n posti disponibili"
              :data.bookingState.hasOwnProperty("peopleWaiting")
              ? data.bookingState.peopleWaiting + "\n persone in attesa"
              :data.bookingState.hasOwnProperty("timeToActivityOpen")
              ? data.bookingState.timeToActivityOpen + "\n All'apertura iscrizione"
              :data.bookingState.hasOwnProperty("peopleBeforeYou")
              ? "Sei in lista d'attesa\n " + data.bookingState.peopleBeforeYou + "persone prima di te"
              : null
            }
          </Bookingbox.Duration>
        </Bookingbox.Group>
        <Bookingbox.Group width="20%">
          {
              data.bookingState === "Sei iscritto"
              ? <Bookingbox.ButtonCancel>ANNULLA</Bookingbox.ButtonCancel>
              :data.bookingState.hasOwnProperty("availableSeat") 
              ? <Bookingbox.ButtonSubscribe>ISCRIVITI</Bookingbox.ButtonSubscribe>
              :data.bookingState.hasOwnProperty("peopleWaiting")
              ? <Bookingbox.ButtonOnHold>METTITI IN ATTESA</Bookingbox.ButtonOnHold>
              :data.bookingState.hasOwnProperty("timeToActivityOpen")
              ? <Bookingbox.ButtonActivityNotOpen>ISCRIVITI</Bookingbox.ButtonActivityNotOpen>
              :data.bookingState.hasOwnProperty("peopleBeforeYou")
              ? <Bookingbox.ButtonCancel>ANNULLA</Bookingbox.ButtonCancel>
              : null
            }
        </Bookingbox.Group>
        <Bookingbox.Group>
          <Bookingbox.Title>{">"}</Bookingbox.Title>
        </Bookingbox.Group>
    </Bookingbox.Frame>
  : null
  ))

  return(
    <>
      <SelectContainer>
        <SelectContainer.OuterFrame>
          <SelectContainer.Frame>
            <Select 
              defaultValue={{ label: "All", value: "All" }}
              styles={customSelectStyles} 
              options={allActivities} 
              onChange={opt => setActivity(opt.value)}
            />
          </SelectContainer.Frame>
          <SelectContainer.Frame>
            <Select 
              defaultValue={{ label: "All", value: "All" }}
              styles={customSelectStyles} 
              options={categories} 
              onChange={opt => setCategory(opt.value)}
            />
          </SelectContainer.Frame>
          <SelectContainer.Frame>
            <Select 
              defaultValue={{ label: "All", value: "All" }}
              styles={customSelectStyles} 
              options={clubAvailables} 
              onChange={opt => setClub(opt.value)}
            />
          </SelectContainer.Frame>
        </SelectContainer.OuterFrame>
      </SelectContainer>
      <Bookingbox>
        <Bookingbox.Inner>
          {result}
        </Bookingbox.Inner>
      </Bookingbox>
    </>
  )
}